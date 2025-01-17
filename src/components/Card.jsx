import React from 'react';

const Card = ({ title, image, link, text, newTab = false }) => {
    return (
        <div className="card-wrapper">
            <a href={link} className="card" target={newTab ? "_blank" : "_self"} 
                rel={newTab ? "noopener noreferrer" : undefined}>
                <div className="card_content">
                    <img src={image} alt={title} />
                    <h2>{title}</h2>
                </div>
            </a>
            <p className="card_text">{text}</p>
        </div>
    );
};

export default Card;