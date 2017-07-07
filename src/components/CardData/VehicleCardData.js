import React from 'react';
import './CardData.css';

const VehicleCardData = ({ cardData }) => {
  return (
    <div className='vehicle-card-data'>
      <p>{cardData.name}</p>
      <p>{cardData.model}</p>
      <p>{cardData.class}</p>
      <p>{cardData.passengers}</p>
    </div>
  );
};

export default VehicleCardData;
