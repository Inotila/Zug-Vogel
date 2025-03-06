import React from 'react';
import { Link } from 'react-router-dom';
import './assets/css/tourCard.css';

interface TourCardProps {
    title: string;
    image: string;
    description: string;
}

const TourCard: React.FC<TourCardProps> = ({ title, image, description }) => {
    return (
        <div className="tour-card card mb-3">
            <div className="card-body">
                <div className="tour-header">
                    <h2 className="card-title">{title}</h2>
                </div>
                <img src={image} alt={title} className="tour-image" />
                <div className="tour-content">
                    <div className="tour-bigscreen-header">
                        <h2 className="card-title">{title}</h2>
                    </div>
                    <p className="tour-description">{description}</p>
                    <Link to="/tour-details" className="btn tour-details-btn btn-outline-dark mt-2">
                        Show more details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TourCard;