import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link 
} from "react-router-dom";
import HomePage from './HomePage';
import SignUp from './SignUp';
import Login from './Login';
import './App.css';
import DashBoard from './DashBoard';

function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/csu-ist621-waste-wise/" element={<HomePage />} />
        <Route path="/csu-ist621-waste-wise/signup" element={<SignUp />} />
        <Route path="/csu-ist621-waste-wise/login" element={<Login />} />
        <Route path="/csu-ist621-waste-wise/dashboard" element={<DashBoard />} />
      </Routes>

    </div>
    
  );
}

export default App;
