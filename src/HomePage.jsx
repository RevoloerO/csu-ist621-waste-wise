import React, { useState } from 'react';
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
          <button onClick={() => { navigate('/csu-ist621-waste-wise/food-redistribution') }}>Food Redistribution</button>
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
          <div className="mission-image">
            <img src="images/watsewise-homepage2.jpg" alt="Mission" />
          </div>
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

        </div>
      </section>
      <section className="statistics">
        <div className="statistics-content">

          <div className="statistics-text">
            <iframe title='Tonnes of food lost or wasted' src='https://www.theworldcounts.com/embeds/counters/101?background_color=Ivory&color=Teal&font_family="Helvetica+Neue"%2C+Arial%2C+sans-serif&font_size=25' ></iframe>
            <div className="iframe-row">
              <iframe title='People who died from hunger' src='https://www.theworldcounts.com/embeds/counters/2?background_color=Ivory&color=DarkSlateGray&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=12'></iframe>
              <iframe title='Number of obese people' src='https://www.theworldcounts.com/embeds/counters/51?background_color=Ivory&color=DarkSlateGray&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=12'></iframe>
            </div>
            <h2>U.S. Food waste statistics:</h2>
            Source: <a href="https://www.feedingamerica.org/our-work/reduce-food-waste">Feeding America</a>
            <p><strong>92 Billions</strong> pounds of food is wasted in the U.S. each year.</p>
            <p><strong>38%</strong>of all food goes unsold or uneaten.</p>
            <p><strong>145 Billions</strong> meals' worth of food goes to landfills.</p>
            <p><strong>51.7%</strong> of waste comes from the food industry.</p>
          </div>
          <div className="statistics-image">
            <img src="images/food-waste-source.jpeg" alt="Food Waste Source Chart" />
          </div>
        </div>
      </section>
      <section className="redistribution-benefit">
        <h2>Redistributing food saves lives and resources</h2>
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
