import React from 'react';
import { shape, string, func, array } from 'prop-types';
import './CardHeader.css';

const CardHeader = ({ cardData, handleFavorite, favorites }) => {
  const exists = favorites.find((element) => {
    return element.name === cardData.name;
  });
  let buttonStyle;
  if (exists !== undefined) {
    buttonStyle = 'btn-favorite btn-favorite-active';
  } else {
    buttonStyle = 'btn-favorite btn-favorite-inactive';
  }

  return (
    <span className='card-header'>
      {cardData.name}
      <button className={buttonStyle} onClick={() => handleFavorite(cardData)} />
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
