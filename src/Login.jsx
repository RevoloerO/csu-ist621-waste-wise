import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './SignUp.css'; // Reuse the same CSS as SignUp

function Login() {
    const navigate = useNavigate();

    return (
        <div className="signup-page">
            <div className="signup-container">
                <img src="images/watsewise-icon.jpeg" alt="Waste Wise Logo" className="signup-logo" />
                <div id="close-button">
                    <Link to="/csu-ist621-waste-wise/">&lt; Home Page</Link>
                </div>
                <h1>Login</h1>
                <p>Log in to access your account</p>
                <form>
                    <input type="email" placeholder="Your email address" />
                    <input type="password" placeholder="Enter your password" />
                    <button type="submit">Login</button>
                </form>
                <button onClick={() => { navigate('/csu-ist621-waste-wise/dashboard') }}>Login Test</button>

                <p className="login-link">
                    Don't have an account? <Link to="/csu-ist621-waste-wise/signup">Sign Up</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
