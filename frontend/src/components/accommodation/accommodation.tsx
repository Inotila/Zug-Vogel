import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/index.css';
import './assets/css/accommodation.css';
import house1 from '../../components/home/assets/images/house1.jpg';
import house2 from '../../components/home/assets/images/house2.jpg';
import house3 from '../../components/home/assets/images/house3.jpg';
import AccommodationCard from './accommodationCard';

const accommodations = [
  {
    title: "Eleganz mit Panoramablick",
    image: house1,
    bedRooms: "1",
    garge: "Privatparkplatz",
    pool: "Ja",
    wifi: "Kostenloses WLAN",
  },
  {
    title: "Gemütliche Pension in zentraler Lage",
    image: house2,
    bedRooms: "2",
    garge: "Garage verfügbar",
    pool: "Nein",
    wifi: "Kostenloses WLAN",
  },
];

const AccomodationPage: React.FC = () => {
  return (
    <div className="container-fluid text-center">
      <div className="row hero-banner-container accommodation-hero-banner-container subpage-hero-banner">
        <div className="col hero-page-titles">
          <h1>Unterkünfte</h1>
          <p>Sie sich während Ihrer Reise rundum wohlfühlen können.</p>
        </div>
      </div>

      <div className="row hero-text-container">
        <div className="col">
          <div className='hero-text'>
            <p>
              Unsere Gäste haben die Wahl zwischen zwei hochwertigen Unterkünften in Windhoek, die ideal für einen erholsamen Aufenthalt sind.
              <br />
              Beide Häuser bieten höchsten Komfort, exzellente Ausstattung und eine angenehme Atmosphäre.
            </p>
          </div>
        </div>
      </div>

      {/* ✅ Responsive Grid Layout */}
      <div className="row accommodation-grid">
        {accommodations.map((accommodation, index) => (
          <div key={index} className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center">
            <AccommodationCard {...accommodation} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccomodationPage;
