import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import HomePage from './components/home/home';
import AccomodationPage from './components/accomdation/accomodation';
import ActivitiesPage from './components/activities/activities'; // Use PascalCase


const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            {/* HomePage component */}
            <Route path="/" element={<HomePage />} />
            {/* AccomodationPage route */}
            <Route path="/accomodation" element={<AccomodationPage />} /> 
            <Route path="/activities" element={<ActivitiesPage />} /> 

          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
