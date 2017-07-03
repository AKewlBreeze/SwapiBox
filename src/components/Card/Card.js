import React from 'react';
import './Card.css';
import CardHeader from '../CardHeader/CardHeader';
import CardData from '../CardData/CardData';


const Card = () => {
  return (
    <div className='card'>
      <CardHeader />
      <CardData />
    </div>
  );
};

export default Card;
