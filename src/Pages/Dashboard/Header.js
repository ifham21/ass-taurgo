import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="profile">
        <span>Pathum Bandara</span>
        <img src="/profile-icon.png" alt="Profile" className="profile-icon" />
      </div>
    </div>
  );
}

export default Header;