import React from 'react';
import './CardData.css';

const VehicleCardData = ({ cardData }) => {
  return (
    <div className='vehicle-card-data'>
      <p className='card-data'>Name: <span className='name'>{cardData.name}</span></p>
      <p className='card-data'>Model: <span className='model'>{cardData.model}</span></p>
      <p className='card-data'>Class: <span className='vehicle-class'>{cardData.vehicle_class}</span></p>
      <p className='card-data'>Passengers: <span className='passengers'>{cardData.passengers}</span></p>
    </div>
  );
};

export default VehicleCardData;
