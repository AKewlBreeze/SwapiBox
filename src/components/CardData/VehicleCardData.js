import React from 'react';
import './CardData.css';

const VehicleCardData = ({ cardData }) => {
  return (
    <div className='vehicle-card-data'>
      <p>Name: {cardData.name}</p>
      <p>Model: {cardData.model}</p>
      <p>Class: {cardData.vehicle_class}</p>
      <p>Passengers: {cardData.passengers}</p>
    </div>
  );
};

export default VehicleCardData;
