import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../assets/css/index.css";
import "./assets/css/tours.css";
import "../../assets/css/serviceStyle.css";
import { fetchTourBySlug } from "../../services/contentfulService";

const TourDetailsPage: React.FC = () => {
    const { slug } = useParams();
    const [tour, setTour] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [isCoverViewerOpen, setIsCoverViewerOpen] = useState(false);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const loadTour = async () => {
            if (!slug) return;
            const data = await fetchTourBySlug(slug);
            console.log('Fetched tour:', data);
            setTour(data);
            setLoading(false);
            console.log('Fetched tour:', data);
            console.log('Cover photo:', data.coverPhoto);
        };

        loadTour();
    }, [slug]);

    if (loading) return <p>Loading...</p>;
    if (!tour) return <p>Tour not found.</p>;

    const openCoverViewer = () => setIsCoverViewerOpen(true);
    const closeCoverViewer = () => setIsCoverViewerOpen(false);

    const openViewer = (index: number) => {
        setCurrentImageIndex(index);
        setIsViewerOpen(true);
    };
    const closeViewer = () => setIsViewerOpen(false);

    const prevImage = () => {
        setCurrentImageIndex((prev) =>
            prev === 0 ? tour.photos.length - 1 : prev - 1
        );
    };

    const nextImage = () => {
        setCurrentImageIndex((prev) =>
            prev === tour.photos.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <div className="container-fluid text-center">
            <div className="row hero-banner-container tour-hero-banner-container subpage-hero-banner">
                <div className="col hero-page-titles">
                    <h1>Tour: {tour.title}</h1>
                    <p>Entdeckungsreisen in Namibia und darüber hinaus</p>
                </div>
            </div>

            <div className="row hero-text-container">
                <div className="col">
                    <div className="hero-text">
                        <p>{tour.intro || "Erleben Sie unvergessliche Abenteuer mit unseren individuellen Touren durch Namibia."}</p>
                    </div>
                </div>
            </div>

            <div className="row equal-height-container">
                <div className="col video-or-coverphoto-container-col mx-3">
                    <div className="video-or-coverphoto-container shadow-container">
                        <div className="coverphoto-container">
                            <img
                                src={tour.coverPhoto}
                                alt="cover"
                                className="accommodation-cover-image"
                                onClick={openCoverViewer}
                                style={{ cursor: "pointer" }}
                            />
                        </div>
                    </div>
                </div>

                <div className="description-container-col col-sm-12 col-md-6 col-lg-8 me-3 off-padding">
                    <div className="shadow-container description-container">
                        <div className="description-intro-container">
                            <h4 className="mt-3">{tour.title}</h4>
                            <div className="d-flex flex-row justify-content-center">
                                <p className="mx-2">Reisedauer: {tour.durationOfTrip} Tage</p>
                                <p className="mx-2">Ausgangspunkt: {tour.startingPoint}</p>
                                <p className="mx-2">Hauptziel: {tour.mainDestination}</p>
                                <p className="mx-2">Ausgangspunkt: {tour.endDestination}</p>
                            </div>
                        </div>
                        <div className="description-container my-3">
                            <p>{tour.description}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Photo Gallery */}
            <div className="row">
                <div className="col shadow-container accomdation-details-photo-container mx-3 mt-3">
                    <h4 className="mt-3">Gallery</h4>
                    <div className="image-container mb-3">
                        {tour.photos && tour.photos.length > 0 ? (
                            tour.photos.map((photo: any, index: number) => (
                                <img
                                    key={index}
                                    src={`https:${photo.fields.file.url}`}
                                    alt={photo.fields.title}
                                    className="accommodation-photo"
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
                        src={`https:${tour.photos[currentImageIndex].fields.file.url}`}
                        alt={tour.photos[currentImageIndex].fields.title}
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
                        src={tour.coverPhoto}
                        alt="cover"
                        className="fullscreen-image"
                    />
                </div>
            )}
        </div>
    );
};

export default TourDetailsPage;
