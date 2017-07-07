import React from 'react';
import './CardHeader.css';

const CardHeader = ({ cardData, handleFavorite }) => {
  return (
    <span className='card-header'>
      {cardData.name}
      <button onClick={() => handleFavorite(cardData)}> favorites </button>
    </span>
  );
};

export default CardHeader;
