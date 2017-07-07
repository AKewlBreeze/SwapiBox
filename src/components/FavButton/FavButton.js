import React from 'react';
import './FavButton.css';

const FavButton = ({ favorites, type, handleClick }) => {
  return (
    <div>
      <button className='btn-favorite' onClick={() => handleClick(type)}>
        Favorites {favorites.length}
      </button>
    </div>
  );
};

export default FavButton;
