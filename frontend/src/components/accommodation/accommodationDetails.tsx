import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../assets/css/index.css";
import "../../assets/css/serviceDetails.css";
import "../../assets/css/serviceDetails.css";
import "./assets/css/accommodation.css";
import "./assets/css/accommodationDetails.css";
import { fetchAccommodationBySlug } from "../../services/contentfulService";
import EnquiryForm from "./EnquiryForm";


const AccommodationDetailsPage: React.FC = () => {
    const { slug } = useParams();
    const [accommodation, setAccommodation] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    // Fullscreen viewer states
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isCoverViewerOpen, setIsCoverViewerOpen] = useState(false);

    const [showEnquiryForm, setShowEnquiryForm] = useState(false);


    useEffect(() => {
        const loadAccommodation = async () => {
            if (!slug) return;
            const data = await fetchAccommodationBySlug(slug);
            setAccommodation(data);
            setLoading(false);
        };

        loadAccommodation();
    }, [slug]);

    if (loading) return <p>Loading...</p>;
    if (!accommodation) return <p>Accommodation not found.</p>;

    // Open fullscreen gallery viewer
    const openViewer = (index: number) => {
        setCurrentImageIndex(index);
        setIsViewerOpen(true);
    };

    // Open fullscreen cover photo viewer
    const openCoverViewer = () => {
        setIsCoverViewerOpen(true);
    };

    // Close viewers
    const closeViewer = () => setIsViewerOpen(false);
    const closeCoverViewer = () => setIsCoverViewerOpen(false);

    // Navigate gallery images
    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? accommodation.photos.length - 1 : prevIndex - 1
        );
    };

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === accommodation.photos.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="container-fluid text-center">
            <div className="row hero-banner-container accommodation-hero-banner-container subpage-hero-banner">
                <div className="d-flex flex-column hero-banner-text-container">
                    <h1 className='hero-banner-text '>Unterkünfte: {accommodation.title}</h1>
                    <p className='hero-banner-text'>Sie sich während Ihrer Reise rundum wohlfühlen können</p>
                </div>
            </div>

            <div className="row hero-text-container">
                <div className="col">
                    <div className="hero-text">
                        <p>
                            Unsere Gäste haben die Wahl zwischen zwei hochwertigen Unterkünften in Windhoek, die ideal für einen erholsamen Aufenthalt sind.
                            <br />
                            Beide Häuser bieten höchsten Komfort, exzellente Ausstattung und eine angenehme Atmosphäre.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row  equal-height-container">
                <div className="col video-or-coverphoto-container-col mx-3">
                    <div className="video-or-coverphoto-container shadow-container ">
                        {accommodation.video ? (
                            <video src={accommodation.video} controls></video>
                        ) : (
                            <div className="coverphoto-container">
                                <img
                                    src={accommodation.coverPhoto}
                                    alt="cover"
                                    className="details-cover-image"
                                    onClick={openCoverViewer}
                                    style={{ cursor: "pointer" }}
                                />
                            </div>
                        )}
                    </div>
                </div>
                <div className="description-container-col col-sm-12 col-md-6 col-lg-8 me-3 off-padding">
                    <div className="shadow-container description-container">
                        <div className="description-intro-container ">
                            <h4 className="mt-3">{accommodation.title}</h4>
                            <div className="d-flex flex-row">
                                <p className="mx-1">{accommodation.city}, Namibia</p>
                                <p className="mx-1">
                                    <a href={accommodation.googleMapLocation} target="blank">
                                        Google Directions
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="description-container mt-3">
                            <div>
                                <p>{accommodation.description}</p>
                            </div>
                            <div className="amenities-contianer mt-3">
                                <h5>Ausstattung</h5>
                                <ul className="amenities-list">
                                    {accommodation.amenities && Array.isArray(accommodation.amenities) && accommodation.amenities.length > 0 ? (
                                        accommodation.amenities.map((amenity: string, index: number) => (
                                            <li key={index} className="amenity my-1">
                                                {amenity}
                                            </li>
                                        ))
                                    ) : (
                                        <p>No amenities available</p>
                                    )}
                                </ul>
                            </div>

                        </div>
                        <button className="btn main-btn my-3" onClick={() => setShowEnquiryForm(true)}>
                            Enquire
                        </button>
                    </div>
                </div>
            </div>

            {/* Photo Gallery */}
            <div className="row">
                <div className="col shadow-container gallery-details-photo-container mx-3 mt-3">
                    <div className="mt-3">
                        <h4>Gallery</h4>
                    </div>
                    <div className="image-container mb-3">
                        {accommodation.photos && accommodation.photos.length > 0 ? (
                            accommodation.photos.map((photo: any, index: number) => (
                                <img
                                    key={index}
                                    src={`https:${photo.fields.file.url}`}
                                    alt={photo.fields.title}
                                    className="gallery-photo"
                                    onClick={() => openViewer(index)}
                                />
                            ))
                        ) : (
                            <p>No photos available</p>
                        )}
                    </div>
                </div>
            </div>

            {/* Fullscreen Gallery Viewer */}
            {isViewerOpen && (
                <div className="fullscreen-viewer">
                    <div className="overlay" onClick={closeViewer}></div>
                    <button className="close-btn" onClick={closeViewer}>&times;</button>
                    <button className="prev-btn" onClick={prevImage}>&lt;</button>
                    <img
                        src={`https:${accommodation.photos[currentImageIndex].fields.file.url}`}
                        alt={accommodation.photos[currentImageIndex].fields.title}
                        className="fullscreen-image"
                    />
                    <button className="next-btn" onClick={nextImage}>&gt;</button>
                </div>
            )}

            {/* Fullscreen Cover Photo Viewer */}
            {isCoverViewerOpen && (
                <div className="fullscreen-viewer">
                    <div className="overlay" onClick={closeCoverViewer}></div>
                    <button className="close-btn" onClick={closeCoverViewer}>&times;</button>
                    <img
                        src={accommodation.coverPhoto}
                        alt="cover"
                        className="fullscreen-image"
                    />
                </div>
            )}
            {showEnquiryForm && (
                <EnquiryForm
                    onClose={() => setShowEnquiryForm(false)}
                    accommodationTitle={accommodation.title}
                />
            )}


        </div>

    );
};

export default AccommodationDetailsPage;
