import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './DashBoard.css'; // Reuse the same CSS for styling
import users from '../mock-database/users.json'; // Import mock database

function UserNavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  // Simulate getting the logged-in user (replace with actual authentication logic)
  const loggedInUser = users.find((user) => user.isLoggedIn);

  const handleLogout = () => {
    if (loggedInUser) {
      loggedInUser.isLoggedIn = false; // Set isLoggedIn to false
      console.log('User logged out:', loggedInUser); // Log for debugging
    }
    navigate('/csu-ist621-waste-wise/'); // Navigate to home page
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="images/watsewise-icon.jpeg" alt="Logo" className="navbar-logo" />
        <h1 className="navbar-title" onClick={() => { navigate('/csu-ist621-waste-wise/') }}>WasteWise</h1>
        <button 
          className={location.pathname === '/csu-ist621-waste-wise/dashboard' ? 'active' : ''} 
          onClick={() => { navigate('/csu-ist621-waste-wise/dashboard') }}
        >
          DashBoard
        </button>
        <button 
          className={location.pathname === '/csu-ist621-waste-wise/regulations' ? 'active' : ''} 
          onClick={() => { navigate('/csu-ist621-waste-wise/regulations') }}
        >
          Regulations
        </button>
        <button 
          className={location.pathname === '/csu-ist621-waste-wise/food-redistribution' ? 'active' : ''} 
          onClick={() => { navigate('/csu-ist621-waste-wise/food-redistribution') }}
        >
          Food Redistribution
        </button>
        <button 
          className={location.pathname === '/csu-ist621-waste-wise/notifications' ? 'active' : ''} 
          onClick={() => { navigate('/csu-ist621-waste-wise/notifications') }}
        >
          Alerts & Notifications
        </button>
        {loggedInUser?.role === 'admin' && (
          <button 
            className={location.pathname === '/csu-ist621-waste-wise/admin' ? 'active' : ''} 
            onClick={() => { navigate('/csu-ist621-waste-wise/admin') }}
          >
            Admin
          </button>
        )}
      </div>
      <div className="navbar-right">
        {loggedInUser && (
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        )}
      </div>
    </nav>
  );
}

export default UserNavBar;
