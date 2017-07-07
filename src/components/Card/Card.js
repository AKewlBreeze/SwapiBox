import React from 'react';
import './Card.css';
import CardHeader from '../CardHeader/CardHeader';

const Card = ({ data }) => {
  console.log('data for card display', data);
  // TODO logic goes here to decide what card detail to render

  return (
    <div className='card'>
      <CardHeader data={data}/>
      {/* <CardData data={data}/> */}
    </div>
  );
};

export default Card;
