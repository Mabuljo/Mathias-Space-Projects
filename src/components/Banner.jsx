import React from 'react';
import useFetchAPOD from '../utils/FetchAPOD';

const Banner = () => {
    const { imgUrl, title } = useFetchAPOD();
    return (
        <div className="banner">
            <img src={imgUrl} alt={title} />
            <h1>Mathias's Space Projects</h1>
        </div>
    );
};

export default Banner;