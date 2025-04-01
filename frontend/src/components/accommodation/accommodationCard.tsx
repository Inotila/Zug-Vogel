import React from 'react';
import { Link } from 'react-router-dom';
import './assets/css/accommodationCard.css';

interface AccommodationCardProps {
    title: string;
    city: string;
    image: string;
    bedRooms: string;
    garge: string;
    pool: string;
    wifi: string;
}

const AccommodationCard: React.FC<AccommodationCardProps> = ({ title, city, image, bedRooms, garge, pool, wifi }) => {
    return (
        <div className="accommodation-card card shadow-container">
            <div className="card-body">
                <h4 className="card-title accommodation-card-title small-screen-title mb-1">{title}</h4>
                <div className='accommodation-card-image-container'>
                    <img src={image} alt={title} className="accommodation-image" />
                </div>
                <div className="accommodation-content flex-fill d-flex ">
                    <h4 className="card-title accommodation-card-title big-screen-title">{title}</h4>
                    <div className='location-text'>
                        <p className='mx-1 amenities-title'>{city}, Namibia</p>
                        <p className='mx-1 amenities-title'>
                            <a href="#"> google map</a>
                        </p>
                    </div>
                    <div className='summary-container'>
                        <p className='summary-container'>
                            this is a short text about the player, and this is just boiler plate text.
                            stuff will be said and done , to this.
                        </p>
                    </div>
                    <ul className='accommodation-amenities-list'>
                        <li>Schlafzimmer: {bedRooms}</li>
                        <li>Parken: {garge}</li>
                        <li>Schwimmbad: {pool}</li>
                        <li>W-lan: {wifi}</li>
                    </ul>
                    <Link to="/accommodation-details" className="btn accommodation-details-btn btn-outline-dark">
                        Show more details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AccommodationCard;
