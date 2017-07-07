import React from 'react';
import './CardHeader.css';

const CardHeader = ({ data }) => {
  return (
    <span className='card-header'>
      {data.name}
    </span>
  );
};

export default CardHeader;
