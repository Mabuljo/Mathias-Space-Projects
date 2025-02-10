import React, { useEffect, useState } from 'react';
import Launch from '../components/Launch';
import Header from '../components/Header';
import axios from 'axios';
import Footer from '../components/Footer';

const Lancements = () => {
    const [launches, setLaunches] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const cachedLaunches = sessionStorage.getItem("launches");

        if (cachedLaunches) {
            // Si les données sont déjà en cache, on les utilise directement
            setLaunches(JSON.parse(cachedLaunches));
            setLoading(false);
        } else {
            const fetchLaunches = async () => {
                const today = new Date().toISOString(); // Date actuelle au format ISO
                const url = `https://ll.thespacedevs.com/2.3.0/launches/upcoming/?format=json&window_start=${today}&limit=10`;
                
                try {
                    const response = await axios.get(url);
                    console.log('Données récupérées :', response.data.results);
                    setLaunches(response.data.results);
                    
                    // Stocker les données dans sessionStorage
                    sessionStorage.setItem("launches", JSON.stringify(response.data.results));
                } catch (error) {
                    console.error('Erreur lors de la récupération des données :', error);
                    setError('Erreur lors du chargement des données');
                } finally {
                    setLoading(false);
                }
            };

            fetchLaunches();
        }
    }, []);

    return (
        <div>
            <Header />
            <main>
                <h1>Prochains Lancements</h1>
                {loading && <p><i className="fa-solid fa-spinner"></i> Chargement...</p>}
                {error && <p>{error}</p>}
                <div className='lancements'>
                    {launches.map((launch) =>(
                    <Launch key={launch.id} launch={launch}/>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Lancements;