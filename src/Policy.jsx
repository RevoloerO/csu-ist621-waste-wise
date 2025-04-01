import React from 'react';
import Footer from './Footer.jsx'; // Reuse the Footer component
import './HomePage.css'; // Reuse existing styles

function Policy() {
  return (
    <div className="policy-page">
      <header className="header">
        <h1>Privacy Policy</h1>
        <p><strong>Effective Date:</strong> April 1, 2025</p>
      </header>
      <main className="policy-content">
        <p>
          Welcome to WasteWise! Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you use our website and services.
        </p>
        <h2>1. Information We Collect</h2>
        <p>We collect the following types of information:</p>
        <ul>
          <li><strong>Personal Information:</strong> Name, email address, phone number, and business details when you register or contact us.</li>
          <li><strong>Usage Data:</strong> Information about your interactions with our platform, such as pages visited and features used.</li>
          <li><strong>Transaction Data:</strong> Details of food donations, redistributions, and compliance reports.</li>
          <li><strong>Device and Technical Data:</strong> IP addresses, browser type, and cookies to enhance user experience.</li>
        </ul>
        <h2>2. How We Use Your Information</h2>
        <p>We use collected information to:</p>
        <ul>
          <li>Provide and improve WasteWise services.</li>
          <li>Predict and manage food surplus efficiently.</li>
          <li>Ensure regulatory compliance and legal obligations.</li>
          <li>Enhance security and fraud prevention.</li>
          <li>Communicate with users regarding updates and support.</li>
        </ul>
        <h2>3. Information Sharing and Disclosure</h2>
        <p>We do not sell or rent your personal information. We may share data with:</p>
        <ul>
          <li>Food banks and suppliers to facilitate food redistribution.</li>
          <li>Regulatory authorities to ensure compliance with food safety laws.</li>
          <li>Service providers that help us operate WasteWise securely and efficiently.</li>
          <li>Legal compliance when required by law or to protect rights and safety.</li>
        </ul>
        <h2>4. Data Security</h2>
        <p>
          We implement industry-standard security measures to protect your data from unauthorized access, loss, or misuse. However, no system is 100% secure, and we encourage users to take precautions when sharing information.
        </p>
        <h2>5. Your Rights and Choices</h2>
        <ul>
          <li><strong>Access and Update:</strong> You can review and update your personal information.</li>
          <li><strong>Opt-Out:</strong> You may opt out of non-essential communications.</li>
          <li><strong>Data Deletion:</strong> You can request data removal, subject to legal obligations.</li>
        </ul>
        <h2>6. Cookies and Tracking Technologies</h2>
        <p>
          We use cookies to enhance user experience, analyze trends, and improve our services. You can manage cookie preferences through your browser settings.
        </p>
        <h2>7. Changes to This Privacy Policy</h2>
        <p>
          We may update this policy as needed. Any changes will be posted with the updated effective date. Your continued use of WasteWise signifies acceptance of our revised policy.
        </p>
        <h2>8. Contact Us</h2>
        <p>
          If you have any questions or concerns, please contact us at:
        </p>
        <p><strong>Email:</strong> Vuong Quyen Mai - vuongquyenmai@gmail.com</p>
        <p>By using WasteWise, you agree to this Privacy Policy.</p>
      </main>
      <Footer /> {/* Add Footer component */}
    </div>
  );
}

export default Policy;
