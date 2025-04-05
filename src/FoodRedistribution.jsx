import React from 'react';
import './DashBoard.css'; // Reuse the same CSS for consistent styling
import { useNavigate } from 'react-router-dom';
import Footer from './Footer.jsx'; // Import Footer component

function FoodRedistribution() { // Updated function name
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <nav className="navbar">
        <div className="navbar-left">
          <img src="images/watsewise-icon.jpeg" alt="Logo" className="navbar-logo" />
          <h1 className="navbar-title" onClick={() => { navigate('/csu-ist621-waste-wise/') }}>WasteWise</h1>
          <button onClick={() => { navigate('/csu-ist621-waste-wise/dashboard') }}>DashBoard</button>
          <button onClick={() => { navigate('/csu-ist621-waste-wise/regulations') }}>Regulations</button>
          <button className="active" onClick={() => { navigate('/csu-ist621-waste-wise/food-redistribution') }}>Food Redistribution</button> {/* Updated path */}
          <button>Alerts & Notifications</button>
        </div>
      </nav>

      <main className="dashboard-content">
        <h1>Food Redistribution</h1> {/* Updated heading */}
        <p>
          Food redistribution involves collecting surplus food from producers, retailers, or restaurants and distributing it to those in need. This practice helps reduce food waste while addressing food insecurity.
        </p>
        <section className="redistribution-strategies">
          <h2>Strategies for Effective Food Redistribution</h2> {/* Updated heading */}
          <ul>
            <li><strong>Partner with Food Banks:</strong> Collaborate with local food banks to ensure surplus food reaches communities in need.</li>
            <li><strong>Leverage Technology:</strong> Use apps and platforms to connect food donors with organizations that can redistribute food efficiently.</li>
            <li><strong>Ensure Food Safety:</strong> Follow proper storage and transportation guidelines to maintain the quality and safety of redistributed food.</li>
          </ul>
        </section>
        <section className="available-food-listings">
          <h2>Available Food Listings</h2>
          <ul>
            <li>
              <strong>Tomatoes:</strong> Quantity: 50 lbs, Expiration: 2023-11-15
              <button onClick={() => alert('Supplier Info: Local Farm Co.')}>Supplier Info</button>
            </li>
            <li>
              <strong>Bread Loaves:</strong> Quantity: 30, Expiration: 2023-11-10
              <button onClick={() => alert('Supplier Info: Bakery Delight')}>Supplier Info</button>
            </li>
            <li>
              <strong>Apples:</strong> Quantity: 100 lbs, Expiration: 2023-11-20
              <button onClick={() => alert('Supplier Info: Orchard Fresh')}>Supplier Info</button>
            </li>
            <li>
              <strong>Milk Cartons:</strong> Quantity: 20, Expiration: 2023-11-08
              <button onClick={() => alert('Supplier Info: Dairy Best')}>Supplier Info</button>
            </li>
          </ul>
        </section>
      </main>
      <Footer /> {/* Add Footer component */}
    </div>
  );
}

export default FoodRedistribution; // Updated export
