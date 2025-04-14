import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './SignUp.css'; // Reuse the same CSS as SignUp
import users from '../mock-database/users.json'; // Import mock database

function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const hashPassword = async (password) => {
        const encoder = new TextEncoder();
        const data = encoder.encode(password);
        const hashBuffer = await window.crypto.subtle.digest("SHA-256", data);
        return Array.from(new Uint8Array(hashBuffer))
            .map((byte) => byte.toString(16).padStart(2, '0'))
            .join('');
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const hashedPassword = await hashPassword(password); // Hash the input password
        const user = users.find(
            (u) => u.username === username && u.password === hashedPassword
        );
        if (user) {
            console.log('Login successful!');
            user.isLoggedIn = true; // Mark the user as logged in
            navigate('/csu-ist621-waste-wise/dashboard');
        } else {
            setError('Invalid email or password');
        }
    };
    //sample user login test
    //["admin","adminpassword"]
    //["user1","password1"]
    //["regulator1","regulatorpassword"]
    return (
        <div className="signup-page">
            <div className="signup-container">
                <img src="images/watsewise-icon.jpeg" alt="Waste Wise Logo" className="signup-logo" />
                <div id="close-button">
                    <Link to="/csu-ist621-waste-wise/">&lt; Home Page</Link>
                </div>
                <h1>Login</h1>
                <p>Log in to access your account</p>
                <form onSubmit={handleLogin}>
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
                    <button type="submit">Login</button>
                </form>
                {error && <p className="error-message">{error}</p>}
                <button onClick={() => { navigate('/csu-ist621-waste-wise/dashboard') }}>Login Test</button>

                <p className="login-link">
                    Don't have an account? <Link to="/csu-ist621-waste-wise/signup">Sign Up</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
