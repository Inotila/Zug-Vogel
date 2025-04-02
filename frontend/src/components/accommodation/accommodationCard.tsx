import React from 'react';
import { Link } from 'react-router-dom';
import './assets/css/accommodationCard.css';

interface AccommodationCardProps {
    title: string;
    city: string;
    image: string;
    summaryText: string;
    googleMapDirection: string;
    garge: string;
    pool: string;
    wifi: string;
}

const AccommodationCard: React.FC<AccommodationCardProps> = ({ title, city, image, summaryText, googleMapDirection, garge, pool, wifi }) => {
    return (
        <div className="accommodation-card card shadow-container">
            <div className="card-body">
                <h4 className="card-title accommodation-card-title small-screen-title mb-1">{title}</h4>
                <div className='accommodation-card-image-container'>
                    <img src={image} alt={title} className="accommodation-image" />
                </div>
                <div className="accommodation-content flex-fill d-flex ">
                    <h4 id='big-screen-title' className="card-title accommodation-card-title ">{title}</h4>
                    <div className='location-text'>
                        <p className='mx-1'>{city}, Namibia</p>
                        <p className='mx-1'>
                            <a href={googleMapDirection} target='blank'> google directions</a>
                        </p>
                    </div>
                    <div className='summary-container mx-1'>
                        <p>
                            {summaryText}
                        </p>
                    </div>
                    <div className='amenities-container'>
                        <p className='amenities-title' >Ausstattung</p>
                        <ul className='amenities-list'>
                            <li>Parken: {garge}</li>
                            <li>Schwimmbad: {pool}</li>
                            <li>W-lan: {wifi}</li>
                        </ul>
                    </div>

                    <Link to="/accommodation-details" className="btn main-btn keep-btn-at-bottom-of-div">
                        Show more details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AccommodationCard;
