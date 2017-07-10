import React from 'react';
import { shape, string } from 'prop-types';
import './CardData.css';

const PeopleCardData = ({ cardData }) => {
  return (
    <div className='people-card-data'>
      <p className='card-data'>Name: <span className='name'>{cardData.name}</span></p>
      <p className='card-data'>Homeworld: <span className='homeworld'>{cardData.homeworld_name}</span></p>
      <p className='card-data'>Species: <span className='species'>{cardData.species_name}</span></p>
      <p className='card-data'>Homeworld Pop: <span className='homeworld-population'>{cardData.homeworld_population}</span></p>
    </div>
  );
};

const cardData = shape({
  name: string,
  data_type: string,
  homeworld_name: string,
  homeworld_population: string,
  species_name: string,
});

PeopleCardData.propType = {
  cardData,
};

export default PeopleCardData;
