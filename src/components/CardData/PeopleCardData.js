import React from 'react';
import { shape, string } from 'prop-types';
import './CardData.css';

const PeopleCardData = ({ cardData }) => {
  return (
    <div className='people-card-data'>
      <p>Name: {cardData.name}</p>
      <p>Homeworld: {cardData.homeworld_name}</p>
      <p>Species: {cardData.species_name}</p>
      <p>Homeworld Pop: {cardData.homeworld_population}</p>
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
