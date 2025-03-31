import React, { useState } from 'react';
import './DashBoard.css'; // Reuse the same CSS for consistent styling
import { useNavigate } from 'react-router-dom';

function Regulations() {
  const navigate = useNavigate();
  const [showActionSteps, setShowActionSteps] = useState(false);

  return (
    <div className="dashboard">
      <nav className="navbar">
        <div className="navbar-left">
          <img src="images/watsewise-icon.jpeg" alt="Logo" className="navbar-logo" />
          <h1 className="navbar-title">WasteWise</h1>
          <button onClick={() => { navigate('/csu-ist621-waste-wise/dashboard') }}>DashBoard</button>
          <button className="active" onClick={() => { navigate('/csu-ist621-waste-wise/regulations') }}>Regulations</button>
          <button>Food Redistribution</button>
          <button>Alerts & Notifications</button>
        </div>
      </nav>

      <main className="dashboard-content">
        <h1>Regulations</h1>
        <div className="regulations-panel">
          <div className="regulation-item">
            <h2>1. Understand and Implement the FDA Food Code</h2>
            <p>
              "The FDA Food Code serves as a model for safeguarding public health and ensuring food is unadulterated and honestly presented when offered to the consumer. 
              It provides guidelines on proper food storage, handling, and preparation to minimize waste and prevent foodborne illnesses."
            </p>
            <div className={`action-steps-box ${showActionSteps ? 'open' : ''}`}>
              <button 
                className="toggle-button" 
                onClick={() => setShowActionSteps(!showActionSteps)}
              >
                Action Steps
              </button>
              {showActionSteps && (
                <ul className="toggle-content">
                  <li><strong>Adopt Best Practices:</strong> Align your establishment's food safety protocols with the FDA Food Code to ensure consistency and compliance</li>
                  <li><strong>Regular Training:</strong> Conduct ongoing staff training on food safety and waste reduction techniques as outlined in the Food Code</li>
                </ul>
              )}
            </div>
          </div>
          <div className="regulation-item">
            <h2>2. Utilize Standardized Date Labeling</h2>
            <p>
              "Confusion over date labels like 'sell-by,' 'use-by,' and 'best-before' can lead to unnecessary food waste. 
              The FDA and USDA recommend using the term 'Best if Used By' to indicate peak quality, reducing misunderstandings and promoting better food utilization."
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Regulations;
