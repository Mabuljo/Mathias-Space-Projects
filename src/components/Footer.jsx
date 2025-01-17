import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className='credits'>
                <p>Crédit photos : <a href="https://api.nasa.gov" target="_blank" rel="noopener noreferrer">NASA</a> -
                <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer"> Unsplash</a>.</p>
                <p>Site conçu et développé par <a href="https://mabuljo-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer">Mabuljo</a>.</p>
            </div>
            <div className='reseaux'>
                <a href="https://www.linkedin.com/in/marjorie-goudet-951b80340/" target='_blank' aria-label='Lien LinkedIn'rel="noopener noreferrer" ><i className="fa-brands fa-linkedin icones"></i></a>
                <a href="https://github.com/Mabuljo" target='_blank' aria-label='Lien GitHub' rel="noopener noreferrer"><i className="fa-brands fa-github icones"></i></a>
                <a href="mailto:mabuljo-dev@gmail.com" target='_blank' aria-label='Lien email' rel="noopener noreferrer" ><i className="fa-solid fa-envelope icones"></i></a>
            </div>
            <div className='copyright'>
                <a href="/mentions-legales" aria-label='Mentions légales' rel="noopener noreferrer">Mentions légales.</a>
                <p><i className="fa-regular fa-copyright"></i> 2025. Tous droits réservés.</p>
            </div>
        </footer>
    );
};

export default Footer;