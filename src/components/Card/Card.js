import React from 'react';
import './Card.css';
import CardHeader from '../CardHeader/CardHeader';
import PeopleCardData from '../CardData/PeopleCardData';
import PlanetCardData from '../CardData/PlanetCardData';
import VehicleCardData from '../CardData/VehicleCardData';


const Card = ({ cardData, handleFavorite, favorites }) => {
  let renderCard;
  let renderClassName;
  switch (cardData.data_type) {
    case 'person':
      renderCard = <PeopleCardData cardData={cardData} />;
      renderClassName = 'card people-card';
      break;
    case 'planet':
      renderCard = <PlanetCardData cardData={cardData} />;
      renderClassName = 'card planet-card';
      break;
    case 'vehicle':
      renderCard = <VehicleCardData cardData={cardData} />;
      renderClassName = 'card vehicle-card';
      break;
    default:
      break;
  }

  return (
    <div className={renderClassName}>
      <CardHeader cardData={cardData} handleFavorite={handleFavorite} favorites={favorites}/>
      {renderCard}
    </div>
  );
};

export default Card;
