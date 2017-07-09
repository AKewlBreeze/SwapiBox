import React from 'react';
import { string, func, array } from 'prop-types';
import './FavButton.css';

const FavButton = ({ favoritesCount, type, handleClick }) => {
  return (
    <div>
      <button className='btn-favorite' onClick={() => handleClick(type)}>
        My Favorites {favoritesCount}
      </button>
    </div>
  );
};

FavButton.propType = {
  favoritesCount: array,
  type: string,
  handleClick: func,
};

export default FavButton;
