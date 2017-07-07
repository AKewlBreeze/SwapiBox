import React from 'react';
import './Card.css';
import CardHeader from '../CardHeader/CardHeader';
import PeopleCardData from '../CardData/PeopleCardData';
import PlanetCardData from '../CardData/PlanetCardData';
import VehicleCardData from '../CardData/VehicleCardData';


const Card = ({ cardData, handleFavorite, favorites}) => {
  // console.log('data for card display', cardData);
  // TODO logic goes here to decide what card detail to render

  // console.log(cardData.data_type);

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
