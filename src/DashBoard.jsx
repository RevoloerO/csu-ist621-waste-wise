import React from 'react';
import './DashBoard.css';
import { useNavigate } from 'react-router-dom';

function DashBoard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <nav className="navbar">
        <div className="navbar-left">
          <img src="images/watsewise-icon.jpeg" alt="Logo" className="navbar-logo" />
          <h1 className="navbar-title" onClick={() => { navigate('/csu-ist621-waste-wise/') }}>WasteWise</h1>
          <button className="active" onClick={() => { navigate('/csu-ist621-waste-wise/dashboard') }}>DashBoard</button>
          <button onClick={() => { navigate('/csu-ist621-waste-wise/regulations') }}>Regulations</button>
          <button>Food Redistribution</button>
          <button>Alerts & Notifications</button>
        </div>
      </nav>

      <main className="dashboard-content">
        <h1>Real-Time Food Waste Predictions</h1>
        <div className="charts">
          <div className="chart">
            <h2>Monthly Food Waste Trends</h2>
            <img src="path/to/monthly-trends-chart.jpg" alt="Monthly Food Waste Trends" />
          </div>
          <div className="chart">
            <h2>Annual Food Waste Forecast</h2>
            <img src="path/to/annual-forecast-chart.jpg" alt="Annual Food Waste Forecast" />
          </div>
        </div>

        <section className="alerts">
          <h2>Alerts and Notifications</h2>
          <div className="alert">
            <p><strong>Food Waste Alert:</strong> Over 200 lbs of fresh produce available from Farm Fresh Co.</p>
            <span>10 minutes ago</span>
          </div>
          <div className="alert">
            <p><strong>Connection Established:</strong> Farm Fresh Co. has connected with Community Food Bank.</p>
            <span>5 minutes ago</span>
          </div>
          <div className="alert">
            <p><strong>Urgent Excess Bread:</strong> Local Bakery has 50 loaves of bread to donate.</p>
            <span>15 minutes ago</span>
          </div>
        </section>

        <section className="profile-statistics">
          <h2>Profile Statistics</h2>
          <div className="statistics">
            <div className="stat">
              <h3>Contribution Over Time</h3>
              <img src="path/to/contribution-chart.jpg" alt="Contribution Over Time" />
            </div>
            <div className="stat">
              <h3>Impact by Category</h3>
              <img src="path/to/impact-chart.jpg" alt="Impact by Category" />
            </div>
          </div>
          <p>75% Reduction Achieved</p>
        </section>
      </main>
    </div>
  );
}

export default DashBoard;
