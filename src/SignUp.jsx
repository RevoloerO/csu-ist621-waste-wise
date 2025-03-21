import React from 'react';
import './SignUp.css';

function SignUp() {
  return (
    <div className="signup-page">
      <div className="signup-container">
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
          Already registered? <a href="/login">Log In</a>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
