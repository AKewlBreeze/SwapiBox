import React from 'react';
import { shape, string, func, array } from 'prop-types';
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
      <button className='btn-add-favorite' onClick={() => handleFavorite(cardData)}> {buttonName} </button>
    </span>
  );
};

const cardData = shape({
  name: string,
  data_type: string,
});

CardHeader.propType = {
  cardData,
  handleFavorite: func,
  favorites: array,
};

export default CardHeader;
