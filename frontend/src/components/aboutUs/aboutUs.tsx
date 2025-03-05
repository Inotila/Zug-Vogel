import React, { useState } from 'react';
import '../../assets/css/index.css';
import './assets/css/aboutUs.css';

const AboutUsPage: React.FC = () => {
    const [showMore, setShowMore] = useState(false);

    return (
        <div className="container-fluid text-center">
            <div className="row hero-banner-container aboout-us-hero-banner-container subpage-hero-banner">
                <div className="col hero-page-titles">
                    <h1>Über uns</h1>
                    <p>Damit Sie sich wie zu Hause fühlen est 2025</p>
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
            {/* Bevölkerung und Land */}
            <div className="row ">
                <div className="col">
                    <div className='about-us-container mx-3'>
                        <div className='about-us-title mt-3'>
                            <h3>Unsere Gründer</h3>
                        </div>
                        <div className='about-us-img-container'>
                            <div className='founders-container'>
                                <div className='founder-img-container'>
                                    <img src="/images/tours/tour.JPG" alt="Founder 1" />
                                    <h4 className='founder-title'>Heinrich Georg Pielok</h4>
                                </div>
                                <div className='founder-img-container'>
                                    <img src="/images/tours/tour.JPG" alt="Founder 2" />
                                    <h4 className='founder-title'>Peter Kaulbach</h4>
                                </div>
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
                                <p>
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
                        <button className="btn show-more-btn mb-3" onClick={() => setShowMore(!showMore)}>
                            {showMore ? 'Show Less' : 'Show More'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;
