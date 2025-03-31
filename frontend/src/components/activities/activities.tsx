import React from 'react';
import '../../assets/css/index.css';
import './assests/css/activities.css'

const ActivitiesPage: React.FC = () => {
    return (
        <div className="container-fluid text-center">
            <div className="row hero-banner-container activities-hero-banner-container subpage-hero-banner">
                <div className="col hero-page-titles">
                    <h1>Aktivitäten</h1>
                    <p>Bleiben Sie wegen der Kälte nicht drinnen gefangen, sondern bleiben Sie unter der Sonne Namibias aktiv</p>
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
            <div className="row activities-row mt-3">
                <div className="col activities-col">
                    <div className='activities-container shadow-container mx-3'>
                        <div className=' mt-3'>
                            <h3>Aktivitäten</h3>
                        </div>
                        <div className='activities-text'>
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
                        <div className='mb-3'>
                            {/* <img className='about-nam-img' src={cbdImg} alt="" />
                            <img className='about-nam-img' src={churchImg} alt="" />
                            <img className='about-nam-img' src={trainStationImg} alt="" /> */}
                        </div>

                        <h4>book your activities via zugogel@gmail.com</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActivitiesPage;