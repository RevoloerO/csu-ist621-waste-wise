import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers'; // Import ethers.js for blockchain interaction
import './AdminPage.css'; // Add CSS for styling
import users from '../mock-database/users.json'; // Import mock database
import UserNavBar from './UserNavBar.jsx'; // Import UserNavBar component
import Footer from './Footer.jsx'; // Import Footer component

function AdminPage() {
  const navigate = useNavigate();
  const [userList, setUserList] = useState(users); // State to manage user data
  const [textToHash, setTextToHash] = useState('');
  const [hashResult, setHashResult] = useState('');

  // Simulate getting the logged-in user (replace with actual authentication logic)
  const loggedInUser = users.find((user) => user.isLoggedIn);

  if (!loggedInUser || loggedInUser.role !== 'admin') {
    navigate('/csu-ist621-waste-wise/');
    return null;
  }

  const handleRoleChange = (index, newRole) => {
    const updatedUsers = [...userList];
    updatedUsers[index].role = newRole;
    setUserList(updatedUsers);
  };

  const handleNameChange = (index, field, value) => {
    const updatedUsers = [...userList];
    updatedUsers[index][field] = value;
    setUserList(updatedUsers);
  };

  const handleBlockchainLink = async () => {
    try {
      if (!window.ethereum) {
        alert('MetaMask is not installed. Please install MetaMask to connect to the blockchain.');
        return;
      }

      // Request account access
      await window.ethereum.request({ method: 'eth_requestAccounts' });

      // Connect to the Ethereum provider
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      // Smart contract address and ABI
      const contractAddress = '0x34ba62e5626928836eb8b8d3bb8db3944605794f2affd8e98b80cb00e7abea38';
      const contractABI = [
        // Add the ABI of the smart contract here
      ];

      // Create a contract instance
      const contract = new ethers.Contract(contractAddress, contractABI, signer);

      // Example interaction: Call a function from the smart contract
      const result = await contract.someFunction(); // Replace `someFunction` with an actual function from the contract
      console.log('Blockchain interaction result:', result);

      alert('Successfully connected to the blockchain and executed a function.');
    } catch (error) {
      console.error('Error connecting to the blockchain:', error);
      alert('Failed to connect to the blockchain. Check the console for details.');
    }
  };

  const handleTextToHash = () => {
    try {
      const hash = ethers.utils.id(textToHash);
      setHashResult(hash);
    } catch (error) {
      console.error('Error generating hash:', error);
      alert('Failed to generate hash. Check the console for details.');
    }
  };

  return (
    <div className="admin-page">
      <UserNavBar /> {/* Add UserNavBar component */}
      <main className="admin-content">
        <h1 className="admin-title">Welcome, {loggedInUser.firstName}!</h1>
        <p className="admin-description">Manage user roles and information below.</p>
        <section className="user-management">
          <h2>User Management</h2>
          <table className="user-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Role</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {userList.map((user, index) => (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>
                    <select
                      value={user.role}
                      onChange={(e) => handleRoleChange(index, e.target.value)}
                    >
                      <option value="user">User</option>
                      <option value="admin">Admin</option>
                      <option value="regulator">Regulator</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      value={user.firstName}
                      onChange={(e) => handleNameChange(index, 'firstName', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={user.lastName}
                      onChange={(e) => handleNameChange(index, 'lastName', e.target.value)}
                    />
                  </td>
                  <td>
                    <button
                      className="save-button"
                      onClick={() => alert(`User ${user.username} modified!`)}
                    >
                      Save
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <section className="web-flow">
          <h2>🌐 Project Web Flow</h2>
          <p className="web-flow-intro">
            Explore how WasteWise connects users, businesses, and communities to reduce food waste effectively.
          </p>
          <div className="web-flow-container">
            <div className="web-flow-step">
              <h3>1️⃣ Home Page</h3>
              <p>Learn about WasteWise's mission, goals, and the impact of food waste reduction.</p>
            </div>
            <div className="web-flow-step">
              <h3>2️⃣ Dashboard</h3>
              <p>Access real-time food waste predictions, alerts, and interactive charts.</p>
            </div>
            <div className="web-flow-step">
              <h3>3️⃣ Regulations</h3>
              <p>Stay informed about food safety regulations and best practices for waste reduction.</p>
            </div>
            <div className="web-flow-step">
              <h3>4️⃣ Admin Page</h3>
              <p>Manage user roles and monitor platform activity as an administrator.</p>
            </div>
          </div>
        </section>
        <section className="blockchain-management">
          <h2>🔗 Blockchain System</h2>
          <p>
            Manage and monitor the blockchain system for tracking food redistribution events. Ensure transparency and trust in the process.
          </p>
          <button className="blockchain-button" onClick={handleBlockchainLink}>
            Connect to Blockchain
          </button>
          <a
            href="https://sepolia.etherscan.io/tx/0x34ba62e5626928836eb8b8d3bb8db3944605794f2affd8e98b80cb00e7abea38"
            target="_blank"
            rel="noopener noreferrer"
            className="blockchain-link-button"
          >
            Show Contract
          </a>
        </section>
        <section className="research-purpose">
          <h2>📚 Research Purpose</h2>
          <p>
            Explore detailed insights and statistics about materials, waste, and recycling in the United States.
          </p>
          <div className="research-links">
            <a
              href="https://www.epa.gov/facts-and-figures-about-materials-waste-and-recycling/national-overview-facts-and-figures-materials"
              target="_blank"
              rel="noopener noreferrer"
              className="research-link"
            >
              Visit EPA National Overview: Facts and Figures
            </a>
            <a
              href="https://www.visualcapitalist.com/cp/visualized-food-waste-in-the-united-states/"
              target="_blank"
              rel="noopener noreferrer"
              className="research-link"
            >
              Visualized: Food Waste in the United States
            </a>
            <a
              href="https://www.epa.gov/facts-and-figures-about-materials-waste-and-recycling/food-material-specific-data"
              target="_blank"
              rel="noopener noreferrer"
              className="research-link"
            >
              Food Material-Specific Data (EPA)
            </a>
            <a
              href="https://www.unep.org/resources/publication/food-waste-index-report-2024"
              target="_blank"
              rel="noopener noreferrer"
              className="research-link"
            >
              UNEP Food Waste Index Report 2024
            </a>
            <a
              href="https://refed.org/food-waste/the-problem/"
              target="_blank"
              rel="noopener noreferrer"
              className="research-link"
            >
              ReFED: The Problem of Food Waste
            </a>
          </div>
        </section>
        <section className="hash-tool">
          <h2>🔑 Text to Hash Tool</h2>
          <p>Convert any text into a unique hash using Ethereum's `ethers.utils.id()` function.</p>
          <input
            type="text"
            placeholder="Enter text to hash"
            value={textToHash}
            onChange={(e) => setTextToHash(e.target.value)}
            className="hash-input"
          />
          <button className="hash-button" onClick={handleTextToHash}>
            Generate Hash
          </button>
          {hashResult && (
            <div className="hash-result">
              <p><strong>Hash Result:</strong></p>
              <p>{hashResult}</p>
            </div>
          )}
        </section>
        <section className="data-architecture">
          <h2>🗄️ Hybrid Data Architecture for WasteWise</h2>
          <p>
            To ensure transparency, scalability, and regulatory compliance, WasteWise uses a hybrid data architecture model that combines on-chain (blockchain) and off-chain (database/IPFS) storage. Below is a breakdown and accompanying diagram.
          </p>
          <div className="data-architecture-row">
            <div className="on-chain-data">
              <h3>On-Chain Data (Stored on Ethereum Blockchain)</h3>
              <ul>
                <li>Donation Transaction Hash</li>
                <li>Timestamped Donation Records</li>
                <li>Smart Contract Conditions (e.g., donation triggers, approval logic)</li>
                <li>Hashed IDs of Donor and Recipient</li>
                <li>FSMA Compliance Event Logs</li>
                <li>Hash of Expiration Logs or Verification Receipts</li>
              </ul>
            </div>
            <div className="off-chain-data">
              <h3>Off-Chain Data (Stored in Database or IPFS)</h3>
              <ul>
                <li>Food Item Descriptions (name, type, category)</li>
                <li>Images of Food Items</li>
                <li>Expiration Dates (raw timestamps, updated dynamically)</li>
                <li>Contact Details of Suppliers and Food Banks (PII)</li>
                <li>AI Prediction Outputs and Model Logs</li>
                <li>Real-Time Inventory Changes</li>
                <li>Food Donation Request Messages or Notes</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer /> {/* Add Footer component */}
    </div>
  );
}

export default AdminPage;
