import React from 'react';
import './Button.scss';

const Button = ({ type, handleClick }) => {
  return (
    <div className='btn-dataview'>
      <button className='btn-data' onClick={() => handleClick(type)}> {type} </button>
    </div>
  );
};

export default Button;
