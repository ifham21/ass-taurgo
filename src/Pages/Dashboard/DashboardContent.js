import React from 'react';
import './DashboardContent.css';

function DashboardContent() {
  return (
    <div className="dashboard-content">
      <div className="summary-cards">
        <div className="card">Total Number of Clients<br /><span>1235</span></div>
        <div className="card">Number of Inventory<br /><span>$2,220.42</span></div>
        <div className="card">Number of New Projects<br /><span>2,220</span></div>
      </div>
      <div className="charts">
        <div className="chart">Revenue Pie Chart</div>
        <div className="chart">Partners Pie Chart</div>
      </div>
      <div className="tables">
        <div className="table">360 Inventories Table</div>
        <div className="table">Designers Table</div>
      </div>
    </div>
  );
}

export default DashboardContent;