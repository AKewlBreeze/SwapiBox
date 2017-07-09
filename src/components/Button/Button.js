import React from 'react';
import { string, func } from 'prop-types';
import './Button.css';

const Button = ({ type, handleClick }) => {
  return (
    <div className='btn-dataview'>
      <button className='btn-data' onClick={() => handleClick(type)}> {type} </button>
    </div>
  );
};

Button.propTypes = {
  type: string,
  handleClick: func,
};

export default Button;
