import React from 'react';
import './CardData.css';

const PeopleCardData = ({ cardData }) => {
  console.log('card being displayed', cardData);
  return (
    <div className='people-card-data'>
      <p>Name: {cardData.name}</p>
      <p>Homeworld: {cardData.homeworld_name}</p>
      <p>Species: {cardData.species_name}</p>
      <p>Homeworld Pop: {cardData.homeworld_population}</p>
      
    </div>
  );
};

export default PeopleCardData;
