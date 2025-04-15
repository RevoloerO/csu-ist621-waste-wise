import React, { useEffect, useState } from 'react';
import './DashBoard.css'; // Reuse the same CSS for consistent styling
import { useNavigate } from 'react-router-dom';
import Footer from './Footer.jsx'; // Import Footer component
import FoodMap from './FoodMap.jsx'; // Import the updated Map component
import UserNavBar from './UserNavBar.jsx'; // Import UserNavBar component
import users from '../mock-database/users.json'; // Import mock database

function FoodRedistribution() {
  const navigate = useNavigate();

  const checkLoginStatus = () => {
    const loggedInUser = users.find((user) => user.isLoggedIn);
    if (!loggedInUser) {
      alert('Please, log in');
      navigate('/csu-ist621-waste-wise/');
    }
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  return (
    <div className="dashboard">
      <UserNavBar /> {/* Replace custom navbar with UserNavBar component */}
      <main className="dashboard-content">
        <h1>Food Redistribution</h1> {/* Updated heading */}
        <p>
          Food redistribution involves collecting surplus food from producers, retailers, or restaurants and distributing it to those in need. This practice helps reduce food waste while addressing food insecurity.
        </p>
        <section className="redistribution-strategies">
          <h2>Strategies for Effective Food Redistribution</h2> {/* Updated heading */}
          <div className="strategies-container">
            <div className="strategy-card">
              <h3>🤝 Partner with Food Banks</h3>
              <p>
                Collaborate with local food banks to ensure surplus food reaches communities in need. Build long-term partnerships to maximize impact.
              </p>
            </div>
            <div className="strategy-card">
              <h3>📱 Leverage Technology</h3>
              <p>
                Use apps and platforms to connect food donors with organizations that can redistribute food efficiently. Technology bridges the gap between surplus and need.
              </p>
            </div>
            <div className="strategy-card">
              <h3>✅ Ensure Food Safety</h3>
              <p>
                Follow proper storage and transportation guidelines to maintain the quality and safety of redistributed food. Adhering to safety standards builds trust.
              </p>
            </div>
            <div className="strategy-card">
              <h3>🌍 Promote Awareness</h3>
              <p>
                Educate communities and businesses about the importance of food redistribution. Awareness campaigns can encourage more participation and reduce waste.
              </p>
            </div>
          </div>
        </section>
        <section className="how-it-works">
          <h2>🔧 How It Works</h2>
          <p>A clean 3-step process to redistribute surplus food effectively:</p>
          <div className="how-it-works-steps">
            <div className="step">
              <h3>📦 List Surplus Food</h3>
              <p>
                Upload food type, quantity, expiration date, and location. Our system logs it instantly and verifies with blockchain.
              </p>
            </div>
            <div className="step">
              <h3>🤖 AI Matching Engine</h3>
              <p>
                WasteWise uses location, food category, and urgency to connect you with nearby food banks who need what you have—before it expires.
              </p>
            </div>
            <div className="step">
              <h3>🚚 Track & Confirm Delivery</h3>
              <p>
                Confirm pick-up/delivery with timestamped smart contract records. Food banks log compliance, and you get visibility every step of the way.
              </p>
            </div>
          </div>
          <button 
            className="post-surplus-button" 
            onClick={() => alert('Redirecting to Post Surplus Page...')}
          >
            Post Surplus Now
          </button>
        </section>
        <section className="combined-food-listings">
          <h2>Available Food Listings & Real-Time Surplus Data</h2>
          <div className="food-listings">
            <ul className="food-listing-cards">
              <li className="food-card">
                <h3>🍅 Tomatoes</h3>
                <p><strong>Quantity:</strong> 50 lbs</p>
                <p><strong>Expiration:</strong> 2023-11-15</p>
                <button className="info-button" onClick={() => alert('Supplier Info: Local Farm Co.')}>Supplier Info</button>
              </li>
              <li className="food-card">
                <h3>🍞 Bread Loaves</h3>
                <p><strong>Quantity:</strong> 30</p>
                <p><strong>Expiration:</strong> 2023-11-10</p>
                <button className="info-button" onClick={() => alert('Supplier Info: Bakery Delight')}>Supplier Info</button>
              </li>
              <li className="food-card">
                <h3>🍎 Apples</h3>
                <p><strong>Quantity:</strong> 100 lbs</p>
                <p><strong>Expiration:</strong> 2023-11-20</p>
                <button className="info-button" onClick={() => alert('Supplier Info: Orchard Fresh')}>Supplier Info</button>
              </li>
              <li className="food-card">
                <h3>🥛 Milk Cartons</h3>
                <p><strong>Quantity:</strong> 20</p>
                <p><strong>Expiration:</strong> 2023-11-08</p>
                <button className="info-button" onClick={() => alert('Supplier Info: Dairy Best')}>Supplier Info</button>
              </li>
            </ul>
          </div>
          <h3>Real-Time Surplus Listings</h3>
          <table className="mock-data-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Expires On</th>
                <th>Food Type</th>
                <th>Status</th>
                <th>Match Found</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>🍅 Tomatoes (Fresh)</td>
                <td>200 lbs</td>
                <td>2025-05-20</td>
                <td>Vegetables</td>
                <td><span className="status-listed">Listed</span></td>
                <td><span className="match-yes">✅ Yes</span></td>
              </tr>
              <tr>
                <td>🍗 Chicken Breasts</td>
                <td>150 lbs</td>
                <td>2025-05-22</td>
                <td>Poultry</td>
                <td><span className="status-listed">Listed</span></td>
                <td><span className="match-pending">🔄 Pending</span></td>
              </tr>
              <tr>
                <td>🥛 Dairy Yogurt</td>
                <td>300 cups</td>
                <td>2025-05-18</td>
                <td>Dairy</td>
                <td><span className="status-in-transit">In Transit</span></td>
                <td><span className="match-yes">✅ Yes</span></td>
              </tr>
            </tbody>
          </table>
          <div className="mock-data-filters">
            <p>🟦 Filter by: Category | Expiration | Urgency</p>
            <button className="connect-recipient-button">🟩 Connect to Recipient</button>
          </div>
        </section>
        <section className="food-bank-map">
          <h2>Find Food Banks Near You</h2>
          <p>
            Use the interactive map below to locate food banks in your area. Click on a marker to view details about the food bank, including contact information and services offered.
          </p>
          <button 
            className="locate-button" 
            onClick={() => alert('Locating nearby food banks...')}
          >
            Locate Food Banks
          </button>
          <FoodMap />
        </section>
      </main>
      <Footer /> {/* Add Footer component */}
    </div>
  );
}

export default FoodRedistribution; // Updated export
