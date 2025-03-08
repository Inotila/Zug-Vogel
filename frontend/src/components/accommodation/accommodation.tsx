import React from 'react';
import '../../assets/css/index.css';
import './assets/css/accommodation.css';
import erosGuestHouseImg from '../../assets/images/accommodation-images/eros-guest-house/eros-pool.jpg';
import klienWHKGuestHouseImg from '../../assets/images/accommodation-images/kleinWindhoekGuestHouse/klienWindhoekPool.jpg';
import AccommodationCard from './accommodationCard';

const accommodations = [
  {
    title: "Eleganz mit Panoramablick",
    image: klienWHKGuestHouseImg,
    bedRooms: "1",
    garge: "Privatparkplatz",
    pool: "Ja",
    wifi: "Kostenloses WLAN",
  },
  {
    title: "Gemütliche Pension in zentraler Lage",
    image: erosGuestHouseImg,
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
          <div key={index} className="col-sm-12 col-md-6 col-lg-6 d-flex mb-3 justify-content-center">
            <AccommodationCard {...accommodation} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccomodationPage;
