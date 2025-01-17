import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchAPOD = () => {
    const [imgUrl, setImgUrl] = useState('');
    const [title, setTitle] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAPOD = async () => {
            const API_KEY = import.meta.env.VITE_API_KEY;
            try {
                const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
                );
                setImgUrl(response.data.url);
                setTitle(response.data.title);
            } catch (error){
                console.error ('Erreur lors de la récupération des données :', error);
                setImgUrl('/fallback.webp');
                setTitle('Image par défaut'); // Image par défaut
            }
        };
        fetchAPOD();
    },[]);

    return { imgUrl, title, error };
};

export default FetchAPOD;