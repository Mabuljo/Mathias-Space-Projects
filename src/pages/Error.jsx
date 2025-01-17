import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

const Error = () => {
    return (
        <div className='error'>
            <Header />
            <div className='error_content'>
            <h2>Oups...</h2>
            <img src="/error_404.svg" alt="Erreur 404" />
            <h2>La page que vous demandez n'existe pas.</h2>
            </div>
        </div>
    );
};

export default Error;