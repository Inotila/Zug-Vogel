import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/index.css';
import './assets/css/home.css';
import house1 from './assets/images/house1.jpg';
import gallery from './assets/images/gallery.jpg'
import whiteLogo from '../../assets/images/logo-pictures/hero-banner-zug-vogel-white-logo.png'

const HomePage: React.FC = () => {
  return (
    <div className="container-fluid text-center">
      <div className="row hero-banner-container d-flex">
        {/* Left side: Image */}
        <div className="col-md-6 hero-banner-img-container">
          <img className="hero-banner-img" src={whiteLogo} alt="Logo" />
        </div>

        {/* Right side: Text with border */}
        <div className="col-md-6 hero-banner-text-container d-flex flex-column justify-content-center text-center">
          <h1 className='hero-banner-text'>Zug Vogel</h1>
          <p className='hero-banner-text'>Überwintern im Sonnnparadis</p>
        </div>
      </div>
      <div className="row hero-text-container text-center">
        <div className="col">
          <p>Tauschen Sie den kalten, dunklen Winter gegen die warme Sonne Namibias!
            <br />
            Namibia liegt im Südwesten Afrikas und bietet erschwingliche Lebensbedingungen,
            freundliche Einheimische und eine breite Palette an Freizeitaktivitäten.
          </p>
          <p>Zugvogel Namibia setzt sich dafür ein, dass Ihr Aufenthalt in Namibia zu einem unvergesslichen Erlebnis wird.</p>
        </div>
      </div>
      <div className="row home-card-row mt-1">
        <div className="col card-col m-3 d-flex">
          <div className="card homepage-card flex-fill d-flex flex-column align-items-center text-center h-100">
            <img className="homepage-cover-image card-img-top" src={gallery} alt="#" />
            <div className="card-body d-flex flex-column align-items-center text-center flex-grow-1">
              <p className="card-text">
                Ob Sie einen kurzen Wochenendausflug planen oder eine längere Entdeckungsreise von bis zu
                14 Tagen unternehmen möchten: Wir organisieren unvergessliche Touren, die Ihren
                Interessen und Ihrem Zeitrahmen entsprechen.
              </p>
              <Link to="/activities" className="btn home-btn mt-auto">
                <h5 className="card-title accomodation-title">Touren</h5>
              </Link>
            </div>
          </div>
        </div>
        <div className="col card-col m-3 d-flex">
          <div className="card homepage-card flex-fill d-flex flex-column align-items-center text-center h-100">
            <img className="homepage-cover-image card-img-top" src={house1} alt="#" />
            <div className="card-body d-flex flex-column align-items-center text-center flex-grow-1">
              <p className="card-text accomodation-text">
                Wir bieten hochwertige Unterkünfte in Windhoek, die sich ideal für einen erholsamen Aufenthalt eignen.
                Wählen Sie Ihr ideales Sommerhaus aus unserer Auswahl sorgfältig kuratierter Häuser.
              </p>
              <Link to="/accomodation" className="btn home-btn mt-auto">
                <h5 className="card-title accomodation-title">Unterkunft</h5>
              </Link>
            </div>
          </div>
        </div>
        <div className="col card-col m-3 d-flex">
          <div className="card homepage-card flex-fill d-flex flex-column align-items-center text-center h-100">
            <img className="homepage-cover-image card-img-top" src={gallery} alt="#" />
            <div className="card-body d-flex flex-column align-items-center text-center flex-grow-1">
              <p className="card-text accomodation-text">
                Erfahren Sie mehr über Namibia und seine vielen Wunder.
                Erhalten Sie wichtige Informationen zur Vorbereitung Ihres Aufenthalts und vieles mehr.
              </p>
              <Link to="/" className="btn home-btn mt-auto">
                <h5 className="card-title accomodation-title">Über Namibia</h5>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-1">
        <div className="col">
          <div className='contact-and-faq-container' >
            <h3>Über uns</h3>
            <p className='about-us-text'>Zugvogel Reisen Namibia richtet sich besonders an aktive und reiselustige Menschen,
              <br />
              insbesondere Rentnerinnen und Rentner, aber auch an all jene, die dem Winter entfliehen und
              die namibische Sonne genießen möchten.
            </p>
            <Link to="/" className="btn home-about-us-btn mt-auto">
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