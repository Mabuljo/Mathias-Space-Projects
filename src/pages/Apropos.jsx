import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

const Apropos = () => {
    return (
        <div>
            <Header />
            <Banner />
            <main className='a-propos'>
                <h2>À propos</h2>
                <p>Je suis Mabuljo, développeuse web, j'ai suivi la formation diplômante d'intégrateur web chez OpenClassrooms.
                Passionnée, je me spécialise dans le langage JavaScript, React et Sass afin de créer des applications web dynamiques. </p>
                <p> L'idée de ce projet est née du désir de créer quelque chose d'amusant et d'éducatif, dans le but de partager l'univers fascinant de l'espace avec mon fils, passionné d'astronomie. Mon objectif était de créer une expérience immersive, où les visiteurs pourraient découvrir des images de l'astronomie, apprendre des faits intéressants et s'évader dans l'infini de l'espace.</p>
                <p>Ce site est à la fois un espace personnel et un exemple de mes compétences en développement web.</p>
                <img src="/universe.png" className='illustrations'/>
                <div className='a-propos_content'>
                    <h3>Technologies utilisées</h3>
                    <p>Ce site a été conçu avec les technologies suivantes :</p>
                    <p><i class="fa-solid fa-star"></i> React pour une interface interactive et fluide.</p>
                    <p><i class="fa-solid fa-star"></i> SASS pour un design moderne et personnalisé.</p>
                    <p><i class="fa-solid fa-star"></i> Vite pour un développement rapide et efficace.</p>
                    <p><i class="fa-solid fa-star"></i> Les APIs de la NASA pour intégrer des images de l'astronomie et des informations fascinantes.</p>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Apropos;
