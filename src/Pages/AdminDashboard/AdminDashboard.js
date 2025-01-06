import React, { useState } from "react";
import "./AdminDashboard.css";
import AvailableProjects from "../PhotographerDashboard/AvailableProjects";
import MyProjects from "../PhotographerDashboard/MyProjects";
import Diary from "../PhotographerDashboard/Diary";
import Payment from "../PhotographerDashboard/Payment";
import Settings from "../PhotographerDashboard/Settings";
import { FaHome, FaFolderOpen, FaBookOpen, FaCreditCard, FaCog, FaUser } from "react-icons/fa";


const AdminDashboard = () => {
  const [activeComponent, setActiveComponent] = useState("AvailableProjects");

  // Function to render the active component
  const renderComponent = () => {
    switch (activeComponent) {
      case "AvailableProjects":
        return <AvailableProjects />;
      case "MyProjects":
        return <MyProjects />;
      case "Diary":
        return <Diary />;
      case "Payment":
        return <Payment />;
      case "Settings":
        return <Settings />;
      default:
        return <div>Select a menu item</div>;
    }
  };

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">Unite Compliance</div>
        <ul className="menu-list">
          <li
            className={`menu-item ${
              activeComponent === "AvailableProjects" ? "active" : ""
            }`}
            onClick={() => setActiveComponent("AvailableProjects")}
          >
            <span className="menu-icon">
              <FaHome />
            </span>
            <span>Available Projects</span>
          </li>
          <li
            className={`menu-item ${
              activeComponent === "MyProjects" ? "active" : ""
            }`}
            onClick={() => setActiveComponent("MyProjects")}
          >
            <span className="menu-icon">
              <FaFolderOpen />
            </span>
            <span>My Projects</span>
          </li>
          <li
            className={`menu-item ${
              activeComponent === "Diary" ? "active" : ""
            }`}
            onClick={() => setActiveComponent("Diary")}
          >
            <span className="menu-icon">
              <FaBookOpen />
            </span>
            <span>Diary</span>
          </li>
          <li
            className={`menu-item ${
              activeComponent === "Payment" ? "active" : ""
            }`}
            onClick={() => setActiveComponent("Payment")}
          >
            <span className="menu-icon">
              <FaCreditCard />
            </span>
            <span>Payment</span>
          </li>
          <li
            className={`menu-item ${
              activeComponent === "Settings" ? "active" : ""
            }`}
            onClick={() => setActiveComponent("Settings")}
          >
            <span className="menu-icon">
              <FaCog />
            </span>
            <span>Settings</span>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="app-bar">
          <div className="left-section">
            <h1>{activeComponent.replace(/([A-Z])/g, " $1").trim()}</h1>
          </div>
          <div className="right-section">
            <div className="user-profile">
              <div>
                <h4 className="name-title">Pathum Bandara</h4>
                <p className="name-subtitle">Photographer</p>
              </div>
              <div className="user-avatar">
                <FaUser size={32} />
              </div>
            </div>
          </div>
        </div>
        <div className="content">{renderComponent()}</div>
      </div>
    </div>
  );
};

export default AdminDashboard;
