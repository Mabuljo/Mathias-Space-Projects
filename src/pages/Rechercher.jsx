import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import useNASAsearch from "../utils/FetchNASAsearch";
import Card from '../components/Card';

const Rechercher = () => {

    const [query, setQuery]= useState("");
    const {results, loading, error } = useNASAsearch(query); // Utilise le hook personnalisé

    const handleSearch = (e) => {
        e.preventDefault();
        const searchValue = e.target.search.value.trim(); // .trim() supprime les espaces inutiles
        setQuery(searchValue); // Met à jour la recherche
    };

    return (
        <div className='rechercher-main'>
            <Header />
            <main className='rechercher'>
                <h1>Explorez l'univers de la NASA</h1>
                <h2>Recherchez des images et vidéos d'étoiles, de planètes, et de galaxies incroyables.</h2>
                <div className='rechercher_content'>
                    <img src="nasa-logo.svg" alt="logo de la NASA" />
                    <form className='search_bar' onSubmit={handleSearch}>
                        <input type="text" name='search' className='search_text'placeholder="(ex. 'galaxy', 'planet')" />
                        <button className='search_icon' type='submit'><i className="fa-solid fa-magnifying-glass"></i></button>
                    </form>
                    <span className='search_info'>Entrez un terme en anglais</span>
                </div>
                <h3>Résultats :</h3>
                    {loading && <p><i className="fa-solid fa-spinner"></i> Chargement...</p>}
                    {error && <p>{error}</p>}
                    {query && results.length === 0 && !loading && !error && <p>Aucun résultat trouvé pour votre recherche.</p>}
                        <div className='api-results'>
                        {results.map((item) => (
                            <Card key={item.data[0]?.nasa_id} 
                            title={item.data[0]?.title.replace(/_/g, ' ')} 
                            image={item.links?.[0]?.href}  
                            link={`https://images.nasa.gov/details/${item.data[0]?.nasa_id}`}
                            newTab={true} />
                        ))}
                        </div>
            </main>
            <Footer />
        </div>
    );
};

export default Rechercher;