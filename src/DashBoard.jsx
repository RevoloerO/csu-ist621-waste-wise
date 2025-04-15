import React, { useEffect, useState, useRef } from 'react';
import './DashBoard.css';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer.jsx';
import UserNavBar from './UserNavBar.jsx'; // Import UserNavBar component
import users from '../mock-database/users.json'; // Import mock database
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import Papa from 'papaparse';
import { FaDrumstickBite, FaFish, FaCarrot, FaAppleAlt, FaBreadSlice, FaSeedling, FaLeaf, FaUtensils, FaTruck, FaExpand, FaCompress } from 'react-icons/fa'; // Import icons for full-screen toggle

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function DashBoard() {
  const navigate = useNavigate();
  const [chartData, setChartData] = useState(null);
  const [currentYearChartData, setCurrentYearChartData] = useState(null);
  const this_year = new Date().getFullYear();
  const [showCurrentYearChart, setShowCurrentYearChart] = useState(false);
  const chartContainerRef = useRef(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleChart = () => {
    setShowCurrentYearChart((prev) => !prev);
  };

  const toggleFullScreen = () => {
    if (!isFullScreen) {
      chartContainerRef.current.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
    setIsFullScreen((prev) => !prev);
  };

  const checkLoginStatus = () => {
    const loggedInUser = users.find((user) => user.isLoggedIn);
    if (!loggedInUser) {
      alert('Please, log in');
      navigate('/csu-ist621-waste-wise/');
    }
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  useEffect(() => {
    // Load CSV data
    Papa.parse('data/Monthly_Food_Waste_by_Type__2025_2035.csv', {
      download: true,
      header: true,
      complete: (result) => {
        const labels = result.data.map((row) => row.Month);
        const datasets = Object.keys(result.data[0])
          .filter((key) => key !== 'Month')
          .map((key) => ({
            label: key,
            data: result.data.map((row) => parseFloat(row[key])),
            borderColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
            fill: false,
          }));
        setChartData({ labels, datasets });
      }  
  })}, []);
  useEffect(() => {
    // Load current year CSV data
    Papa.parse('data/Monthly_Food_Waste_by_Type__2020_2030.csv', {
      download: true,
      header: true,
      complete: (result) => {
        const labels = result.data.map((row) => row.Month.includes(this_year.toString()) ? row.Month : null).filter(Boolean);
        const datasets = Object.keys(result.data[0])
          .filter((key) => key !== 'Month')
          .map((key) => ({
            label: key,
            data: result.data.map((row) => parseFloat(row[key])),
            borderColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
            fill: false,
          }));
        console.log(labels, datasets);
        setCurrentYearChartData({ labels, datasets });
      }  
  })}, []);

  const informativeTableData = [
    { icon: <FaDrumstickBite />, category: 'Red Meat', months: 'May, July, December', factors: 'Peak BBQ season (May-July); Holidays (December)' },
    { icon: <FaDrumstickBite />, category: 'Poultry', months: 'November, December', factors: 'Thanksgiving, Christmas—high poultry preparation and leftovers' },
    { icon: <FaFish />, category: 'Fish', months: 'July, August', factors: 'Increased seafood consumption during summer; spoilage due to heat' },
    { icon: <FaLeaf />, category: 'Leafy Vegetables', months: 'June, July, August', factors: 'High spoilage due to summer heat and excess production' },
    { icon: <FaCarrot />, category: 'Root Vegetables', months: 'November, December, January', factors: 'Holiday season and increased meal prep during colder months' },
    { icon: <FaAppleAlt />, category: 'Citrus Fruits', months: 'December, January', factors: 'Citrus peak harvest season; excess purchasing and spoilage' },
    { icon: <FaSeedling />, category: 'Berries', months: 'June, July, August', factors: 'High availability and spoilage rates during summer harvest' },
    { icon: <FaBreadSlice />, category: 'Whole Grains', months: 'November, December', factors: 'Holiday baking leads to excess purchase and subsequent waste' },
    { icon: <FaUtensils />, category: 'Processed Grains', months: 'December', factors: 'High consumption around holidays; increased leftovers and spoilage' },
    { icon: <FaTruck />, category: 'Others', months: 'July, August, December', factors: 'General increased food availability and spoilage in summer; holiday excess' },
  ];

  return (
    <div className="dashboard">
      <UserNavBar /> {/* Replace inline navbar with UserNavBar component */}
      <main className="dashboard-content">
        <h1>Real-Time Food Waste Predictions</h1>

        <div ref={chartContainerRef} className="chart-container">
          <button onClick={toggleFullScreen} className="fullscreen-button">
            {isFullScreen ? <FaCompress /> : <FaExpand />}
          </button>
          <button onClick={toggleChart} className="toggle-chart-button">
            {showCurrentYearChart ? 'Show All Years Chart' : 'Show Current Year Chart'}
          </button>
          {showCurrentYearChart ? (
            <section className="current-year-chart">
              <h2>Current Year Food Waste Chart - {this_year}</h2>
              {currentYearChartData ? (
                <Line
                  data={currentYearChartData}
                  options={{
                    responsive: true,
                    plugins: {
                      legend: { position: 'top' },
                      title: { display: true, text: `Monthly Food Waste for ${this_year}` },
                    },
                  }}
                />
              ) : (
                <p>Loading current year chart...</p>
              )}
            </section>
          ) : (
            <section className="interactive-chart">
              <h2>Interactive Food Waste Chart</h2>
              {chartData ? (
                <Line
                  data={chartData}
                  options={{
                    responsive: true,
                    plugins: {
                      legend: { position: 'top' },
                      title: { display: true, text: 'Monthly Food Waste by Type (2020-2030)' },
                    },
                  }}
                />
              ) : (
                <p>Loading chart...</p>
              )}
            </section>
          )}
        </div>

        <section className="informative-table">
          <h2>Food Type Usage Insights</h2>
          <table className="impact-table">
            <thead>
              <tr>
                <th>🍽 Food Category</th>
                <th>📅 Highest Waste Month(s)</th>
                <th>📖 Reasoning/Seasonal Factors</th>
              </tr>
            </thead>
            <tbody>
              {informativeTableData.map((row, index) => (
                <tr key={index}>
                  <td>{row.icon} {row.category}</td>
                  <td>{row.months}</td>
                  <td>{row.factors}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

      </main>
      <Footer /> {/* Add Footer component */}
    </div>
  );
}

export default DashBoard;
