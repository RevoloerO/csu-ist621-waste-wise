import React from 'react';
import { useNavigate } from 'react-router-dom';
import users from '../mock-database/users.json'; // Import mock database

function AdminPage() {
  const navigate = useNavigate();

  // Simulate getting the logged-in user (replace with actual authentication logic)
  const loggedInUser = users.find((user) => user.isLoggedIn);

  if (!loggedInUser || loggedInUser.role !== 'admin') {
    // Redirect to home page if not an admin
    navigate('/csu-ist621-waste-wise/');
    return null;
  }

  return (
    <div className="admin-page">
      <h1>Welcome, Admin</h1>
      <p>This page is restricted to admin users only.</p>
      {/* Add admin-specific content here */}
    </div>
  );
}

export default AdminPage;
