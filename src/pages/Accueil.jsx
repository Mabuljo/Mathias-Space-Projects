import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Card from '../components/Card';
import Footer from '../components/Footer';

const Accueil = () => {
    const pages = [
        { title: 'Rechercher', image: '/rechercher.webp', link: '/rechercher', text:`Trouvez les étoiles, les planètes et bien plus encore dans la bibliothèque d'images de la NASA !` },
        { title: 'Explorer Google Earth', image: '/earth.webp', link: 'https://earth.google.com/web', text:'Découvrez la Terre et ses merveilles grâce à Google Earth. (Une connexion peut être requise pour certaines fonctionnalités avancées.)', newTab: true },
        { title: 'Astéroïdes', image: '/asteroides.webp', link: '/asteroides', text:`L'API Asteroids - NeoWs (Near Earth Object Web Service) de la NASA permet d'obtenir des informations sur les astéroïdes proches de la Terre aujourd'hui.` },
        { title: 'Lancements à venir', image: '/fusee.webp', link: '/lancements', text:'Préparez-vous au décollage ! Consultez les dates des prochains lancements de fusées et satellites grâce aux données des SpaceDevs.' },
    ];

    return (
        <div className='accueil'>
            <Header />
            <Banner />
            <h2 className='presentation'>Petit lieu de curiosités astronomiques, pour voyager les pieds sur Terre et la tête dans l'espace.</h2>
            <main className='cards'>
                {pages.map((page,index) => (
                    <Card key={index} title={page.title} image={page.image} link={page.link} text={page.text} newTab={page.newTab} />
                ))}
            </main>
            <Footer />
        </div>
    );
};

export default Accueil;
