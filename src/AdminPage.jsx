import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminPage.css'; // Add CSS for styling
import users from '../mock-database/users.json'; // Import mock database
import UserNavBar from './UserNavBar.jsx'; // Import UserNavBar component
import Footer from './Footer.jsx'; // Import Footer component

function AdminPage() {
  const navigate = useNavigate();
  const [userList, setUserList] = useState(users); // State to manage user data

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
      </main>
      <Footer /> {/* Add Footer component */}
    </div>
  );
}

export default AdminPage;
