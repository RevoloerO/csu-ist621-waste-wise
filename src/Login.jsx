import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './SignUp.css'; // Reuse the same CSS as SignUp
import users from '../mock-database/users.json'; // Import mock database

function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        const user = users.find(
            (u) => u.username === username && u.password === password
        );
        if (user) {
            console.log('Login successful!');
            navigate('/csu-ist621-waste-wise/dashboard');
        } else {
            setError('Invalid email or password');
        }
    };

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
