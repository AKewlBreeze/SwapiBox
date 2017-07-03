import React from 'react';
import FavButton from '../FavButton/FavButton';
import Button from '../Button/Button';
import DataView from '../DataView/DataView';
import './Main.css';

const Main = ({ favorites }) => {
  return (
    <div className='main-container'>
      <div className='title'>
        <p>SWAPI-Box</p>
        <FavButton favorites={favorites}/>
      </div>
      <div className='buttons-container'>
        <Button />
        <Button />
        <Button />
      </div>
      <DataView />
    </div>
  );
};

export default Main;
