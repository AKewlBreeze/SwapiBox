import React from 'react';
import { shape, string } from 'prop-types';
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

const cardData = shape({
  name: string,
  data_type: string,
  model: string,
  vehicle_class: string,
  passengers: string,
});

VehicleCardData.propType = {
  cardData,
};

export default VehicleCardData;
