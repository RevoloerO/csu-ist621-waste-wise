import React from 'react';
import {useNavigate} from 'react-router-dom'; // Import Link from React Router
import './HomePage.css';
import SignUp from './SignUp.jsx';

function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="homepage">
      <nav className="navbar">
        <div className="navbar-left">
          <img src="path/to/logo.png" alt="Logo" className="navbar-logo" />
          <h1 className="navbar-title">Waste Wise</h1>
          <button className="active" onClick={() => window.location.href = '/csu-ist621-waste-wise/'}>Home</button>
          <button className="active" onClick={() => {navigate('/csu-ist621-waste-wise/')}}>Home2</button>
          
          <button>Food Redistribution</button>
          <button>Alerts & Notifications</button>
        </div>
        <div className="navbar-right">
          <button className="active" onClick={() => {navigate('/csu-ist621-waste-wise/signup')}}>Sign Up</button>
        </div>
      </nav>
      <header className="header">
        <h1>Introducing WasteWise, the world's first and only comprehensive food waste reduction solution powered by AI and blockchain</h1>
        <img src="path/to/your/image.jpg" alt="Food waste reduction" />
        <button>Learn More</button>
      </header>
      <section className="mission">
        <h2>Our Mission</h2>
        <p>WasteWise leverages cutting-edge technology to connect food producers, retailers, and consumers, ensuring that surplus food is efficiently redistributed to those in need.</p>
        <img src="path/to/your/image.jpg" alt="Mission" />
      </section>
      <section className="statistics">
        <h2>1/3 of all food produced is wasted</h2>
        <p>1.3 billion tons of food is wasted annually, worth $1 trillion.</p>
        <p>Redistributing food saves lives and resources.</p>
        <div className="stats-images">
          <img src="path/to/your/image.jpg" alt="Statistic 1" />
          <img src="path/to/your/image.jpg" alt="Statistic 2" />
        </div>
      </section>
      <section className="steps">
        <h2>How it works</h2>
        <div className="step">
          <h3>Step 1: Register on WasteWise</h3>
          <p>Sign up and create your profile.</p>
        </div>
        <div className="step">
          <h3>Step 2: Connect with local food sources</h3>
          <p>Find and connect with local food producers and retailers.</p>
        </div>
        <div className="step">
          <h3>Step 3: Facilitate redistribution via the app</h3>
          <p>Use the app to facilitate the redistribution of surplus food.</p>
        </div>
      </section>
      <footer className="footer">
        <h2>Subscribe for updates</h2>
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
        <div className="footer-links">
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
