import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

const MentionsLegales = () => {
    return (
        <div>
            <Header />
            <Banner />
            <main className='mentions'>
                <h2>Mentions Légales</h2>
                <div className='mentions_content'>
                    <h3>1. Informations générales</h3>
                    <p>Ce site web est un projet personnel réalisé par Mabuljo, conçu pour partager l'univers fascinant de l'astronomie et de l'exploration spatiale. Les contenus présentés visent à offrir une expérience immersive et ludique pour les amateurs d'espace.</p>
                </div>
                <div className='mentions_content'>
                    <h3>2. Sources des données</h3>
                    <p><i className="fa-solid fa-star"></i> API Astronomy Picture of the Day (APOD) : Les images et informations affichées sur ce site proviennent de l'API officielle de la NASA. Pour en savoir plus : <a href="https://api.nasa.gov/" target='_blank' aria-label='lien vers Nasa.gov' rel="noopener noreferrer"> api.nasa.gov.</a></p>
                    <p><i className="fa-solid fa-star"></i> Google Earth Engine : Les visualisations géographiques et données environnementales sont fournies par l'API Google Earth Engine. Détails disponibles sur <a href="https://earthengine.google.com/" target='_blank' aria-label='lien vers Nasa.gov' rel="noopener noreferrer"> earthengine.google.com.</a>
                    </p>
                </div>
                <img src="/space-tourism.png" className='illustrations'/>
                <div className='mentions_content'>
                    <h3>3. Utilisation des données</h3>
                    <p>Les données affichées sur ce site sont récupérées via des APIs publiques et utilisées dans un contexte non commercial et personnel. Elles ne peuvent être reproduites ou utilisées à d'autres fins sans l'autorisation des propriétaires des données.</p>
                </div>
                <div className='mentions_content'>
                    <h3>4. Responsabilité</h3>
                    <p>L'auteur de ce site ne peut garantir l'exactitude ou la disponibilité des données fournies par les services externes. Toute utilisation des informations de ce site doit être faite avec discernement.</p>
                </div>
                <img src="/cosmonaut.png" className='illustrations' />
                <div className='mentions_content'>
                    <h3>5. Propriété intellectuelle</h3>
                    <p>Les images et données affichées restent la propriété de leurs auteurs respectifs (NASA, Google, etc.).</p>
                    <p>Les textes et éléments graphiques spécifiques à ce site sont la propriété de Mabuljo, sauf indication contraire.</p>
                </div>
                <div className='mentions_content'>
                    <h3>6. Contact</h3>
                    <p>Pour toute question ou suggestion concernat ce site, vous pouvez me contacter via :</p>
                    <a href="https://github.com/Mabuljo" target='_blank' aria-label='Lien GitHub' rel="noopener noreferrer"><i className="fa-solid fa-star"></i> Github</a>
                    <a href="https://www.linkedin.com/in/marjorie-goudet-951b80340/" target='_blank' aria-label='Lien LinkedIn'rel="noopener noreferrer" ><i className="fa-solid fa-star"></i> LinkedIn</a>
                    <p><i className="fa-solid fa-star"></i> Ou en cliquant sur l'icône de l'email dans le pied de page.</p>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default MentionsLegales;