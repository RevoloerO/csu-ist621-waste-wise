import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import SignUp from './SignUp.jsx';
import proposalPDF from './assets/IST621-G9-ProjectProposal.pdf';
import Footer from './Footer.jsx'; // Import Footer component

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      <nav className="navbar">
        <div className="navbar-left">
          <img src="images/watsewise-icon.jpeg" alt="Logo" className="navbar-logo" /> {/* Use the imported logo */}
          <h1 className="navbar-title" onClick={() => { navigate('/csu-ist621-waste-wise/') }}>WasteWise</h1>
          <button className="active" onClick={() => { navigate('/csu-ist621-waste-wise/') }}>Home</button>
          <button>Food Redistribution</button>
          <button>Alerts & Notifications</button>
        </div>
        <div className="navbar-right">
          <button className="active" onClick={() => { navigate('/csu-ist621-waste-wise/signup') }}>Sign Up</button>
          <button className="active" onClick={() => { navigate('/csu-ist621-waste-wise/login') }}>Login</button>
        </div>
      </nav>
      <header className="header">
        <h1>Introducing WasteWise, the world's first and only comprehensive food waste reduction solution powered by AI and blockchain</h1>
        <img src="images/watsewise-homepage3.jpg" alt="Food waste reduction" />
        <p>
          Each year, the United States generates over 63 million tons of food waste, with an estimated retail value of $218 billion. 
          This issue significantly impacts our environment, contributing to greenhouse gas emissions. By leveraging innovative technology, 
          WasteWise aims to minimize food waste and maximize community nourishment.
        </p>
        <a id='learn-more' href={proposalPDF} target="_blank">Learn More</a>
      </header>
      <section className="mission">
        <div className="mission-content">
          <div className="mission-text">
            <h2>Our Mission</h2>
            <p>
              WasteWise leverages innovative technology to connect businesses and organizations with community partners, aiming to redistribute surplus food and minimize waste.
            </p>
            <p>
              By verifying donations through AI and blockchain, we ensure transparency and trust in the redistribution process.
            </p>
            <p><strong>Our Goals:</strong> Minimize Food Waste & Maximize Community Impact</p>
          </div>
          <div className="mission-image">
            <img src="images/watsewise-homepage2.jpg" alt="Mission" />
          </div>
        </div>
      </section>
      <section className="statistics">
        <h2>1/3 of all food produced is wasted</h2>
        <p><strong>Food waste statistics:</strong></p>
        <p>292 billion pounds of food is wasted in the U.S. each year.</p>
        <p>95% of consumers would prefer to see food redistributed rather than wasted.</p>
        <h3>Redistributing food saves lives and resources</h3>
        <p><strong>Benefits of food redistribution:</strong></p>
        <p>2.5 million meals are provided annually by Food Rescue US.</p>
        <p>Many studies show that increased access to food reduces rates of hunger and food insecurity.</p>
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
      <Footer /> {/* Replace footer with Footer component */}
    </div>
  );
}

export default HomePage;
