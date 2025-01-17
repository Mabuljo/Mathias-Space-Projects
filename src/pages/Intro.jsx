import React from 'react';
import { useNavigate } from 'react-router-dom';
import useFetchAPOD from '../utils/FetchAPOD';

const Intro = () => {
    const {imgUrl}= useFetchAPOD(); // Appeler le hook
    const navigate = useNavigate();

    return (
        <div className='intro' onClick={()=>navigate('/accueil')} style={{backgroundImage:`url(${imgUrl})`}}>
            <h1>Mathias's Space Projects</h1>
            <h2 className='pulsing'> Cliquez et entrez ...</h2>
        </div>
    );
};

export default Intro;
