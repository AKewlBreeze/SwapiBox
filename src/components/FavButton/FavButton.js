import React from 'react';
import './FavButton.css';

const FavButton = ({ favoritesCount, type, handleClick }) => {
  return (
    <div>
      <button className='btn-favorite' onClick={() => handleClick(type)}>
        Favorites: {favoritesCount}
      </button>
    </div>
  );
};

export default FavButton;
