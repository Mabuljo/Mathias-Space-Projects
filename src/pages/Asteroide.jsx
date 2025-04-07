import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Asteroide = () => {

    const [asteroides, setAsteroides] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAsteroids = async() => {
            const today = getToday(); // Obtenir la date du jour
            const API_KEY = import.meta.env.VITE_API_KEY;

            // Vérifier si les données du jour sont déjà en cache
            const cachedAsteroidData = sessionStorage.getItem(`asteroids_${today}`);
            if (cachedAsteroidData) {
                // Charger les données du cache
                setAsteroides(JSON.parse(cachedAsteroidData));
                setLoading(false);
                return; // Ne pas faire d'appel API
            }

            try {
                // Faire une requête à l'API si les données ne sont pas en cache
                const response = await axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${today}&end_date=${today}&api_key=${API_KEY}`);

                const data = response.data.near_earth_objects[today];
                setAsteroides(data);

                // Sauvegarder les données dans le cache
                sessionStorage.setItem(`asteroids_${today}`, JSON.stringify(data));
                
            } catch (error){
                setError(`Erreur lors du chargement des données: ${error.message}`)
            } finally {
                setLoading(false);
            }
        };
        fetchAsteroids();
    }, []);

    const getToday = () => {
        const today = new Date();
        return today.toISOString().split("T")[0]; // Format 'YYYY-MM-DD'
      };

    return (
        <div>
            <Header />
            <main className='asteroides'>
                <h1>Astéroïdes proches de la Terre aujourd'hui</h1>
                {loading && <p><i className="fa-solid fa-spinner"></i> Chargement...</p>}
                {error && <p>{error}</p>}
                <div className='asteroides_content'>
                    {asteroides.map((asteroid) => (
                    <div key={asteroid.id} className='asteroid'>
                        <h2>Nom: {asteroid.name}</h2>
                        <p><i className="fa-solid fa-star"></i> Diamètre estimé : {asteroid.estimated_diameter.meters.estimated_diameter_min.toFixed(2)} m</p>
                        <p><i className="fa-solid fa-star"></i> Dangerosité : {asteroid.is_potentially_hazardous_asteroid ? "Oui" : "Non"}</p>
                        <p><i className="fa-solid fa-star"></i> Distance en km : {parseFloat(asteroid.close_approach_data[0].miss_distance.kilometers).toFixed(0)} km</p>
                        <p><i className="fa-solid fa-star"></i> Distance :  {(parseFloat(asteroid.close_approach_data[0].miss_distance.kilometers)/25902068371.2).toFixed(0)} jour/lumière</p>
                        <p><i className="fa-solid fa-star"></i> Vitesse :{parseFloat(asteroid.close_approach_data[0].relative_velocity.kilometers_per_hour).toFixed(2)} km/h</p>
                        <p><i className="fa-solid fa-star"></i>Temps approximatif de collision : {(parseFloat(asteroid.close_approach_data[0].miss_distance.kilometers)/ parseFloat(asteroid.close_approach_data[0].relative_velocity.kilometers_per_hour)/24).toFixed(2)} jours</p>
                    </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Asteroide;