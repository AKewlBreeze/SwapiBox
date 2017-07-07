import React from 'react';
import FavButton from '../FavButton/FavButton';
import Button from '../Button/Button';
import DataView from '../DataView/DataView';
import './Main.css';

const Main = ({ favorites, currentData, handleClick, handleFavorite }) => {
  return (
    <div className='main-container'>
      <div className='title'>
        <p>SWAPI-Box</p>
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

export default Main;
