import React from 'react';
import NavigationMenu from './NavigationMenu';
import Header from './Header';
import DashboardContent from './DashboardContent';
import './MainApp.css';

function MainApp() {
  return (
    <div className="dashboard-container">
      <NavigationMenu />
      <div className="main-content">
        <Header />
        <DashboardContent />
      </div>
    </div>
  );
}

export default MainApp;