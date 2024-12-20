import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/index.css';
import './assets/css/accomodation.css';
import house1 from '../../components/home/assets/images/house1.jpg';
import house2 from '../../components/home/assets/images/house2.jpg';
import house3 from '../../components/home/assets/images/house3.jpg';

const accomodationPage: React.FC = () => {
  // Placeholder data for the accommodation cards
  const accommodationData = [
    { image: house1, title: "Cozy Comfort House", text: "Relax in a beautiful, fully furnished home with modern amenities." },
    { image: house2, title: "Sunny Serenity Villa", text: "Enjoy breathtaking views and a tranquil atmosphere." },
    { image: house3, title: "Modern Marvel Home", text: "Stay in a contemporary home designed for ultimate comfort." },
    { image: house1, title: "Charming Country Cottage", text: "Perfect for families or a romantic getaway." },
    { image: house2, title: "Beachfront Paradise", text: "Wake up to the sound of the waves every morning." },
    { image: house3, title: "Urban Oasis Apartment", text: "Experience city living in style and comfort." },
  ];

  return (
    <div className="container-fluid text-center">
      <div className="row">
        <div className="col hero-banner-container">
          <h1>Accomodation</h1>
          <p>
            Find your perfect summer home!
            <br />
            We have curated the perfect home for you to stay in.
            <br />
            Ideally located and with all the essential amenities that you will
            need.
          </p>
        </div>
      </div>
      <div className="row hero-text-container">
        <div className="col">
          <p>Zug Vogel Namibia is dedicated to making your stay in Namibia.</p>
        </div>
      </div>
      <div className="row accomodation-row">
  {accommodationData.map((item, index) => (
    <div key={index} className="col-md-4 mb-4 d-flex">
      <div className="card accomodation-card flex-fill">
        <img
          className="accomodation-cover-image card-img-top"
          src={item.image}
          alt={item.title}
          aria-label={item.title}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title accomodation-title">{item.title}</h5>
          <p className="card-text accomodation-text">{item.text}</p>
          <Link to="/" className="btn btn-primary mt-auto">
            View More Details
          </Link>
        </div>
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default accomodationPage;
