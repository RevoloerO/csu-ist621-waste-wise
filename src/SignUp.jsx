import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './SignUp.css';

function SignUp() {
  const navigate = useNavigate();

  return (
    <div className="signup-page">
      <div className="signup-container">
        <div id="close-button">
          <Link to="/csu-ist621-waste-wise/">&lt; Home Page</Link>
        </div>
        <button id="close-button" onClick={() => navigate('/csu-ist621-waste-wise/')}>&lt; Home Page</button>
        <h1>Create Account</h1>
        <p>Create your account to help reduce food waste</p>
        <form>
          <input type="text" placeholder="Enter your first name" />
          <input type="text" placeholder="Enter your last name" />
          <input type="email" placeholder="Your email address" />
          <input type="password" placeholder="Enter your password" />
          <div className="terms">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">I agree with Terms & Conditions</label>
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <p className="login-link">
          Already registered? <Link to="/csu-ist621-waste-wise/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
