import React from 'react';
import { Link } from 'react-router-dom';
import './assets/css/tourCard.css'; // You can add custom styles for the TourCard
import '../../assets/css/serviceStyle.css';

interface TourCardProps {
    id: string;
    title: string;
    duration: string;
    startingPoint: string;
    mainDestination: string;
    endDestination: string;
    coverPhoto: string;
    summaryText: string;
}

const TourCard: React.FC<TourCardProps> = ({
    title,
    duration,
    startingPoint,
    mainDestination,
    endDestination,
    coverPhoto,
    summaryText
}) => {
    // Generate slug for URL
    const generateSlug = (title: string): string => {
        const slug = title
            .toLowerCase()
            .trim()
            .replace(/\s+/g, '-')  // Replace spaces with hyphens
            .replace(/[^a-z0-9-]/g, ''); // Remove special characters
        console.log('Generated slug:', slug); // Add this line to debug
        return slug;
    };

    const slug = generateSlug(title);

    return (
        <div className="services-card  card shadow-container">
            <div className="card-body">
                <h4 className="card-title service-card-title small-screen-title mb-1">{title}</h4>
                <div className="service-card-image-container">
                    <img
                        src={`https:${coverPhoto}`}
                        alt={title}
                        className="service-image"
                    />
                </div>
                <div className='service-content'>
                    <div className="my-1">
                        <h4 id="big-screen-title" className="card-title service-card-title">{title}</h4>
                        <div className='location-text'>
                            <p className="mx-1">Starting: {startingPoint}</p>
                            <p className="mx-1">
                                Destinantion: {mainDestination}
                            </p>
                        </div>

                    </div>
                    <div className="summary-container">
                        <p>{summaryText}</p>
                    </div>
                    <Link to={`/touren/${slug}`} className="btn main-btn mt-2">
                        <h5 className='btn-text card-title'>Mehr Details</h5>
                    </Link>
                </div>


            </div>
        </div>
    );
};

export default TourCard;
