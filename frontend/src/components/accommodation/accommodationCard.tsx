import React from 'react';
import { Link } from 'react-router-dom';
import './assets/css/accommodationCard.css';
import '../../assets/css/serviceStyle.css';

interface AccommodationCardProps {
    id: string;
    title: string;
    city: string;
    image: string;
    summaryText: string;
    googleMapDirection: string;
    garge: string;
    pool: string;
    wifi: string;
}

const generateSlug = (title: string): string => {
    return title
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')           // Replace spaces with hyphens
        .replace(/[^a-z0-9-]/g, '');    // Remove special characters
};

const AccommodationCard: React.FC<AccommodationCardProps> = ({
    title,
    city,
    image,
    summaryText,
    googleMapDirection,
    garge,
    pool,
    wifi,
}) => {
    const slug = generateSlug(title);

    return (
        <div className="services-card card shadow-container">
            <div className="card-body">
                {/* Mobile title */}
                <h4 className="card-title service-card-title small-screen-title mb-1">{title}</h4>

                <div className="service-card-image-container">
                    <img src={image} alt={title} className="service-image" />
                </div>

                <div className="service-content flex-fill ">
                    {/* Desktop title */}

                    <div>
                        <h4 id="big-screen-title" className="card-title service-card-title">{title}</h4>
                        <div className="location-text">

                            <p className="mx-1">{city}</p>
                            <p className="mx-1">
                                <a href={googleMapDirection} target="_blank" rel="noopener noreferrer">
                                    Google Directions
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className="summary-container mx-1">
                        <p>{summaryText}</p>
                    </div>

                    <div className="amenities-container">
                        <p className="amenities-title">Ausstattung</p>
                        <ul className="amenities-list">
                            <li>Schwimmbad: {pool}</li>
                            <li>WLAN: {wifi}</li>
                            <li>Parken: {garge}</li>
                        </ul>
                    </div>

                    <Link to={`/unterkunft/${slug}`} className="btn main-btn keep-btn-at-bottom-of-div">
                        Mehr Details anzeigen
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AccommodationCard;
