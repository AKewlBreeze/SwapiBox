import React from 'react';
import { shape, string, array } from 'prop-types';
import './CardData.css';

const PlanetCardData = ({ cardData }) => {
  // TODO iterate resident names for display

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

const cardData = shape({
  name: string,
  data_type: string,
  terrain: string,
  population: string,
  climate: string,
  resident_names: array,
});


PlanetCardData.propType = {
  cardData,
};

export default PlanetCardData;
