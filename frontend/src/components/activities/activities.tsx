import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getUserProfile } from '../../services/authService';
import '../../assets/css/index.css';
import './assests/css/activities.css';
import "../../assets/css/serviceStyle.css";
import golfPlayers from '../../assets/images/hero-images/activities-hero-img.jpg';
import swimmer from '../../assets/images/actvities/swimmer.jpg';
import cafeSitters from '../../assets/images/actvities/cafeSitters.jpg';
import cartDriver from '../../assets/images/actvities/cartDriver.jpg';

const galleryImages = [
    { src: golfPlayers, alt: "activities to do in Namibia" },
    { src: swimmer, alt: "activities to do in Namibia" },
    { src: cafeSitters, alt: "activities to do in Namibia" },
    { src: cartDriver, alt: "activities to do in Namibia" },
];

const ActivitiesPage: React.FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            getUserProfile(token)
                .then((data) => {
                    if (data) {
                        setIsAuthenticated(true);
                    }
                })
                .catch(() => {
                    setIsAuthenticated(false);
                });
        }
    }, []);

    const openViewer = (index: number) => {
        setCurrentImageIndex(index);
        setIsViewerOpen(true);
    };

    const closeViewer = () => setIsViewerOpen(false);

    const prevImage = () => {
        setCurrentImageIndex((prev) =>
            prev === 0 ? galleryImages.length - 1 : prev - 1
        );
    };

    const nextImage = () => {
        setCurrentImageIndex((prev) =>
            prev === galleryImages.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <div className="container-fluid text-center">
            <div className="row hero-banner-container activities-hero-banner-container subpage-hero-banner">
                <div className="d-flex flex-column hero-banner-text-container">
                    <h1 className='hero-banner-text '>Aktivitäten</h1>
                    <p className='hero-banner-text'>
                        Bleiben Sie wegen der Kälte nicht drinnen gefangen, sondern bleiben Sie unter der Sonne Namibias aktiv
                    </p>
                </div>
            </div>

            <div className="row hero-text-container">
                <div className="col">
                    <div className='hero-text'>
                        <p>
                            Windhoek bietet eine Fülle von Möglichkeiten, um Körper, Geist und Seele zu bereichern. Ob
                            Sie aktiv bleiben, neue Fähigkeiten entdecken oder einfach die Seele baumeln lassen
                            möchten – bei uns finden Sie das perfekte Angebot. Wir haben eine abwechslungsreiche
                            Auswahl an Aktivitäten zusammengestellt, die Ihnen sowohl die lebendige Kultur als auch die
                            atemberaubende Natur Namibias näherbringen.
                        </p>
                    </div>
                </div>
            </div>

            <div className="row activities-row mt-1">
                <div className="col activities-col">
                    <div className='activities-container shadow-container mx-3'>
                        <div className='my-2'>
                            <h3 className='card-main-title'>Aktivitäten</h3>
                        </div>
                        <div className='activities-text mb-3'>
                            <p>
                                Tauchen Sie ein in ein aktives Leben mit Sportangeboten wie Golf, Tennis, Paddeltennis oder
                                Schwimmen. Erkunden Sie die umliegenden Berge auf malerischen Wanderwegen oder
                                halten Sie sich in modernen Fitnessstudios fit. Für kreative Entfaltung sorgen Malkurse,
                                Fotografie-Workshops oder Tanz- und Pilatesstunden.
                            </p>
                            <p>
                                Kulturell Interessierte können die faszinierende Geschichte und das Kunsthandwerk
                                Namibias entdecken – vom Independence Museum über traditionelle Märkte bis hin zu
                                lokalen Kunstausstellungen und Liveauftritten. Ergänzen Sie Ihr Erlebnis mit kulinarischen
                                Highlights in Windhoeks hervorragenden Restaurants oder entspannen Sie bei einer
                                Massage, einer Yoga-Stunde oder einem Spa-Besuch.
                            </p>
                            <p>
                                Ganz gleich, wofür Sie sich entscheiden – Windhoek hält für jeden Geschmack etwas bereit.
                                Freuen Sie sich auf unvergessliche Erlebnisse!
                            </p>
                            <p>
                                Namibia ist überreich an faszinierenden Reisezielen und spektakulären Landschaften. Dazu
                                kommt eine überaus vielfältige Tierwelt
                            </p>
                        </div>

                        {isAuthenticated && (
                            <div className='updateActivityOnProfile mb-3'>
                                <p className='card-main-title'>
                                    Teilen Sie uns mit, an welchen Aktivitäten Sie interessiert sind,
                                    damit wir für Ihren Aufenthalt spannende Aktivitäten für Sie organisieren können.
                                </p>
                                <Link to="/profile" className="btn main-btn home-btn mt-3">
                                    <h5 className='btn-text card-title'>Aktualisieren Sie Ihr Profil</h5>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col shadow-container gallery-details-photo-container mx-3 mt-3">
                    <h4 className="mt-2 card-main-title">Gallery</h4>
                    <div className="image-container mb-3">
                        {galleryImages.map((img, index) => (
                            <img
                                key={index}
                                src={img.src}
                                alt={img.alt}
                                className="gallery-photo"
                                onClick={() => openViewer(index)}
                                style={{ cursor: "pointer" }}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {isViewerOpen && (
                <div className="fullscreen-viewer">
                    <div className="overlay" onClick={closeViewer}></div>
                    <button className="close-btn" onClick={closeViewer}>&times;</button>
                    <button className="prev-btn" onClick={prevImage}>&lt;</button>
                    <img
                        src={galleryImages[currentImageIndex].src}
                        alt={galleryImages[currentImageIndex].alt}
                        className="fullscreen-image"
                    />
                    <button className="next-btn" onClick={nextImage}>&gt;</button>
                </div>
            )}
        </div>
    );
};

export default ActivitiesPage;
