import React from 'react';
import './CardData.css';

const PlanetCardData = ({currentData}) => {
  if (currentData.results > 0) {
    const planetResults = currentData.results.map((planets)=>{
      console.log(planets);
      return (
        <div>
          <h1>{planets.results.name}</h1>
        </div>
      )
})
}
  return (
    <div className='planet-card-data'>
      <p>{}</p>
    </div>
  );
};

export default PlanetCardData;
