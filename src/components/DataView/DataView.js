import React from 'react';
import './DataView.css';
import Card from '../Card/Card';

const DataView = ({ currentData }) => {
  console.log('currentData in DataView', currentData);
  return (
    <div className='card-container'>
      <Card />
    </div>
  );
};

export default DataView;
