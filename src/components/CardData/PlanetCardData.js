import React from 'react';
import './CardData.css';

const PlanetCardData = ({ cardData }) => {
  // TODO iterate resident names for display
  console.log(cardData.resident_names);

  return (
    <div className='planet-card-data'>
      <p>Name: {cardData.name}</p>
      <p>Terrain: {cardData.terrain}</p>
      <p>Population: {cardData.population}</p>
      <p>Climate: {cardData.climate}</p>
      <p>Residents: {cardData.resident_names}</p>
    </div>
  );
};

export default PlanetCardData;
