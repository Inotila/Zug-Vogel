import React from 'react';
import { Link } from 'react-router-dom';
// import '../assets/index.css';
import './assets/css/home.css';

const HomePage: React.FC = () => {
  const imagePath = '/images/home/';
  return (
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <h1>Zug Vogel</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>Welcome to Zug Vogel
            <br />
          Your assisted living provider</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="card home-card">
                <Link to="/" className='home-img-links-container'>
                  <img className="home-img-links card-img-top" src={imagePath + "services.png"}
                        alt="#" aria-label="an image link leads to details about the art work"/>
                </Link>
              <button className='home-link-button'> services</button>
            </div>
          </div>
          <div className="col">
          <div className="card">
                <Link to="/" className='home-img-links-container'>
                  <img className="home-img-links card-img-top" src={imagePath + "entertainment.png"}
                        alt="#" aria-label="an image link leads to details about the art work"/>
                </Link>
                <Link to="/entertainment">
                  <button className="home-link-button"> Media Center</button>
                </Link>
            </div>
          </div>
          <div className="col">
          <div className="card">
                <Link to="/" className='home-img-links-container'>
                  <img className="home-img-links card-img-top" src={imagePath + "projects.png"}
                        alt="#" aria-label="an image link leads to details about the art work"/>
                </Link>
              <button className='home-link-button'>Projects</button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>
              Contact us today!
            </p>
          </div>
        </div>
      </div>
  );
};

export default HomePage;