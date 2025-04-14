import React from 'react';
import './HomePage.css'; // Reuse the same CSS for consistent styling
import UserNavBar from './NavBar.jsx'; // Import NavBar component
import Footer from './Footer.jsx'; // Import Footer component

function About() {
  return (
    <div className="homepage">
      <UserNavBar /> {/* Add NavBar component */}
      <main className="about-content">
        <h1>About WasteWise</h1>
        <p>
          WasteWise is a revolutionary platform designed to tackle food waste through the power of AI and blockchain technology. 
          Our mission is to connect businesses, organizations, and communities to minimize food waste and maximize community nourishment.
        </p>
        <section className="about-section">
          <h2>🌱 Our Mission</h2>
          <p>
            At WasteWise, we believe no meal should go to waste while people go hungry. Our mission is to predict, prevent, and redirect surplus food through intelligent, transparent, and collaborative technology—turning waste into opportunity.
          </p>
          <h2>👁️ Our Vision</h2>
          <p>
            To create a zero-waste food ecosystem where surplus is no longer discarded, but redistributed efficiently and ethically—enhancing food security, reducing environmental impact, and supporting sustainable communities.
          </p>
          <h2>🎯 Our Objectives</h2>
          <ul>
            <li>⚙️ Predict surplus food before it becomes waste using real-time AI models</li>
            <li>🔗 Connect suppliers and food banks through smart matching systems</li>
            <li>📉 Reduce food waste at every stage of the supply chain</li>
            <li>🛡 Ensure regulatory compliance with automated logging and blockchain-based verification</li>
            <li>📊 Empower stakeholders with insights to improve food management practices</li>
          </ul>
        </section>
        <section className="about-section">
          <h2>💡 What We Do</h2>
          <p>
            WasteWise is an AI-powered food waste prediction and redistribution platform designed to optimize the food supply chain. We help businesses and nonprofits work together to recover excess food and deliver it where it's needed—safely, efficiently, and transparently.
          </p>
          <h2>🧠 Our Technology</h2>
          <ul>
            <li>🤖 <strong>Artificial Intelligence & Machine Learning:</strong> Forecast surplus food based on inventory, demand patterns, and shelf life</li>
            <li>🔗 <strong>Blockchain Tracking:</strong> Log donations and redistribution events with immutable, auditable records</li>
            <li>📍 <strong>Geolocation & Smart Matching:</strong> Match donors with nearby recipients based on urgency, food type, and quantity</li>
            <li>📊 <strong>Data Analytics Dashboard:</strong> Visualize performance, compliance, and environmental impact</li>
          </ul>
        </section>
        <section className="about-section">
          <h2>Project Team</h2>
          <div className="team-container">
            <div className="team-member">
              <h3>Vuong Quyen Mai</h3>
            </div>
            <div className="team-member">
              <h3>Sathvika Adam</h3>
            </div>
            <div className="team-member">
              <h3>Praveen Kumar Karangula</h3>
            </div>
            <div className="team-member">
              <h3>Sai Nikhil Varma Rudraraju</h3>
            </div>
          </div>
        </section>
      </main>
      <Footer /> {/* Add Footer component */}
    </div>
  );
}

export default About;
