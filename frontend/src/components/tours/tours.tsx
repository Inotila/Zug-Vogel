import React, { useEffect, useState } from 'react';
import '../../assets/css/index.css';
import './assets/css/tours.css';
import TourCard from './TourCard';
import { fetchTours } from '../../services/contentfulService';
import '../../assets/css/serviceStyle.css';

const ToursPage: React.FC = () => {
  const [tours, setTours] = useState<any[]>([]);

  useEffect(() => {
    fetchTours().then(setTours); // Fetch the tours
  }, []);

  return (
    <div className="container-fluid text-center">
      <div className="row hero-banner-container tour-hero-banner-container subpage-hero-banner">
        <div className="col hero-page-titles">
          <h1>Touren</h1>
          <p>Entdeckungsreisen in Namibia und darüber hinaus</p>
        </div>
      </div>
      <div className="row hero-text-container">
        <div className="col">
          <div className='hero-text'>
            <p>Mit unseren maßgeschneiderten Touren haben Sie die Möglichkeit, dieses wunderschöne Land kennenzulernen.
              <br />
              Egal, ob Sie einen kurzen Wochenendtrip oder eine längere Entdeckungsreise von bis zu 14 Tagen planen:
              <br />
              Wir organisieren unvergessliche Touren, die Ihren Interessen und Ihrem Zeitrahmen entsprechen.
            </p>
          </div>
        </div>
      </div>
      <div className="row service-grid">
        {tours.map((tour) => (
          <div key={tour.id} className="col-sm-12 col-md-4 col-lg-4 d-flex mb-3 justify-content-center">
            <TourCard
              id={tour.id}
              title={tour.title}
              duration={tour.durationOfTrip}
              startingPoint={tour.startingPoint}
              mainDestination={tour.mainDestination}
              endDestination={tour.endDestination}
              coverPhoto={tour.tourCoverPhoto.fields.file.url || "no pic available :("}
              summaryText={tour.summaryDescription}

            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToursPage;
