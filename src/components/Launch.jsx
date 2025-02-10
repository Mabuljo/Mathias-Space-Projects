import React from 'react';

const Launch = ({launch}) => {
    return (
        <div className='card-launch' key={launch.id}>
            {launch.image && <img className='img-launch' src={launch.image.image_url} alt={launch.name} />}
            <div className='launch'>
                <h2>{launch.name}</h2>
                <p>Date : {new Date(launch.net).toLocaleString()}</p>
                <p>Lieu : {launch.pad.location.name} ({launch.pad.location.country_code})</p>
                <p>Mission : {launch.mission.name}</p>
                <p>Type de la mission : {launch.mission.type}</p>
                <p>Description : {launch.mission.description}</p>
            </div>
        </div>
    );
};

export default Launch;