import React from 'react';
import './NavigationMenu.css';

function NavigationMenu() {
  return (
    <div className="sidebar">
      <div className="logo">UNITE COMPLIANCE</div>
      <ul className="menu">
        <li>Dashboard</li>
        <li>All Property</li>
        <li>Permission</li>
        <li>Diary</li>
        <li>Payment</li>
        <li>Settings</li>
      </ul>
    </div>
  );
}

export default NavigationMenu;