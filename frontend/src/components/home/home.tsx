import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/index.css';
import './assets/css/home.css';
import accommodationImg from '../../assets/images/accommodation-images/eros-guest-house/eros-pool.jpg';
import giraffe from '../../assets/images/tours-images/giraffe.jpg'
import golfImg from '../../assets/images/actvities/golfer.jpg';

const HomePage: React.FC = () => {
  return (
    <div className="container-fluid text-center">
      <div className="row hero-banner-container home-hero-banner-container">
        <div className='home-hero-content'>
          <div className="d-flex flex-column home-hero-banner-text-container">
            <h1 className='hero-banner-text company-title'>Zugvogel</h1>
            <p className='hero-banner-text company-moto'>Überwintern im Sonnnparadis</p>
          </div>
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
          <div className="card shadow-container homepage-card flex-fill h-100">
            <img className="home-card-image card-img-top" src={giraffe} alt="#" />
            <div className="card-body">
              <p className="card- mb-2">
                Ob Sie einen kurzen Wochenendausflug planen oder eine längere Entdeckungsreise von bis zu
                14 Tagen unternehmen möchten: Wir organisieren unvergessliche Touren, die Ihren
                Interessen und Ihrem Zeitrahmen entsprechen.
              </p>
              <Link to="/touren" className="btn main-btn home-btn mt-auto">
                <h5 className="card-title accomodation-title">Touren</h5>
              </Link>
            </div>
          </div>
        </div>
        {/* accommodation */}
        <div className="col-12 col-md-4 card-col d-flex my-3">
          <div className="card shadow-container homepage-card flex-fill h-100">
            <img className="home-card-image card-img-top" src={accommodationImg} alt="#" />
            <div className="card-body">
              <p className="card-text mb-2">
                Wir bieten hochwertige Unterkünfte in Windhoek, die sich ideal für einen erholsamen Aufenthalt eignen.
                Wählen Sie Ihr ideales Sommerhaus aus unserer Auswahl sorgfältig kuratierter Häuser.
              </p>
              <Link to="/unterkunft" className="btn main-btn home-btn mt-auto">
                <h5 className="card-title">Unterkunft</h5>
              </Link>
            </div>
          </div>
        </div>
        {/* activities */}
        <div className="col-12 col-md-4 card-col d-flex my-3">
          <div className="card shadow-container homepage-card flex-fill h-100">
            <img className="home-card-image card-img-top" src={golfImg} alt="#" />
            <div className="card-body">
              <p className="card-text mb-2">
                Windhoek bietet eine Fülle von Möglichkeiten, um Körper, Geist und Seele zu bereichern. Wir haben eine abwechslungsreiche
                Auswahl an Aktivitäten zusammengestellt, die Ihnen sowohl die lebendige Kultur als auch die
                atemberaubende Natur Namibias näherbringen.
              </p>
              <Link to="/Aktivitäten" className="btn main-btn home-btn mt-auto">
                <h5 className="card-title">Aktivitäten</h5>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* about namibia  and about us*/}
      <div className="row">
        <div className="col-12 col-md-6">
          <div className='shadow-container about-container h-100' >
            <h3 className='mt-2'>Über Namibia</h3>
            <p className='about-text'>Erfahren Sie mehr über Namibia und seine vielen Wunder.
              Erhalten Sie wichtige Informationen zur Vorbereitung Ihres Aufenthalts und vieles mehr.
            </p>
            <Link to="/überNamibia" className="btn sub-btn home-about-us-btn mt-auto">
              <p className='about-us-btn-text mx-3'>
                Erfahren Sie mehr über Namibia
              </p>
            </Link>
            <div className='important-information-container'>
              <h4 className='mt-1'>Wichtige Links</h4>
              <ul className='important-information-list'>
                <li>
                  Visa-Portal: <a href="https://eservices.mhaiss.gov.na/" target='blank'> e-service</a>
                </li>
                <li>
                  Sicherheit und Einwanderung: <a href="https://mha.gov.na/">Ministry of Home affairs
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className='shadow-container about-container h-100' >
            <h3 className='mt-2'>Über uns</h3>
            <p className='about-text'>Zugvogel Reisen Namibia richtet sich besonders an aktive und reiselustige Menschen,
              <br />
              insbesondere Rentnerinnen und Rentner, aber auch an all jene, die dem Winter entfliehen und
              die namibische Sonne genießen möchten.
            </p>
            <Link to="/überUns" className="btn sub-btn home-about-us-btn mt-auto">
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