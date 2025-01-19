import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchAPOD = () => {
    const [imgUrl, setImgUrl] = useState('');
    const [mediaType, setMediaType] = useState('');
    const [title, setTitle] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAPOD = async () => {
            const API_KEY = import.meta.env.VITE_API_KEY;
            try {
                const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
                );

                const url = response.data.url;
                const media_type = response.data.media_type;
                const title = response.data.title;

                if (media_type === 'image') {
                    setImgUrl(url);
                    setMediaType(media_type);
                    setTitle(title);
                } else {
                    // Si le media_type n'est pas une image, afficher une image par défaut
                    setImgUrl('/fallback.webp');
                    setMediaType('image');
                    setTitle('Image par défaut');
                }
            } catch (error){
                console.error ('Erreur lors de la récupération des données :', error);
                setImgUrl('/fallback.webp');
                setMediaType('image'); // Par défaut, afficher une image
                setTitle('Image par défaut'); // Image par défaut
                setError(error.message);
            }
        };
        fetchAPOD();
    },[]);

    return { imgUrl, title, error };
};

export default FetchAPOD;