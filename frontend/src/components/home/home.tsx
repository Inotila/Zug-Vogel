import React from 'react';
import { Link } from 'react-router-dom';
// import '../assets/index.css';
import './assets/css/home.css';

const HomePage: React.FC = () => {
  const imagePath = '/images/home/';
  return (
      <div className="container text-center">
        <div className="row">
          <div className="col hero-banner-container">
            <h1>Zug Vogel</h1>
            <p>Überwintern im Sonnnparadis</p>
          </div>
        </div>
        <div className="row hero-text-container">
          <div className="col">
            <h2>Welcome to Zug Vogel</h2>
             <p>Trade in the cold dark winter, for the warm Namibian sun!
                <br />
                Namibia is locatated in South West Africa, and offers affordable living conditions, friendly locals, and a wide range
                activities to keep you busy.
             </p>
             <Link to="/" className='learn-about-namibia-link-text-container'>
                  Learn more about Namibia
            </Link>
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