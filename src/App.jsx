import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link 
} from "react-router-dom";
import HomePage from './HomePage';
import SignUp from './SignUp';
import './App.css';

function App() {
  return (
    <div>
      <HomePage />
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

    </div>
    
  );
}

export default App;
