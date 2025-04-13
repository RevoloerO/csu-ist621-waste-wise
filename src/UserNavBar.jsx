import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DashBoard.css'; // Reuse the same CSS for styling
import users from '../mock-database/users.json'; // Import mock database

function UserNavBar() {
  const navigate = useNavigate();

  // Simulate getting the logged-in user (replace with actual authentication logic)
  const loggedInUser = users.find((user) => user.isLoggedIn);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="images/watsewise-icon.jpeg" alt="Logo" className="navbar-logo" />
        <h1 className="navbar-title" onClick={() => { navigate('/csu-ist621-waste-wise/') }}>WasteWise</h1>
        <button className="active" onClick={() => { navigate('/csu-ist621-waste-wise/dashboard') }}>DashBoard</button>
        <button onClick={() => { navigate('/csu-ist621-waste-wise/regulations') }}>Regulations</button>
        <button>Food Redistribution</button>
        <button>Alerts & Notifications</button>
        {loggedInUser?.role === 'admin' && (
          <button onClick={() => { navigate('/csu-ist621-waste-wise/admin') }}>Admin</button>
        )}
      </div>
    </nav>
  );
}

export default UserNavBar;
