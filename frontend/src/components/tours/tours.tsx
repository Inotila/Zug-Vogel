import React from 'react';
import '../../assets/css/index.css';
import './assets/css/tours.css';
import TourCard from './TourCard';
import oryxIMG from '../../assets/images/tours-images/zebra.jpg';



const ToursPage: React.FC = () => {
  return (
    <div className="container-fluid text-center">
      <div className="row hero-banner-container tour-hero-banner-container subpage-hero-banner">
        <div className="col hero-page-titles">
          <h1>Touren</h1>
          <p>Entdeckungsreisen in Namibia
            und darüber hinaus</p>
        </div>
      </div>
      <div className="row hero-text-container">
        <div className="col">
          <div className='hero-text'>
            <p>Mit unseren mageschneiderten Touren haben Sie die Möglichkeit, dieses wunderschöne Land kennenzulernen.
              <br />
              Egal, ob Sie einen kurzen Wochenendtrip oder eine längere Entdeckungsreise von bis zu 14 Tagen planen:
              <br />
              Wir organisieren unvergessliche Touren, die Ihren Interessen und Ihrem Zeitrahmen entsprechen.
            </p>
          </div>
        </div>
      </div>
      {/* Etosha, Damaraland, Waterberg */}
      <div className="mx-3">
        <TourCard
          title="Etosha, Damaraland, Waterberg und Brandberg"
          image={oryxIMG}
          description="Starten Sie Ihr Abenteuer am beeindruckenden Waterberg Plateau, wo eine einzigartige 
            Tier- und Pflanzenwelt auf Sie wartet. Anschließend geht es in den Etosha Nationalpark, 
            sein Paradies für Wildtierbeobachtungen mit Elefanten, Löwen, Giraffen und mehr. Von hier
            führt die Reise weiter ins faszinierende Damaraland. Erkunden Sie die prähistorischen
            Felsgravuren von Twyfelfontein, ein UNESCO-Weltkulturerbe, und bestaunen Sie den
            majestätischen Brandberg, Namibias höchsten Berg, bekannt für seine Felsmalereien wie
            die berühmte &quot;White Lady&quot;."
        />
      </div>
      {/* Swakopmund / Walvis Bay */}
      <div className="mx-3">
        <TourCard
          title="Swakopmund / Walvis Bay mit Spitzkoppe und Sossusvlei"
          image="/images/tours/tour.JPG"
          description="Erleben Sie die Küstenstadt Swakopmund, bekannt für ihre charmante Kolonialarchitektur 
          und entspannte Atmosphäre. Im nahegelegenen Walvis Bay erwartet Sie eine Katamaran-Tour, 
          um Delfine und Robben in der Lagune zu beobachten. Abenteuerliche Aktivitäten wie 
          Quadbiken, Dünentouren oder ein Ausflug nach Sandwich Harbour, wo Wüste und Meer
          verschmelzen, sorgen für Nervenkitzel.
          Auf dem Weg dorthin machen Sie Halt an der spektakulären Spitzkoppe, dem &quot;Matterhorn
          Namibias&quot;, und genießen die imposante Landschaft und einzigartige Felsformationen. Für
          diejenigen, die die Schönheit der Wüste vertiefen möchten, lässt sich dieser Trip perfekt mit
          einem Abstecher zur legendären Sossusvlei verbinden, wo Sie die ikonischen roten
          Sanddünen und das surreale Dead Vlei erleben können."
        />
      </div>
      {/* Sossusvlei / Wüste */}
      <div className="mx-3">
        <TourCard
          title="Sossusvlei / Wüste"
          image="/images/tours/tour.JPG"
          description="Die Sossusvlei ist eine der eindrucksvollsten Wüstenlandschaften der Welt. Erklimmen Sie
          die gigantischen roten Sanddünen, wandern Sie durch die karge Schönheit des Dead Vlei
          und genießen Sie die magischen Farben der Wüste bei Sonnenaufgang und Sonnenuntergang. 
          Erleben Sie die Ruhe und Weite der ältesten Wüste der Erde – ein Paradies für Naturliebhaber und Fotografen."
        />
      </div>
      {/* Botswana / Kalahari / SAN */}
      <div className="mx-3">
        <TourCard
          title="Botswana / Kalahari / SAN"
          image="/images/tours/tour.JPG"
          description="Erleben Sie die Wildnis der Kalahari und tauchen Sie ein in das Leben der San, einer der 
          ältesten Kulturen der Welt. Lassen Sie sich von ihren traditionellen Geschichten, Tänzen und
          ihrer Kunst des Spurenlesens faszinieren. Kombinieren Sie dieses Erlebnis mit einem
          Abstecher in die vielfältige Tierwelt Botswanas, wo Sie Elefantenherden, Löwen und andere
          faszinierende Tiere in freier Wildbahn beobachten können."
        />
      </div>
      {/* Victoria-Fällen */}
      <div className="mx-3">
        <TourCard
          title="Reise in den Nordosten Namibias und zu den Victoria-Fällen"
          image="/images/tours/tour.JPG"
          description="Diese Reise führt Sie in den faszinierenden Nordosten Namibias, eine Region, die durch ihre 
          üppige Vegetation und vielfältige Tierwelt besticht. Der Nordosten wird auch das „Wetland 
          Paradise“ genannt, da die höheren Niederschlagsmengen hier eine einzigartige Flora und
          Fauna ermöglichen.
          
          Während der Tour besuchen wir die Parks entlang des Kavango-Flusses (Mahango und
          Buffalo, die Teil des Bwabwata-Nationalparks sind) sowie die Parks am Kwando-Fluss
          (Mudumu und Nkasa Rupara). Sie erleben spektakuläre Bootsfahrten, bei denen Sie
          Flusspferde, Krokodile und zahlreiche Vogelarten aus nächster Nähe beobachten können."
        />
      </div>
      {/* Sternenbeobachtung in Namibia */}
      <div className="mx-3">
        <TourCard
          title="Sternenbeobachtung in Namibia"
          image="/images/tours/tour.JPG"
          description="Namibia ist ein Paradies für Sternengucker. Unweit von Windhoek befindet sich das Cuno 
          Hoffmeister Memorial Observatory, wo Sie unter fast immer wolkenlosem Himmel die 
          Wunder des südlichen Sternenhimmels erleben können. Besonders beeindruckend ist die 
          Sternwarte am Gamsberg, dem höchsten Tafelberg Namibias, der sich auf 2.347 Metern Höhe erhebt.
          Der Sternenhimmel Namibias ist weltweit einzigartig: In der klaren, 
          lichtverschmutzungsfreien Atmosphäre strahlt die Milchstraße so hell, dass sie Schatten wirft. 
          Professionelle Sternenbeobachtung und -fotografie werden auf verschiedenen 
          Gästefarmen angeboten, wo Sie nicht nur den Blick auf die Milchstraße, sondern auch auf 
          Sternbilder und Galaxien genießen können, die nur auf der Südhalbkugel sichtbar sind. 
          Egal, ob Sie passionierter Astronom sind oder einfach die Schönheit der Natur bewundern 
          möchten – der namibische Sternenhimmel wird Sie nachhaltig beeindrucken."
        />
      </div>
    </div>
  );
};

export default ToursPage;