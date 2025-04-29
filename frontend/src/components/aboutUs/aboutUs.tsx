import React, { useState } from 'react';
import '../../assets/css/index.css';
import './assets/css/aboutUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import peterIMG from '../../assets/images/founder-images/peter.jpg'
import heinrichMG from '../../assets/images/founder-images/heinrich.jpg'

const AboutUsPage: React.FC = () => {
    const [showMore, setShowMore] = useState(false);

    return (
        <div className="container-fluid text-center">
            <div className="row hero-banner-container about-us-hero-banner-container subpage-hero-banner">
                <div className="d-flex flex-column hero-banner-text-container">
                    <h1 className='hero-banner-text '>Über uns</h1>
                </div>
            </div>
            <div className="row hero-text-container">
                <div className="col">
                    <div className='hero-text'>
                        <p>
                            Wie der Zugvogel, der der kalten Jahreszeit entflieht, lädt unser Unternehmen Menschen ein,
                            <br />den europäischen Winter hinter sich zu lassen und die Wärme und Schönheit Namibias zu
                            erleben.
                            <br /> Der Name &quot;Zugvogel&quot; steht für Bewegung, Freiheit und die Freude am Entdecken
                            neuer Horizonte – Werte, die auch uns antreiben.
                        </p>
                    </div>
                </div>
            </div>
            {/* founder countainer */}
            <div className="row ">
                <div className="col">
                    <div className='about-us-container shadow-container mt-1 mb-3 mx-3'>
                        <div className='about-us-title mt-1'>
                            <h3 className='card-main-title'>Unsere Gründer</h3>
                        </div>
                        <div className='founders-container my-3'>
                            <div className='founder-img-container'>
                                <img src={heinrichMG} className='founder-img' alt="Heinrich Georg Pielok" />
                                <h5 className='founder-title mt-2'>Heinrich Georg Pielok</h5>
                            </div>
                            <div className='founder-img-container'>
                                <img src={peterIMG} className='founder-img' alt="Peter Kaulbach" />
                                <h5 className='founder-title mt-2'>Peter Kaulbach</h5>
                            </div>
                        </div>
                        <div className='about-us-text'>
                            <p>
                                Zugvogel Reisen Namibia wurde 2024 von Peter Kaulbach und Heinrich Georg Pielok, zwei begeisterten Namibia-Liebhabern, gegründet.
                                Ihre tiefe Verbundenheit mit dem Land bildet
                                die Grundlage für ein Unternehmen, das authentische Erlebnisse mit exzellentem Service verbindet.
                                Mit Zugvogel Reisen erfüllen Heinrich und Peter nicht nur ihren eigenen Traum,
                                sondern ermöglichen auch anderen unvergessliche Reisen.
                            </p>
                            <br />
                        </div>
                        {/* Show More / Show Less Section */}
                        {showMore && (
                            <div className="about-us-text ">
                                <p>
                                    Heinrich Georg Pielok ist studierter Geograf und kam 2010 erstmals nach Namibia. Beruflich
                                    war er in der Entwicklungszusammenarbeit tätig, mit einem Schwerpunkt auf Landwirtschaft
                                    und dem Aufbau von Nationalparks. In Richtung Ruhestand wollte er nicht einfach nur
                                    innehalten, sondern seine Passion für Land und Natur aktiv weitergeben. Namibia ist seine
                                    Heimat geworden, und er kennt insbesondere den Nordosten des Landes bestens. Seine
                                    zahlreichen sozialen Kontakte und sein Wissen über das Land fließen in die Planung jeder
                                    Reise ein.
                                </p>
                                <br />
                                <p>
                                    Peter kam 2018 als Austauschstudent nach Namibia und fühlte sich sofort von den Menschen
                                    und der Kultur angezogen. Fasziniert von der Weite und Freiheit des Landes, kehrte er 2019
                                    für seine Bachelorarbeit zurück, die er mit einer indigenen San-Gemeinschaft im Osten
                                    Namibias durchführte. Diese intensive Erfahrung vertiefte seine Bindung zum Land und
                                    seinen Bewohnern. 2022 entschied er sich, dauerhaft nach Namibia zu ziehen, um seinen
                                    Master fortzusetzen und weiterhin mit der San-Gemeinschaft zu arbeiten. Mittlerweile ist
                                    Namibia sein Zuhause – mit Haus, Familie und Hobbys. Mit dem Unternehmen möchte Peter
                                    Namibia einem breiten Publikum in Deutschland näherbringen und die Einzigartigkeit des
                                    Landes, die Gastfreundschaft der Menschen und die kulturelle Vielfalt erlebbar machen.
                                    Durch seine enge Verbindung zur lokalen Bevölkerung ermöglicht er authentische
                                    Begegnungen und tiefgehende Einblicke, die jede Reise unvergesslich machen.
                                    Unsere Motivation und unser Anspruch
                                </p>
                                <br />
                                <p className='mb-3'>
                                    Unser Ziel ist es, unseren Gästen nicht nur die Schönheit Namibias zu zeigen, sondern ihnen
                                    auch ein Gefühl von Heimat und Wohlbefinden zu vermitteln. Wir legen großen Wert auf
                                    persönliche Betreuung, maßgeschneiderte Reisepläne und höchste Qualität bei Unterkünften,
                                    Transport und Aktivitäten. Jeder Aufenthalt soll zu einem einzigartigen Erlebnis werden, das
                                    den individuellen Wünschen und Bedürfnissen unserer Gäste entspricht.
                                    Für wen wir da sind
                                    Zugvogel Reisen Namibia richtet sich besonders an aktive und reiselustige Menschen,
                                    insbesondere Rentnerinnen und Rentner, aber auch an all jene, die dem Winter entfliehen und
                                    die namibische Sonne genießen möchten. Unsere Angebote sind sowohl für Abenteuerlustige
                                    als auch für Ruhesuchende ideal, die sich von der beeindruckenden Landschaft und Kultur
                                    Namibias begeistern lassen wollen.
                                    Unser Versprechen an Sie
                                    Mit einem hohen Anspruch an Service und Detailgenauigkeit sorgt Zugvogel Reisen Namibia
                                    dafür, dass Sie sich während Ihrer Reise rundum wohlfühlen. Von der ersten Beratung bis zum
                                    letzten Tag Ihrer Reise stehen wir Ihnen mit Rat und Tat zur Seite. Ihre Zufriedenheit ist unser
                                    größtes Anliegen – denn Ihr Traumurlaub ist unsere Mission.
                                </p>
                            </div>
                        )}

                        {/* Toggle Button */}
                        <button className="btn main-btn mb-3 show-more-about-us-btn" onClick={() => setShowMore(!showMore)}>
                            {showMore ? 'Weniger anzeigen' : 'Mehr anzeigen'}
                        </button>
                    </div>
                </div>
            </div>
            <div className="row ">
                <div className="col">
                    <div className='about-us-container shadow-container mx-3'>
                        <div className='about-us-title mt-3'>
                            <h3 className='card-main-title'>Kontaktieren Sie uns</h3>
                        </div>
                        <div className='about-us-title mt-3'>
                            <p>Kontaktieren Sie uns noch heute für alle Ihre Buchungswünsche. Wir beantworten auch gerne alle Ihre Fragen zu Namibia.
                                <br />
                                Nachfolgend finden Sie unsere Kontaktdaten und unsere Social-Media-Links. Folgen Sie uns noch heute und bleiben Sie mit uns in Verbindung!
                            </p>
                        </div>
                        <div className='contact-container d-flex justify-content-center text-center'>
                            <div className='contact-details-container '>
                                <div className='phone-and-email-container'>
                                    <div className='phone-and-email my-3'>
                                        <div className='phone-and-email mx-3'>
                                            <span className='mx-2'>
                                                <FontAwesomeIcon icon="phone" size="2x" />
                                            </span>
                                            <h3> 081 858 8650</h3>
                                        </div>
                                        <div className='phone-and-email mx-3'>
                                            <span className='mx-2'>
                                                <FontAwesomeIcon icon="envelope" size="2x" />
                                            </span>
                                            <h3> zugvogel@gmail.com</h3>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className='social-media-links-container mt-3'>
                                    <div className='soial-links'>
                                        <a className='mx-3' href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                            <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
                                        </a>
                                        <h4 className='founder-title'>Facebook</h4>
                                    </div>
                                    <div className='soial-links'>
                                        <a className='mx-3' href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                            <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
                                        </a>
                                        <h4 className='founder-title'>Instagram</h4>
                                    </div>

                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;
