import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchAPOD = () => {
    const [imgUrl, setImgUrl] = useState('');
    const [mediaType, setMediaType] = useState('');
    const [title, setTitle] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        // Vérifie si les données sont déjà dans le cache
        const cachedPhotoData = sessionStorage.getItem("apodData");

        if (cachedPhotoData) {
            // Si oui, on utilise les données du cache
            const data = JSON.parse(cachedPhotoData);
            if (data.media_type === 'image') {
                setImgUrl(data.url);
                setMediaType(data.media_type);
                setTitle(data.title);
                console.log("Données récupérées depuis le cache local");
            } else {
                // Si c'est une vidéo dans le cache, on affiche l'image par défaut
                setImgUrl('/fallback.webp');
                setMediaType('image');
                setTitle('Image par défaut');
                console.log("Vidéo trouvée dans le cache, image par défaut utilisée");
            }
        } else {
            // Sinon, on effectue l'appel API
            const fetchAPOD = async () => {
                console.log("Appel API de la photo du jour effectué");
                const API_KEY = import.meta.env.VITE_API_KEY;
                try {
                    const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
                    const url = response.data.url;
                    const media_type = response.data.media_type;
                    const title = response.data.title;

                    // Si l'élément est une image, on met à jour l'état
                    if (media_type === 'image') {
                        setImgUrl(url);
                        setMediaType(media_type);
                        setTitle(title);
                    } else {
                        // Sinon, on affiche une image par défaut
                        setImgUrl('/fallback.webp');
                        setMediaType('image');
                        setTitle('Image par défaut');
                    }

                    // Enregistre les données dans sessionStorage
                    sessionStorage.setItem("apodData", JSON.stringify({
                        url,
                        media_type,
                        title,
                    }));

                } catch (error) {
                    console.error('Erreur lors de la récupération des données :', error);
                    setImgUrl('/fallback.webp');
                    setMediaType('image');
                    setTitle('Image par défaut');
                    setError(error.message);
                }
            };
            fetchAPOD();
        }
    }, []);

    return { imgUrl, title, error };
};

export default FetchAPOD;