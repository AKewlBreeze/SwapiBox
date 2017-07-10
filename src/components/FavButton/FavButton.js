import React from 'react';
import './FavButton.css';

const FavButton = ({ favoritesCount, type, handleClick }) => {
  return (
    <div>

      <button className='btn-favorite-view' onClick={() => handleClick(type)}>
        Favorites: {favoritesCount}
() => handleClick(type)}>Favorites: {favoritesCount}
      </button>
    </div>
  );
};

export default FavButton;
