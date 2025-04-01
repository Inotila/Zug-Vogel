import React from 'react';
import '../../assets/css/index.css';
import './assets/css/accommodation.css';
import erosGuestHouseImg from '../../assets/images/accommodation-images/eros-guest-house/eros-pool.jpg';

const AccomodationDetailsPage: React.FC = () => {
    return (
        <div className="container-fluid text-center">
            <div className="row hero-banner-container accommodation-hero-banner-container subpage-hero-banner">
                <div className="col hero-page-titles">
                    <h1>Unterkünfte: Name of accommodation here</h1>
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
                        <video src=""></video>
                    </div>
                </div>
                <div className="col">
                    <div>
                        <p>Text about the place goes here</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccomodationDetailsPage;
