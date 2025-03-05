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
            {/* Bevölkerung und Land */}
            <div className="row ">
                <div className="col">
                    <div className='about-namibia-container mx-3'>
                        <div className='about-namibia-title'>
                            <h3>Bevölkerung und Land</h3>
                        </div>
                        <div className='about-namibia-text'>
                            <p>
                                Namibia ist mit 820.000 km² mehr als doppelt so groß wie Deutschland, gehört aber mit nur
                                rund drei Millionen Einwohnern zu den am dünnsten besiedelten Ländern der Erde.
                                Die Hauptstadt Windhoek, auf 1.650 Metern Höhe gelegen, ist mit etwa 400.000 Einwohnern
                                eine moderne und zugleich überschaubare Stadt mit hoher Lebensqualität.
                            </p>
                        </div>
                        <div className='about-namibia-img-container mb-3'>
                            <img src="/images/tours/tour.JPG" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* Klima & Natur */}
            <div className="row  mt-3">
                <div className="col">
                    <div className='about-namibia-container mx-3'>
                        <div className='about-namibia-title'>
                            <h3>Klima & Natur</h3>
                        </div>
                        <div className='about-namibia-text'>
                            <p>
                                Namibia ist ein Land des blauen Himmels. Durch den kalten Benguela-Strom aus der Antarktis herrscht ein warmes, trockenes Klima mit sehr geringer Luftfeuchtigkeit.
                                ß Selbst im Hochsommer (November bis März) sind die Temperaturen durch die Höhenlage gut erträglich:
                                ßTagsüber liegen sie meist zwischen 28 und 35 Grad, die Abende sind angenehm
                                mild.
                                ßRund 40 % der Landesfläche stehen unter Naturschutz – darunter der berühmte Etosha-
                                Nationalpark, aber auch zahlreiche kleinere Schutzgebiete.
                                ß Namibia hat weltweit die meisten
                                Geparden, eine große Population von Leoparden, Nashörnern und Giraffen sowie
                                einzigartige wüstenangepasste Elefanten und Löwen.
                                Die Vogelwelt ist ebenfalls vielfältig,
                                und die Küstenregionen bieten faszinierende Landschaften mit beeindruckenden Dünen und
                                Lagunen.
                            </p>
                        </div>
                        <div className='about-namibia-img-container mb-3'>
                            <img src="/images/tours/tour.JPG" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* Geschichte &amp; Gesellschaft */}
            <div className="row  mt-3">
                <div className="col">
                    <div className='about-namibia-container mx-3'>
                        <div className='about-namibia-title'>
                            <h3>Geschichte &amp; Gesellschaft</h3>
                        </div>
                        <div className='about-namibia-text'>
                            <p>
                                Namibia erlangte 1990 seine Unabhängigkeit von Südafrika nach einem langen
                                Befreiungskampf.
                                ßDie Verfassung gilt als eine der fortschrittlichsten Afrikas, und Namibia
                                zählt zu den stabilsten Demokratien des Kontinents.
                                ß Die Bevölkerung ist kulturell vielfältig, mit zahlreichen ethnischen Gruppen und Sprachen.
                                ß Offizielle Landessprache ist Englisch, doch Deutsch ist – neben Afrikaans und den
                                einheimischen Sprachen – nach wie vor präsent.
                                ßRund 15.000 Namibier haben deutsche
                                Wurzeln. Deutsche Kultur wird mit Karnevalsvereinen, dem Oktoberfest und typisch
                                deutscher Küche lebendig gehalten.
                                ßAuch deutschsprachige Medien sind vertreten, darunter
                                die „Allgemeine Zeitung“ sowie zwei Radiosender.
                            </p>
                        </div>
                        <div className='about-namibia-img-container mb-3'>
                            <img src="/images/tours/tour.JPG" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* Infrastruktur &amp; Lebensstandard */}
            <div className="row  mt-3">
                <div className="col">
                    <div className='about-namibia-container mx-3'>
                        <div className='about-namibia-title'>
                            <h3>Infrastruktur &amp; Lebensstandard</h3>
                        </div>
                        <div className='about-namibia-text'>
                            <p>
                                Namibia bietet eine exzellente Infrastruktur. Das Straßennetz gilt als eines der besten Afrikas
                                und liegt laut World Economic Forum weltweit auf Platz 21 – noch vor manchen
                                europäischen Ländern. Die Hauptverbindungen sind asphaltiert, und selbst Schotterpisten
                                sind gut gewartet.
                                <br /> Das Mobilfunknetz deckt alle besiedelten Gebiete ab.</p>

                            <p>Das Gesundheitswesen entspricht deutschem Standard – private Kliniken und Ärzte bieten
                                eine exzellente Versorgung mit kurzen Wartezeiten. Namibia ist zudem führend in Afrika bei
                                der Pressefreiheit und rangiert weltweit auf Augenhöhe mit Ländern wie Spanien und
                                Österreich.</p>
                            <p>Namibia ist ein Land der Kontraste – rau und doch gastfreundlich, weitläufig und doch voller
                                Leben.
                                <br />Es verbindet afrikanische Wildnis mit europäischem Komfort und ist der ideale Ort für
                                eine unvergessliche Zeit in der Sonne.
                            </p>
                        </div>
                        <div className='about-namibia-img-container mb-3'>
                            <img src="/images/tours/tour.JPG" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutNamibiaPage;