import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import users from '../mock-database/users.json'; // Import mock database
import UserNavBar from './UserNavBar.jsx';
import Footer from './Footer.jsx';
import './DashBoard.css'; // Reuse existing styles
import './Notification.css'; // Add new styles for Notification component

function Notification() {
  const navigate = useNavigate();

  const checkLoginStatus = () => {
    const loggedInUser = users.find((user) => user.isLoggedIn);
    if (!loggedInUser) {
      alert('Please, log in');
      navigate('/csu-ist621-waste-wise/');
    }
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const [settings, setSettings] = useState({
    surplusDetected: true,
    donationMatch: true,
    expirationReminder: true,
    complianceDue: true,
    pickupStatus: true,
    monthlyImpact: false,
  });

  const handleToggle = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="dashboard">
      <UserNavBar />
      <main className="dashboard-content">
        <h1 className="notification-title">🔔 Alerts & Notifications</h1>
        <p className="notification-subtitle">
          <strong>🧭 Stay Ahead, Stay Compliant</strong>
        </p>
        <p className="notification-description">
          Never miss a critical surplus alert, donation match, or regulatory deadline. WasteWise keeps you informed with smart notifications tailored to your role—supplier, food bank, or regulator.
        </p>
        <div className="dashboard-row">
          <section className="notification-goals modern-card">
            <h2 className="section-title">✅ Key Functional Goals</h2>
            <ul className="goals-list">
              <li><strong>📦 Surplus Alerts:</strong> Notifications for expiring or excess inventory</li>
              <li><strong>🔗 Donation Matches:</strong> Real-time updates when a food bank accepts or requests items</li>
              <li><strong>📜 Compliance Reminders:</strong> FSMA reporting logs, food safety confirmations</li>
              <li><strong>📅 Pickup & Delivery Tracking:</strong> Timely updates on collection schedules</li>
            </ul>
          </section>
          <aside className="smart-alert-engine modern-card">
            <h2 className="section-title">🔧 Smart Alert Engine</h2>
            <p className="engine-description">💡 “WasteWise uses AI to send only the alerts you need, when you need them.”</p>
            <ul className="engine-features">
              <li>Adjust timing thresholds (e.g., notify 48h before expiration)</li>
              <li>Group by category or urgency</li>
              <li>Location-based notifications (e.g., nearby recipient requests)</li>
            </ul>
          </aside>
        </div>
        <section className="notification-setting-panel modern-card">
          <h2>🛠 Notification Settings Panel</h2>
          <table className="notification-table">
            <thead>
              <tr>
                <th>Notification Type</th>
                <th>Channel(s)</th>
                <th>Frequency</th>
                <th>Toggle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>⚠️ Surplus Detected</td>
                <td>Email, In-app, SMS</td>
                <td>Immediate</td>
                <td>
                  <button className="toggle-button" onClick={() => handleToggle('surplusDetected')}>
                    {settings.surplusDetected ? '🔘 On' : '⚪ Off'}
                  </button>
                </td>
              </tr>
              <tr>
                <td>🔗 Donation Match Found</td>
                <td>Email, In-app</td>
                <td>Immediate</td>
                <td>
                  <button className="toggle-button" onClick={() => handleToggle('donationMatch')}>
                    {settings.donationMatch ? '🔘 On' : '⚪ Off'}
                  </button>
                </td>
              </tr>
              <tr>
                <td>⏰ Expiration Reminder</td>
                <td>Email, In-app, SMS</td>
                <td>24h before expiry</td>
                <td>
                  <button className="toggle-button" onClick={() => handleToggle('expirationReminder')}>
                    {settings.expirationReminder ? '🔘 On' : '⚪ Off'}
                  </button>
                </td>
              </tr>
              <tr>
                <td>📜 Compliance Due</td>
                <td>Email</td>
                <td>Weekly Summary</td>
                <td>
                  <button className="toggle-button" onClick={() => handleToggle('complianceDue')}>
                    {settings.complianceDue ? '🔘 On' : '⚪ Off'}
                  </button>
                </td>
              </tr>
              <tr>
                <td>🚚 Pickup Status Updates</td>
                <td>In-app, SMS</td>
                <td>Real-time</td>
                <td>
                  <button className="toggle-button" onClick={() => handleToggle('pickupStatus')}>
                    {settings.pickupStatus ? '🔘 On' : '⚪ Off'}
                  </button>
                </td>
              </tr>
              <tr>
                <td>📊 Monthly Impact Summary</td>
                <td>Email</td>
                <td>Monthly</td>
                <td>
                  <button className="toggle-button" onClick={() => handleToggle('monthlyImpact')}>
                    {settings.monthlyImpact ? '🔘 On' : '⚪ Off'}
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <button className="save-button">Save Preferences</button>
        </section>
        <aside className="sync-channels modern-card">
          <h2>🔗 Sync Channels</h2>
          <p>Link your preferred communication channels for seamless notifications:</p>
          <div className="sync-options">
            <div className="sync-option">
              <label>
                <input type="checkbox" /> 📧 Email addresses
              </label>
            </div>
            <div className="sync-option">
              <label>
                <input type="checkbox" /> 📱 Phone number (SMS)
              </label>
            </div>
            <div className="sync-option">
              <label>
                <input type="checkbox" /> 🔗 Slack/Webhook/Third-party logistics integrations
              </label>
            </div>
          </div>
          <button className="connect-button">Connect Notification Channels</button>
        </aside>
      </main>
      <Footer />
    </div>
  );
}

export default Notification;
