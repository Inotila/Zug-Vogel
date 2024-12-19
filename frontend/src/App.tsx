import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import HomePage from './components/home/home';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
        <Routes>
          {/* HomePage component */}
          <Route path="/" element={<HomePage />} />

          {/* Placeholder routes for other pages */}
          {/* <Route path="/signup-login" element={<div>Signup/Login Page</div>} /> */}
          {/* <Route path="/music" element={<div>Music Page</div>} /> */}
          {/* <Route path="/videos" element={<div>Videos Page</div>} /> */}
          {/* <Route path="/services" element={<div>Services Page</div>} /> */}
          {/* <Route path="/projects" element={<div>Projects Page</div>} /> */}
        </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;