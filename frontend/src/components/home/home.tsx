import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/index.css';
import './assets/css/home.css';
import house1 from './assets/images/house1.jpg';
import yoga from './assets/images/yoga.jpg'
import gallery from './assets/images/gallery.jpg'

const HomePage: React.FC = () => {
  return (
      <div className="container-fluid text-center">
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
        <div className="row home-card-row mt-1">
          <div className="col card-col m-3">
            <div className="card homepage-card flex-fill">
                <img className="homepage-cover-image card-img-top" src={yoga} alt="#" />
                  <div className="card-body d-flex flex-column">
                      <h5 className="card-title accomodation-title">Activities</h5>
                      <p className="card-text accomodation-text">Stay busy with our many activities on offer. We offer fun activities to keep you healthy and learning local skills</p>
                      <Link to="/" className="btn btn-primary mt-auto">
                        View More Details
                      </Link>
                </div>
            </div>
          </div>
          <div className="col card-col m-3">
            <div className="card homepage-card flex-fill">
                <img className="homepage-cover-image card-img-top" src={house1} alt="#" />
                  <div className="card-body d-flex flex-column">
                      <h5 className="card-title accomodation-title">Accomodation</h5>
                      <p className="card-text accomodation-text">Find your perfect summer home from our carefully curated homes</p>
                      <Link to="/accomodation" className="btn btn-primary mt-auto">
                        View More Details
                      </Link>
                </div>
            </div>
          </div>
          <div className="col card-col m-3">
            <div className="card homepage-card flex-fill">
                <img className="homepage-cover-image card-img-top" src={gallery} alt="#" />
                  <div className="card-body d-flex flex-column">
                      <h5 className="card-title accomodation-title">Learn about Namibia</h5>
                      <p className="card-text accomodation-text">Find factualy information and tips on how to make your stay in Namibia memorable</p>
                      <Link to="/" className="btn btn-primary mt-auto">
                        View More Details
                      </Link>
                </div>
            </div>
          </div>
        </div>
        <div className="row mt-1">
          <div className="col">
            <div className='contact-and-faq-container' >
            <h3> Contact detials & Frequently Asked Question </h3>
                <h4>FAQ</h4>
                <p>We have some valuable info in our FAQ section that will help you better prepare for your trip
                    <br />
                    and you can add some questions of your own!
                </p>
               
                <h4>Contact</h4>
                <p>Please feel free to contact us at:</p>
                Email: zugvogel@gmail.com or 264 81 85 88 650
            </div>
          </div>
        </div>
      </div>
  );
};

export default HomePage;