import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/index.css';

const SignUpPage: React.FC = () => {
    return (
        <div className="container-fluid text-center">
            <div className="row hero-banner-container home-hero-banner-container d-flex">
            </div>
            <div className="row hero-text-container text-center">
                <div className="col">
                    <div className='hero-text'>
                        <p>
                        </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    register
                </div>
            </div>


            <div className="row">
                <div className="col">
                    <div className='aboutus-and-contact-container mx-3' >
                        <h3 className='mt-2'>Über uns</h3>
                        <p className='about-us-text'>Zugvogel Reisen Namibia richtet sich besonders an aktive und reiselustige Menschen,
                            <br />
                            insbesondere Rentnerinnen und Rentner, aber auch an all jene, die dem Winter entfliehen und
                            die namibische Sonne genießen möchten.
                        </p>
                        <Link to="/überUns" className="btn home-about-us-btn mt-auto">
                            <p className='about-us-btn-text mx-3'>
                                Lernen Sie uns näher kennen
                            </p>
                        </Link>
                        <h4 className='mt-1'>Kontakt</h4>
                        <p>Kontaktieren Sie uns gerne unter:
                            <br />
                            Email: zugvogel@gmail.com or 264 81 85 88 650
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;