import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/index.css';
import './assets/css/activities.css';

const ToursPage: React.FC = () => {
  return (
    <div className="container-fluid text-center">
      <div className="row">
        <div className="col hero-banner-container">
          <h1>Activities</h1>
          <p>Stay activive as the sun powers you</p>
        </div>
      </div>
      <div className="row hero-text-container">
        <div className="col">
          <p>We have a wide range of activites to keep you busy this summer
            <br />
            We arrange acvities that will keep you physically activive, get to meet the locals and learn
            <br />
            about the culuture. You can book these activies at our front desk.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ToursPage;