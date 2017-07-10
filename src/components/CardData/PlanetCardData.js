import React from 'react';
import { shape, string, array } from 'prop-types';
import './CardData.css';

const PlanetCardData = ({ cardData }) => {
  // TODO iterate resident names for display

  return (
    <div className='planet-card-data'>
      <p className='card-data'>Name: <span className='name'>{cardData.name}</span></p>
      <p className='card-data'>Terrain: <span className='terrain'>{cardData.terrain}</span></p>
      <p className='card-data'>Population: <span className='population'>{cardData.population}</span></p>
      <p className='card-data'>Climate: <span className='climate'>{cardData.climate}</span></p>
      <p className='card-data'>Residents: <span className='residents'>{cardData.resident_names}</span></p>
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
