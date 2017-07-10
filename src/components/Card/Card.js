import React from 'react';
import { shape, string, func, array } from 'prop-types';
import CardHeader from '../CardHeader/CardHeader';
import PeopleCardData from '../CardData/PeopleCardData';
import PlanetCardData from '../CardData/PlanetCardData';
import VehicleCardData from '../CardData/VehicleCardData';
import './Card.css';


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

const cardData = shape({
  name: string,
  data_type: string,
});

Card.propType = {
  cardData,
  handleFavorite: func,
  favorites: array,
};

export default Card;
