import React from 'react';
import '../../assets/css/index.css';
import './assets/css/aboutNamibia.css';

const AboutNamibiaPage: React.FC = () => {
    return (
        <div className="container-fluid text-center">
            <div className="row">
                <div className="col tour-hero-banner-container">
                    <h1>Uber Namibia</h1>
                    <p>Ein Land mit sonnigem blauen Himmel und atemberaubender Natur</p>
                </div>
            </div>
            <div className="row hero-text-container">
                <div className="col">
                    <p>Namibia ist ein wunderschönes Land im südlichen Afrika.
                        <br /> Namibia ist für seine sich ständig verändernden Landschaften, seine vielfältige Tierwelt
                        <br /> und seine freundliche Bevölkerung bekannt und ist der ideale Zufluchtsort vor den europäischen Wintern.
                        <br /> Außerdem ist es sehr erschwinglich.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutNamibiaPage;