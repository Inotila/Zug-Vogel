import React, { useEffect, useState } from 'react';
import '../../assets/css/index.css';
import './assets/css/accommodation.css';
import '../../assets/css/serviceStyle.css';
import AccommodationCard from './accommodationCard';
import { fetchAccommodations } from '../../services/contentfulService';

const AccomodationPage: React.FC = () => {
  const [accommodations, setAccommodations] = useState<any[]>([]);

  useEffect(() => {
    fetchAccommodations().then(setAccommodations);
  }, []);
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
      <div className="row service-grid">
        {accommodations.map((accommodation) => (
          <div key={accommodation.id} className="col-sm-12 col-md-4s col-lg-4 d-flex mb-3 justify-content-center">
            <AccommodationCard
              id={accommodation.id}
              title={accommodation.title}
              city={accommodation.city}
              googleMapDirection={accommodation.googleMapLocation}
              image={accommodation.coverPhoto.fields.file.url || "no pic available :("}
              summaryText={accommodation.summaryDescription}
              garge={accommodation.parkingType}
              pool={accommodation.accommodationHasPool ? "Schwimmbad" : "Kein Schwimmbad"}
              wifi={accommodation.freeWifi ? "Kostenloses WLAN" : "Nein"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccomodationPage;
