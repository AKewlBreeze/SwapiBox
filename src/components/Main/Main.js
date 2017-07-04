import React from 'react';
import './Main.css';
import FavButton from '../FavButton/FavButton.js';
import Button from '../Button/Button.js';
import DataView from '../DataView/DataView.js';

const Main = ({favorites})=>{
  return(
    <div>
      Inside Main
      <FavButton favorites={favorites}/>
      <Button />
      <Button />
      <Button />
      <DataView />
    </div>
  )
}

export default Main;
