import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Card from '../components/Card';
import Footer from '../components/Footer';


const Accueil = () => {
    const pages = [
        { title: 'rechercher', image: '/rechercher.webp', link: '/rechercher', text:`Trouvez les étoiles, les planètes et bien plus encore dans la bibliothèque d'images de la NASA !` },
        { title: 'Google Earth Engine', image: '/earth.webp', link: '/earth', text:'teXte 1' },
        { title: 'Astéroïdes', image: '/asteroides.webp', link: '/asteroides', text:`L'API Asteroids - NeoWs (Near Earth Object Web Service) de la NASA permet d'obtenir des informations sur les astéroïdes proches de la Terre aujourd'hui.` },
        { title: 'Mars Rover photos', image: '/mars.webp', link: '/mars', text:'teXte 1' },
        { title: 'Lancements à venir', image: '/fusee.webp', link: '/lancement', text:'teXte 1' },
    ];

    return (
        <div className='accueil'>
            <Header />
            <Banner />
            <h2 className='presentation'>Petit lieu de curiosités astronomiques, pour voyager les pieds sur Terre et la tête dans l'espace.</h2>
            <main className='cards'>
                {pages.map((page,index) => (
                    <Card key={index} title={page.title} image={page.image} link={page.link} text={page.text}/>
                ))}
            </main>
            <Footer />
        </div>
    );
};

export default Accueil;
