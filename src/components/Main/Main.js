import React from 'react';
import { shape, func, array } from 'prop-types';
import FavButton from '../FavButton/FavButton';
import Button from '../Button/Button';
import DataView from '../DataView/DataView';
import './Main.css';

const Main = ({ favorites, currentData, handleClick, handleFavorite }) => {
  return (
    <div className='main-container'>
      <div className='title'>
        <h1>SWAPI-Box</h1>
        <FavButton favoritesCount={favorites.length} type='favorites' handleClick={handleClick} />
      </div>
      <div className='buttons-container'>
        <Button type='people' handleClick={handleClick} />
        <Button type='planets' handleClick={handleClick} />
        <Button type='vehicles' handleClick={handleClick} />
      </div>
      <DataView currentData={currentData} handleFavorite={handleFavorite} favorites={favorites}/>
    </div>
  );
};

const currentData = shape({
  results: array,
});

Main.propType = {
  favorites: array,
  currentData,
  handleClick: func,
  handleFavorite: func,
};

export default Main;
