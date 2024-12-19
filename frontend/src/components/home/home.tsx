import React from 'react';
import { Link } from 'react-router-dom';
// import '../assets/index.css';
import './assets/css/home.css';
import house1 from './assets/images/house1.jpg';
import yoga from './assets/images/yoga.jpg'
import gallery from './assets/images/gallery.jpg'

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
             <p>Trade in the cold dark winter, for the warm Namibian sun!
                <br />
                Namibia is locatated in South West Africa, and offers affordable living conditions, friendly locals, and a wide range
                activities to keep you busy. <Link to="/" className='learn-about-namibia-link-text-container'>
                  Learn more about Namibia
            </Link>
             </p>
            <p>Zug Vogel Namibia is dedicated to making your stay in Namibia.</p>
            <Link to="/" className='learn-about-namibia-link-text-container'>
                  Learn more about our services here
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col card-col">
            <div className="card homepage-cards">
                <Link to="/" className='home-img-links-container'>
                  <img className="home-img-links card-img-top" src={yoga}
                        alt="#" aria-label="an image link leads to details about the art work"/>
                </Link>
              <button className='home-link-button'> Activities</button>
            </div>
            <div className="card homepage-cards accomdation-card mx-3">
                <Link to="/" className='home-img-links-container'>
                  <img className="home-img-links card-img-top"  src={house1}
                        alt="#" aria-label="an image link leads to details about the art work"/>
                </Link>
              <button className='home-link-button'> Accomodation</button>
            </div>
            <div className="card homepage-cards">
                <Link to="/" className='home-img-links-container'>
                  <img className="home-img-links card-img-top" src={gallery}
                        alt="#" aria-label="an image link leads to details about the art work"/>
                </Link>
              <button className='home-link-button'> Gallery</button>
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