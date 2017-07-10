import React from 'react';
import { string, func, array } from 'prop-types';
import './FavButton.css';

const FavButton = ({ favoritesCount, type, handleClick }) => {
  return (
    <div>

      <button className='btn-favorite-view' onClick={() => handleClick(type)}>
        Favorites: {favoritesCount}
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
