import React from 'react';
import { shallow } from 'enzyme';
import CardHeader from './CardHeader';

const cardData = { name: 'Luke' };
const favorites1 = [{ name: 'Luke' }];
const favorites2 = [{ name: 'Han Solo' }];

it('renders a container element', () => {
  const dom = shallow(
    <CardHeader
      cardData={ cardData }
      favorites={ favorites1 }/>,
  );

  expect(dom.find('.card-header')).toHaveLength(1);
});

it('renders a button', () => {
  const dom = shallow(
    <CardHeader
      cardData={ cardData }
      favorites={ favorites1 }/>,
  );

  const button = dom.find('.btn-add-favorite');
  expect(button).toHaveLength(1);
});

it('renders a Favorite button if the card is not favorited', () => {
  const dom = shallow(
    <CardHeader
      cardData={ cardData }
      favorites={ favorites1 }/>,
  );

  const button = dom.find('.btn-add-favorite');
  expect(button).toHaveLength(1);
});
