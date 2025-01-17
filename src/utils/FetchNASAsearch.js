import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchNASAsearch = (query) => {
    const [results, setResults]= useState([]);
    const [loading, setLoading]= useState(false);
    const [error, setError]= useState(null);

    useEffect(() => {
        if (!query) {
            setResults([]); // Si la recherche est vide, les résultats sont réinitialisés à [].
            return;
        }

        const fetchResults = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get(`https://images-api.nasa.gov/search?q=${query}&media_type=image,video`);
                
                const items = response.data.collection.items; // Données brutes de l'API
                setResults(items);
            } catch (error) {
                setError("Une erreur s'est produite lors de la recherche.")
                console.error('Erreur lors de la récupération des données:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchResults();

    }, [query]); // // Re-exécute la recherche uniquement si `query` change

    return {results, loading, error};
};

export default FetchNASAsearch;