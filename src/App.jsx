import React, { useEffect, useState } from 'react';
import { AdvancedMarker, Pin, InfoWindow } from '@vis.gl/react-google-maps';
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
import Regulations from './Regulations';
import Policy from './Policy';
import FoodRedistribution from './FoodRedistribution';
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import FoodMap from './FoodMap';
import Terms from './Terms';
import AdminPage from './AdminPage';
import About from './About'; // Import About page
import Notification from './Notification'; // Import Notification page

function App() {

  return (
    <div>
      <APIProvider solutionChannel='GMP_devsite_samples_v3_rgmbasicmap' apiKey={'AIzaSyD5iQkLHzWEETLEaj0WcnECMU7woV3aNuk'} onLoad={() => console.log('Maps API has loaded.')}>

        <Routes>
          <Route path="/csu-ist621-waste-wise/" element={<HomePage />} />
          <Route path="/csu-ist621-waste-wise/signup" element={<SignUp />} />
          <Route path="/csu-ist621-waste-wise/login" element={<Login />} />
          <Route path="/csu-ist621-waste-wise/policy" element={<Policy />} />
          <Route path="/csu-ist621-waste-wise/terms" element={<Terms />} />
          <Route path="/csu-ist621-waste-wise/about" element={<About />} />
          <Route path="/csu-ist621-waste-wise/dashboard" element={<DashBoard />} />
          <Route path="/csu-ist621-waste-wise/regulations" element={<Regulations />} />
          <Route path="/csu-ist621-waste-wise/food-redistribution" element={<FoodRedistribution />} />
          <Route path="/csu-ist621-waste-wise/admin" element={<AdminPage />} />
          <Route path="/csu-ist621-waste-wise/notifications" element={<Notification />} />
        </Routes>

      </APIProvider>
    </div>

  );
}

export default App;
