import React from 'react';
import './DataView.css';
import Card from '../Card/Card';

const DataView = ({ currentData, handleFavorite, favorites}) => {
  console.log('currentData in DataView', currentData);

  let results = [];
  if (currentData) {
    results = currentData.results.map(card => <Card key={Math.round(Date.now()*Math.random())} cardData={card} handleFavorite={handleFavorite} favorites={favorites}/>);
  }

  return (
    <div className='card-container'>
        { results }
    </div>
  );
};

export default DataView;
