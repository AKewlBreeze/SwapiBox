import React from 'react';
import { shape, func, array } from 'prop-types';
import Card from '../Card/Card';
import './DataView.css';

const DataView = ({ currentData, handleFavorite, favorites }) => {
  console.log('currentData in DataView', currentData);

  let results = [];
  if (currentData) {
    results = currentData.results.map(card =>
      <Card key={Math.round(Date.now() * Math.random())}
        cardData={card}
        handleFavorite={handleFavorite}
        favorites={favorites}/>);
  }

  return (
    <div className='card-container'>
        { results }
    </div>
  );
};

const currentData = shape({
  results: array,
});

DataView.propType = {
  currentData,
  handleFavorite: func,
  favorites: array,
};

export default DataView;
