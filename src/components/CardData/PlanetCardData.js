import React from 'react';
import './CardData.css';

const PlanetCardData = ({ cardData }) => {
  // TODO iterate resident names for display

  return (
    <div className='planet-card-data'>
      <p>{cardData.name}</p>
      <p>{cardData.terrain}</p>
      <p>{cardData.population}</p>
      <p>{cardData.climate}</p>
      <p>{cardData.resident_names}</p>
    </div>
  );
};

export default PlanetCardData;
