import React from 'react';
import './CardHeader.css';

const CardHeader = ({ cardData }) => {
  return (
    <span className='card-header'>
      {cardData.name}
    </span>
  );
};

export default CardHeader;
