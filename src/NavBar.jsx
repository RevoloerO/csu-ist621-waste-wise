import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './HomePage.css'; // Reuse the same CSS as HomePage

function NavBar() {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img src="images/watsewise-icon.jpeg" alt="Logo" className="navbar-logo" />
                <h1 className="navbar-title" onClick={() => { navigate('/csu-ist621-waste-wise/') }}>WasteWise</h1>
                <button 
                    className={location.pathname === '/csu-ist621-waste-wise/' ? 'active' : ''} 
                    onClick={() => { navigate('/csu-ist621-waste-wise/') }}
                >
                    Home
                </button>
                <button 
                    className={location.pathname === '/csu-ist621-waste-wise/policy' ? 'active' : ''} 
                    onClick={() => { navigate('/csu-ist621-waste-wise/policy') }}
                >
                    Policy
                </button>
                <button 
                    className={location.pathname === '/csu-ist621-waste-wise/terms' ? 'active' : ''} 
                    onClick={() => { navigate('/csu-ist621-waste-wise/terms') }}
                >
                    Terms of Service
                </button>
                <button 
                    className={location.pathname === '/csu-ist621-waste-wise/about' ? 'active' : ''} 
                    onClick={() => { navigate('/csu-ist621-waste-wise/about') }}
                >
                    About
                </button>
            </div>
            <div className="navbar-right">
                <button 
                    className={location.pathname === '/csu-ist621-waste-wise/signup' ? 'active' : ''} 
                    onClick={() => { navigate('/csu-ist621-waste-wise/signup') }}
                >
                    Sign Up
                </button>
                <button 
                    className={location.pathname === '/csu-ist621-waste-wise/login' ? 'active' : ''} 
                    onClick={() => { navigate('/csu-ist621-waste-wise/login') }}
                >
                    Login
                </button>
            </div>
        </nav>
    );
}

export default NavBar;
