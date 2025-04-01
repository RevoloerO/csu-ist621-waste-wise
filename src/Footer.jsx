import React from 'react';
import './HomePage.css'; // Reuse the same CSS for consistent styling
import proposalPDF from './assets/IST621-G9-ProjectProposal.pdf'; // Import the proposal PDF

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo-name">
        <img src="images/watsewise-icon.jpeg" alt="Logo" className="footer-logo" />
        <h2>WasteWise</h2>
      </div>
      <h2>Subscribe for updates</h2>
      <input type="email" placeholder="Enter your email" />
      <button>Subscribe</button>
      <div className="footer-links">
        <a href={proposalPDF} target="_blank" rel="noopener noreferrer">About</a> {/* Link to the proposal PDF */}
        <a href="/csu-ist621-waste-wise/policy">Privacy Policy</a> {/* Link to the Policy page */}
        <a href="#">Contact</a>
        <a href="#">Terms of Service</a>
      </div>
    </footer>
  );
}

export default Footer;
