import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './SignUp.css';
import users from '../mock-database/users.json'; // Import mock database

function SignUp() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();

    // Check if username already exists
    const existingUser = users.find((u) => u.username === username);
    if (existingUser) {
      setError('Username already exists');
      return;
    }

    // Add new user to the database
    const newUser = {
      id: users.length + 1,
      username,
      password,
      role: 'user', // Default role
      firstName,
      lastName,
    };

    users.push(newUser); // Add user to the mock database
    console.log('User added:', newUser);
    navigate('/csu-ist621-waste-wise/login'); // Redirect to login page
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <img src="images/watsewise-icon.jpeg" alt="Waste Wise Logo" className="signup-logo" />
        <div id="close-button">
          <Link to="/csu-ist621-waste-wise/">&lt; Home Page</Link>
        </div>
        <h1>Create Account</h1>
        <p>Create your account to help reduce food waste</p>
        <form onSubmit={handleSignUp}>
          <input
            type="text"
            placeholder="Enter your first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter your last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="terms">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              I agree with <Link id='link' to="/csu-ist621-waste-wise/policy">Privacy Policy</Link> and <Link id='link' to="/csu-ist621-waste-wise/terms">Terms of Service</Link>
            </label>
          </div>
          <button type="submit">Sign Up</button>
        </form>
        {error && <p className="error-message">{error}</p>}
        <p className="login-link">
          Already registered? <Link to="/csu-ist621-waste-wise/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
