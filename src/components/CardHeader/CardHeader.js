import React from 'react';
import './CardHeader.css';

const CardHeader = ({ cardData, handleFavorite, favorites }) => {
  const exists = favorites.find((element) => {
    return element.name === cardData.name;
  });
  let buttonName;
  if (exists !== undefined) {
    buttonName = 'unfavorite';
  } else {
    buttonName = 'favorite';
  }


  return (
    <span className='card-header'>
      {cardData.name}
      <button className = 'favorites-add' onClick={() => handleFavorite(cardData)}> {buttonName} </button>
    </span>
  );
};

export default CardHeader;
