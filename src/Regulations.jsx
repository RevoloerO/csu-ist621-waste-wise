import React, { useState } from 'react';
import './DashBoard.css'; // Reuse the same CSS for consistent styling
import { useNavigate } from 'react-router-dom';
import Footer from './Footer.jsx'; // Import Footer component

function Regulations() {
  const navigate = useNavigate();
  const [showActionSteps1, setShowActionSteps1] = useState(false);
  const [showActionSteps2, setShowActionSteps2] = useState(false);
  const [showActionSteps3, setShowActionSteps3] = useState(false);
  const [showActionSteps4, setShowActionSteps4] = useState(false);
  const [showActionSteps5, setShowActionSteps5] = useState(false);
  const [showActionSteps6, setShowActionSteps6] = useState(false);

  return (
    <div className="dashboard">
      <nav className="navbar">
        <div className="navbar-left">
          <img src="images/watsewise-icon.jpeg" alt="Logo" className="navbar-logo" />
          <h1 className="navbar-title" onClick={() => { navigate('/csu-ist621-waste-wise/') }}>WasteWise</h1>
          <button onClick={() => { navigate('/csu-ist621-waste-wise/dashboard') }}>DashBoard</button>
          <button className="active" onClick={() => { navigate('/csu-ist621-waste-wise/regulations') }}>Regulations</button>
          <button>Food Redistribution</button>
          <button>Alerts & Notifications</button>
        </div>
      </nav>

      <main className="dashboard-content">
        <h1>Regulations</h1>
        <div className="regulations-grid">
          <div className="regulation-item">
            <h2>1. Understand and Implement the FDA Food Code</h2>
            <p>
              "The FDA Food Code serves as a model for safeguarding public health and ensuring food is unadulterated and honestly presented when offered to the consumer. 
              It provides guidelines on proper food storage, handling, and preparation to minimize waste and prevent foodborne illnesses."
            </p>
            <div className={`action-steps-box ${showActionSteps1 ? 'open' : ''}`}>
              <button 
                className="toggle-button" 
                onClick={() => setShowActionSteps1(!showActionSteps1)}
              >
                Action Steps
              </button>
              {showActionSteps1 && (
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
            <div className={`action-steps-box ${showActionSteps2 ? 'open' : ''}`}>
              <button 
                className="toggle-button" 
                onClick={() => setShowActionSteps2(!showActionSteps2)}
              >
                Action Steps
              </button>
              {showActionSteps2 && (
                <ul className="toggle-content">
                  <li><strong>Update Labels:</strong> Implement the "Best if Used By" terminology on all applicable products to provide clear guidance to consumers.</li>
                  <li><strong>Educate Consumers:</strong> Inform customers that this label refers to quality, not safety, helping to reduce premature disposal of food.</li>
                </ul>
              )}
            </div>
          </div>
          <div className="regulation-item">
            <h2>3. Engage in Food Donation Programs</h2>
            <p>
              "Both the FDA and USDA encourage food donation to combat waste and support communities. The FDA Food Code includes provisions that facilitate safe food donations, 
              and the Bill Emerson Good Samaritan Food Donation Act offers legal protection to donors acting in good faith."
            </p>
            <div className={`action-steps-box ${showActionSteps3 ? 'open' : ''}`}>
              <button 
                className="toggle-button" 
                onClick={() => setShowActionSteps3(!showActionSteps3)}
              >
                Action Steps
              </button>
              {showActionSteps3 && (
                <ul className="toggle-content">
                  <li><strong>Partner with Local Charities:</strong> Establish relationships with food banks and nonprofit organizations to donate surplus food.</li>
                  <li><strong>Ensure Safety Compliance:</strong> Follow proper storage and handling procedures for donated food to maintain safety and quality.</li>
                </ul>
              )}
            </div>
          </div>
          <div className="regulation-item">
            <h2>4. Implement Waste Tracking and Reduction Strategies</h2>
            <p>
              "Monitoring and analyzing food waste can identify key areas for improvement. The USDA emphasizes that preventing food waste at the source is the most effective strategy."
            </p>
            <div className={`action-steps-box ${showActionSteps4 ? 'open' : ''}`}>
              <button 
                className="toggle-button" 
                onClick={() => setShowActionSteps4(!showActionSteps4)}
              >
                Action Steps
              </button>
              {showActionSteps4 && (
                <ul className="toggle-content">
                  <li><strong>Conduct Waste Audits:</strong> Regularly assess where and why waste occurs in your operations.</li>
                  <li><strong>Adjust Purchasing Practices:</strong> Use audit insights to refine inventory orders, reducing overstocking and spoilage.</li>
                </ul>
              )}
            </div>
          </div>
          <div className="regulation-item">
            <h2>5. Educate Staff and Customers</h2>
            <p>
              "Awareness is crucial in minimizing food waste. Training staff and informing customers about waste reduction practices can lead to more sustainable behaviors."
            </p>
            <div className={`action-steps-box ${showActionSteps5 ? 'open' : ''}`}>
              <button 
                className="toggle-button" 
                onClick={() => setShowActionSteps5(!showActionSteps5)}
              >
                Action Steps
              </button>
              {showActionSteps5 && (
                <ul className="toggle-content">
                  <li><strong>Staff Training:</strong> Implement programs focused on efficient food preparation, storage, and waste reduction techniques.</li>
                  <li><strong>Customer Engagement:</strong> Use signage and communication to encourage customers to order appropriate portions and understand date labels.</li>
                </ul>
              )}
            </div>
          </div>
          <div className="regulation-item">
            <h2>6. Stay Informed on Regulatory Updates</h2>
            <p>
              "Food waste regulations and guidelines can evolve. Keeping abreast of changes ensures ongoing compliance and the adoption of best practices."
            </p>
            <div className={`action-steps-box ${showActionSteps6 ? 'open' : ''}`}>
              <button 
                className="toggle-button" 
                onClick={() => setShowActionSteps6(!showActionSteps6)}
              >
                Action Steps
              </button>
              {showActionSteps6 && (
                <ul className="toggle-content">
                  <li><strong>Subscribe to Updates:</strong> Regularly review communications from the FDA and USDA regarding food waste initiatives and regulatory changes.</li>
                  <li><strong>Participate in Workshops:</strong> Engage in industry seminars and training sessions to stay informed about new strategies and requirements.</li>
                </ul>
              )}
            </div>
          </div>
        </div>
        <section className="additional-resources">
          <h2>Additional Resources</h2>
          <ul>
            <li>
              <a href="https://www.fda.gov/food/guidance-regulation-food-and-dietary-supplements/food-safety-modernization-act-fsma" target="_blank" rel="noopener noreferrer">
                1. Food Safety Modernization Act (FSMA) (FDA)
              </a>
            </li>
            <li>
              <a href="https://www.usda.gov/about-food/food-safety/food-loss-and-waste/national-strategy-reducing-food-loss-and-waste-and-recycling-organics" target="_blank" rel="noopener noreferrer">
                2. National Strategy for Reducing Food Loss and Waste (USDA)
              </a>
            </li>
            <li>
              <a href="https://www.fda.gov/food/consumers/tips-reduce-food-waste" target="_blank" rel="noopener noreferrer">
                3. Date Labeling on Packaged Foods (FDA)
              </a>
            </li>
            <li>
              <a href="https://www.fda.gov/food/consumers/how-cut-food-waste-and-maintain-food-safety" target="_blank" rel="noopener noreferrer">
                4. Safe Handling and Storage Practices (FDA)
              </a>
            </li>
            <li>
              <a href="https://www.usda.gov/about-usda/news/blog/good-samaritan-act-provides-liability-protection-food-donations" target="_blank" rel="noopener noreferrer">
                5. Food Donation and Liability Protections (USDA)
              </a>
            </li>
          </ul>
        </section>
      </main>
      <Footer /> {/* Add Footer component */}
    </div>
  );
}

export default Regulations;
