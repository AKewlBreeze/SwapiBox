import React from 'react';
import './Card.css';
import CardHeader from '../CardHeader/CardHeader';
import PeopleCardData from '../CardData/PeopleCardData';
import PlanetCardData from '../CardData/PlanetCardData';
import VehicleCardData from '../CardData/VehicleCardData';


const Card = ({ cardData, handleFavorite, favorites }) => {
  let renderCard;
  switch (cardData.data_type) {
    case 'person':
      renderCard = <PeopleCardData cardData={cardData} />;
      break;
    case 'planet':
      renderCard = <PlanetCardData cardData={cardData} />;
      break;
    case 'vehicle':
      renderCard = <VehicleCardData cardData={cardData} />;
      break;
    default:
      break;
  }

  return (
    <div className='card'>
      <CardHeader cardData={cardData} handleFavorite={handleFavorite} favorites={favorites}/>
      {renderCard}
    </div>
  );
};

export default Card;
