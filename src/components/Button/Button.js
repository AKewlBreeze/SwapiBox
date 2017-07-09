import React from 'react';
import './Button.css';

const Button = ({ type, handleClick }) => {
  let renderStyle = 'btn-data';
  switch (type) {
    case 'people':
      renderStyle = 'btn-data btn-people';
      break;
    case 'planets':
      renderStyle = 'btn-data btn-planets';
      break;
    case 'vehicles':
      renderStyle = 'btn-data btn-vehicles';
      break;
    default:
      break;
  }

  return (
    <div className='btn-dataview'>
      <button className={renderStyle}
        onClick={() => handleClick(type)}> {type.toUpperCase()} </button>
    </div>
  );
};

export default Button;
