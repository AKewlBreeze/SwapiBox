import React from 'react';
import './Button.css';

const Button = ({type, handleClick}) => {
  return (
    <div className='btn-dataview'>
      <button onClick={()=> handleClick(type)}> Button </button>
    </div>
  );
};

export default Button;
