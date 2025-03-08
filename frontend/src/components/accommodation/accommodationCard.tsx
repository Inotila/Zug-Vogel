import React from 'react';
import { Link } from 'react-router-dom';
import './assets/css/accommodationCard.css';

interface AccommodationCardProps {
    title: string;
    image: string;
    bedRooms: string;
    garge: string;
    pool: string;
    wifi: string;
}

const AccommodationCard: React.FC<AccommodationCardProps> = ({ title, image, bedRooms, garge, pool, wifi }) => {
    return (
        <div className="accommodation-card card">
            <div className="card-body">
                <h3 className="card-title accommodation-card-title small-screen-title mb-3">{title}</h3>
                <div className='accommodation-card-image-container'>
                    <img src={image} alt={title} className="accommodation-image" />
                </div>
                <div className="accommodation-content flex-fill d-flex flex-column align-items-center text-center">
                    <h3 className="card-title accommodation-card-title big-screen-title">{title}</h3>
                    <h4 className='mt-2 amenities-title'>Ausstattung</h4>
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
