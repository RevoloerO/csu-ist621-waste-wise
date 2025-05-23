import React from 'react';
import './Footer.css'; // Link the new Footer.css file
import proposalPDF from './assets/IST621-G9-ProjectProposal.pdf'; // Import the proposal PDF
import { useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();

    return (
        <footer className="footer">
            <div 
                className="footer-logo-name" 
                onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to the top of the page
                }} 
                style={{ cursor: 'pointer' }} // Add pointer cursor for better UX
            >
                <img 
                    src="images/watsewise-icon.jpeg" 
                    alt="Logo" 
                    className="footer-logo" 
                />
                <h2>WasteWise</h2>
            </div>
            <h2>Subscribe for updates</h2>
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
            <div className="footer-links">
                <a href={proposalPDF} target="_blank" rel="noopener noreferrer">Proposal</a> {/* Link to the proposal PDF */}
                <a onClick={() => navigate('/csu-ist621-waste-wise/about')} style={{ cursor: 'pointer' }}>About</a>
                <a onClick={() => navigate('/csu-ist621-waste-wise/policy')} style={{ cursor: 'pointer' }}>Privacy Policy</a>
                <a onClick={() => navigate('/csu-ist621-waste-wise/terms')} style={{ cursor: 'pointer' }}>Terms of Service</a>
            </div>
        </footer>
    );
}

export default Footer;
