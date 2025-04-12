import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css'; // Reuse the same CSS as HomePage

function NavBar() {
    const navigate = useNavigate();

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img src="images/watsewise-icon.jpeg" alt="Logo" className="navbar-logo" />
                <h1 className="navbar-title" onClick={() => { navigate('/csu-ist621-waste-wise/') }}>WasteWise</h1>
                <button className="active" onClick={() => { navigate('/csu-ist621-waste-wise/') }}>Home</button>
                <button onClick={() => { navigate('/csu-ist621-waste-wise/policy') }}>Policy</button>
                <button onClick={() => { navigate('/csu-ist621-waste-wise/about') }}>About</button>
                <button onClick={() => { navigate('/csu-ist621-waste-wise/terms') }}>Terms of Service</button>
            </div>
            <div className="navbar-right">
                <button className="active" onClick={() => { navigate('/csu-ist621-waste-wise/signup') }}>Sign Up</button>
                <button className="active" onClick={() => { navigate('/csu-ist621-waste-wise/login') }}>Login</button>
            </div>
        </nav>
    );
}

export default NavBar;
