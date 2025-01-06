import React, { useState } from "react";
import "./AdminDashboard.css";
import DashboardComponent from "./DashboardComponent";
import AllProperty from "./AllProperty";
import Permission from "./Permission";
import Diary from "./Diary";
import Payment from "./Payment";
import Settings from "./Settings";
import { FaHome, FaFolderOpen, FaBookOpen, FaCreditCard, FaCog, FaUser } from "react-icons/fa";



const AdminDashboard = () => {
  const [activeComponent, setActiveComponent] = useState("Dashboard");

  // Function to render the active component
  const renderComponent = () => {
    switch (activeComponent) {
      case "Dashboard":
        return <DashboardComponent />;
      case "All Property":
        return <AllProperty />;
      case "Permission":
        return <Permission />;
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
          {/* Dashboard */}
          <li
            className={`menu-item ${
              activeComponent === "Dashboard" ? "active" : ""
            }`}
            onClick={() => setActiveComponent("Dashboard")}
          >
            <span className="menu-icon">
              <FaHome />
            </span>
            <span>Dashboard</span>
          </li>

          {/* All Property */}
          <li
            className={`menu-item ${
              activeComponent === "AllProperty" ? "active" : ""
            }`}
            onClick={() => setActiveComponent("All Property")}
          >
            <span className="menu-icon">
              <FaFolderOpen />
            </span>
            <span>All Property</span>
          </li>

          {/* Permission */}
          <li
            className={`menu-item ${
              activeComponent === "Permission" ? "active" : ""
            }`}
            onClick={() => setActiveComponent("Permission")}
          >
            <span className="menu-icon">
              <FaBookOpen />
            </span>
            <span>Permission</span>
          </li>

          {/* Diary */}
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

          {/* Payment */}
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
          
          {/* Settings */}
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
                <h4 className="name-title">Ahmed Ifham</h4>
                <p className="name-subtitle">Admin</p>
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
