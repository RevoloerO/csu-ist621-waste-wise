import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import SignUp from './SignUp.jsx';
import proposalPDF from './assets/IST621-G9-ProjectProposal.pdf';
import Footer from './Footer.jsx';
import NavBar from './NavBar.jsx'; // Import NavBar component

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      <NavBar /> {/* Replace navigation bar with NavBar component */}
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
        <h2 className="redistribution-title">Redistributing Food Saves Lives—and the Planet</h2>
        <div className="redistribution-container">
          <div className="redistribution-image">
            <img src="images/watsewise-homepage.jpg" alt="Redistribution" />
          </div>
          <div className="redistribution-text">
            <p className="redistribution-intro">
              Every meal saved isn't just food on a plate—it's a solution to hunger, a win against waste, and a step toward a sustainable future.
            </p>
            <p>WasteWise empowers food suppliers, distributors, and nonprofits to:</p>
            <ul className="redistribution-list">
              <li>✨ <strong>Predict surplus</strong> before it becomes waste</li>
              <li>🔗 <strong>Connect donations</strong> with those who need it most—fast</li>
              <li>🛡 <strong>Ensure transparency</strong> and safety through blockchain verification</li>
            </ul>
            <p className="redistribution-call-to-action">
              Let’s transform excess into impact—one meal, one match, one mission at a time.
            </p>
          </div>
          
        </div>
        
        <table className="impact-table">
          <thead>
            <tr>
              <th>📊 Stat</th>
              <th>🌟 Why It Matters</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>🍎 <strong>108 billion pounds</strong> of food go to waste annually in the U.S. (Feeding America)</td>
              <td>WasteWise diverts surplus from landfills into meals.</td>
            </tr>
            <tr>
              <td>🍽 <strong>1 in 8 Americans</strong> struggle with food insecurity (USDA)</td>
              <td>Redistribution helps close the hunger gap.</td>
            </tr>
            <tr>
              <td>🚚 <strong>2.5+ million meals</strong> delivered yearly by Food Rescue US</td>
              <td>WasteWise expands this impact with tech automation.</td>
            </tr>
            <tr>
              <td>🌍 <strong>8–10% of global emissions</strong> come from food waste (UN FAO)</td>
              <td>Reducing waste means cutting methane emissions.</td>
            </tr>
            <tr>
              <td>💰 <strong>$218 billion</strong> is spent on food that never gets eaten (ReFED)</td>
              <td>WasteWise helps businesses recover value through donations.</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className="steps">
        <h2>🚀 How WasteWise Works</h2>
        <p className="steps-intro">Redistributing food has never been this smart—or this simple.</p>
        <div className="steps-container">
          <div className="step-card">
            <h3>🖊️ Step 1: Join the Movement</h3>
            <p>Create your WasteWise profile in seconds. Whether you're a supplier or a food bank, you're one step closer to saving meals.</p>
          </div>
          <div className="step-card">
            <h3>🌐 Step 2: Discover & Connect</h3>
            <p>Browse a live map of local food producers, stores, and suppliers ready to donate. Find the right matches based on food type or location.</p>
          </div>
          <div className="step-card">
            <h3>📦 Step 3: Redistribute with Ease</h3>
            <p>Facilitate donations in just a few taps. Track surplus items, manage logistics, and get real-time updates—all in one seamless app.</p>
          </div>
        </div>
        <p className="steps-call-to-action">💡 Less waste, more impact. Let’s feed people, not landfills.</p>
      </section>
      <Footer /> {/* Replace footer with Footer component */}
    </div>
  );
}

export default HomePage;
