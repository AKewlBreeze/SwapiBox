import React from 'react';
import './FavButton.css';

const FavButton = ({ favorites }) => {
  return (
    <div>
      <button className='btn-favorite'>
        Favorites {favorites.length}
      </button>
    </div>
  );
};

export default FavButton;
