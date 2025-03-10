import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import HomePage from './components/home/home';
import AccomodationPage from './components/accommodation/accommodation';
import TourPage from './components/tours/tours';
import AboutNamibiaPage from './components/aboutNambia/aboutNamibia';
import AboutUsPage from './components/aboutUs/aboutUs'
import SignUpPage from './components/userAuth/signup'
import LoginPage from './components/userAuth/login'
import ProfilePage from './components/userAuth/profile'


const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            {/* HomePage component */}
            <Route path="/" element={< HomePage />} />
            {/* AccomodationPage route */}
            <Route path="/Unterkunft" element={< AccomodationPage />} />
            <Route path="/touren" element={< TourPage />} />
            <Route path="/überNamibia" element={< AboutNamibiaPage />} />
            <Route path="/überUns" element={< AboutUsPage />} />
            <Route path="/signup" element={< SignUpPage />} />
            <Route path="/login" element={< LoginPage />} />
            <Route path="/profile" element={< ProfilePage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
