import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/index.css';
import './assets/css/home.css';
import accommodationImg from '../../assets/images/accommodation-images/eros-guest-house/eros-pool.jpg';
import giraffe from '../../assets/images/tours-images/giraffe.jpg'
import whiteLogo from '../../assets/images/logo-images/hero-banner-zug-vogel-white-logo.png'
import churchImg from '../../assets/images/aboutNamibia-images/church.jpg';

const HomePage: React.FC = () => {
  return (
    <div className="container-fluid text-center">
      <div className="row hero-banner-container home-hero-banner-container d-flex">
        {/* Left side: Image */}
        <div className="col-md-6 hero-banner-img-container">
          <img className="hero-banner-img" src={whiteLogo} alt="Logo" />
        </div>

        {/* Right side: Text with border */}
        <div className="col-md-6  d-flex flex-column justify-content-center text-center">
          <h1 className='hero-banner-text'>Zug Vogel</h1>
          <p className='hero-banner-text'>Überwintern im Sonnnparadis</p>
        </div>
      </div>
      <div className="row hero-text-container text-center">
        <div className="col">
          <div className='hero-text'>
            <p>Tauschen Sie den kalten, dunklen Winter gegen die warme Sonne Namibias!
              <br />
              Namibia liegt im Südwesten Afrikas und bietet erschwingliche Lebensbedingungen,
              freundliche Einheimische und eine breite Palette an Freizeitaktivitäten.
            </p>
            <h5>Zugvogel Namibia setzt sich dafür ein, dass Ihr Aufenthalt in Namibia zu einem unvergesslichen Erlebnis wird.</h5>
          </div>
        </div>
      </div>
      <div className="row">
        {/* tour */}
        <div className="col-12 col-md-4 card-col d-flex my-3">
          <div className="card homepage-card flex-fill d-flex flex-column align-items-center text-center h-100">
            <img className="home-card-image card-img-top" src={giraffe} alt="#" />
            <div className="card-body d-flex flex-column align-items-center text-center flex-grow-1">
              <p className="card-text">
                Ob Sie einen kurzen Wochenendausflug planen oder eine längere Entdeckungsreise von bis zu
                14 Tagen unternehmen möchten: Wir organisieren unvergessliche Touren, die Ihren
                Interessen und Ihrem Zeitrahmen entsprechen.
              </p>
              <Link to="/touren" className="btn home-btn mt-auto">
                <h5 className="card-title accomodation-title">Touren</h5>
              </Link>
            </div>
          </div>
        </div>
        {/* accommodation */}
        <div className="col-12 col-md-4 card-col d-flex my-3">
          <div className="card homepage-card flex-fill d-flex flex-column align-items-center text-center h-100">
            <img className="home-card-image card-img-top" src={accommodationImg} alt="#" />
            <div className="card-body d-flex flex-column align-items-center text-center flex-grow-1">
              <p className="card-text accomodation-text">
                Wir bieten hochwertige Unterkünfte in Windhoek, die sich ideal für einen erholsamen Aufenthalt eignen.
                Wählen Sie Ihr ideales Sommerhaus aus unserer Auswahl sorgfältig kuratierter Häuser.
              </p>
              <Link to="/unterkunft" className="btn home-btn mt-auto">
                <h5 className="card-title accomodation-title">Unterkunft</h5>
              </Link>
            </div>
          </div>
        </div>
        {/* about namibia */}
        <div className="col-12 col-md-4 card-col d-flex my-3">
          <div className="card homepage-card flex-fill d-flex flex-column align-items-center text-center h-100">
            <img className="home-card-image card-img-top" src={churchImg} alt="#" />
            <div className="card-body d-flex flex-column align-items-center text-center flex-grow-1">
              <p className="card-text accomodation-text">
                Erfahren Sie mehr über Namibia und seine vielen Wunder.
                Erhalten Sie wichtige Informationen zur Vorbereitung Ihres Aufenthalts und vieles mehr.
              </p>
              <Link to="/überNamibia" className="btn home-btn mt-auto">
                <h5 className="card-title accomodation-title">Über Namibia</h5>
              </Link>
            </div>
          </div>
        </div>
      </div>


      <div className="row">
        <div className="col">
          <div className='aboutus-and-contact-container mx-3' >
            <h3 className='mt-2'>Über uns</h3>
            <p className='about-us-text'>Zugvogel Reisen Namibia richtet sich besonders an aktive und reiselustige Menschen,
              <br />
              insbesondere Rentnerinnen und Rentner, aber auch an all jene, die dem Winter entfliehen und
              die namibische Sonne genießen möchten.
            </p>
            <Link to="/überUns" className="btn home-about-us-btn mt-auto">
              <p className='about-us-btn-text mx-3'>
                Lernen Sie uns näher kennen
              </p>
            </Link>
            <h4 className='mt-1'>Kontakt</h4>
            <p>Kontaktieren Sie uns gerne unter:
              <br />
              Email: zugvogel@gmail.com or 264 81 85 88 650
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;