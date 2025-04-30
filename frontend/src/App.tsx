import React, { lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';

// Lazy-loaded components
const HomePage = lazy(() => import('./components/home/home'));
const AccomodationPage = lazy(() => import('./components/accommodation/accommodation'));
const TourPage = lazy(() => import('./components/tours/tours'));
const TourDetailsPage = lazy(() => import('./components/tours/tourDetails'));
const AboutNamibiaPage = lazy(() => import('./components/aboutNambia/aboutNamibia'));
const AboutUsPage = lazy(() => import('./components/aboutUs/aboutUs'));
const SignUpPage = lazy(() => import('./components/userAuth/signup'));
const LoginPage = lazy(() => import('./components/userAuth/login'));
const ProfilePage = lazy(() => import('./components/userAuth/profile'));
const ActivitiesPage = lazy(() => import('./components/activities/activities'));
const AccomodationDetailsPage = lazy(() => import('./components/accommodation/accommodationDetails'));

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/unterkunft" element={<AccomodationPage />} />
              <Route path="/touren" element={<TourPage />} />
              <Route path="/touren/:slug" element={<TourDetailsPage />} />
              <Route path="/überNamibia" element={<AboutNamibiaPage />} />
              <Route path="/überUns" element={<AboutUsPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/aktivitäten" element={<ActivitiesPage />} />
              <Route path="/unterkunft/:slug" element={<AccomodationDetailsPage />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
