import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../../assets/css/index.css';
import './assets/css/accommodation.css';
import './assets/css/accommodationDetails.css'

const AccomodationDetailsPage: React.FC = () => {
    const { slug } = useParams();  // Get ID from URL
    const [accommodation, setAccommodation] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAccommodation = async () => {
            if (!slug) return;  // Ensure ID is present

            try {
                const res = await fetch(`http://localhost:5010/api/contentful/accommodation/${slug}`);
                if (!res.ok) {
                    throw new Error(`Error ${res.status}: ${res.statusText}`);
                }
                const data = await res.json();
                setAccommodation(data);
            } catch (error) {
                console.error("Error fetching accommodation details:", error);
                setAccommodation(null);
            } finally {
                setLoading(false);
            }
        };

        fetchAccommodation();
    }, [slug]);

    if (loading) return <p>Loading...</p>;
    if (!accommodation) return <p>Accommodation not found.</p>;

    return (
        <div className="container-fluid text-center">
            <div className="row hero-banner-container accommodation-hero-banner-container subpage-hero-banner">
                <div className="col hero-page-titles">
                    <h1>Unterkünfte: {accommodation.title}</h1>
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
            <div className="row">
                <div className="col">
                    <div className='video container'>
                        <video src={accommodation.video || ""}></video>
                    </div>
                </div>
                <div className="col">
                    <div className='shadow-container description-container mx-3'>
                        <div className='description-intro-container '>
                            <h4 className='mt-3'>{accommodation.title}</h4>
                            <div className='d-flex flex-row'>
                                <p className='mx-1'>{accommodation.city},Namibia</p>
                                <p className='mx-1'>
                                    <a href={accommodation.googleMapLocation} target='blank'> google directions</a>
                                </p>
                            </div>
                        </div>
                        <div className='description-container mt-3'>
                            <p>{accommodation.summaryDescription}</p>
                        </div>
                        <Link to="#" className="btn main-btn my-3">Enquire</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccomodationDetailsPage;
