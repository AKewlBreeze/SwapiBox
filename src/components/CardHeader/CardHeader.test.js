import React from 'react';
import { shallow } from 'enzyme';
import CardHeader from './CardHeader';

const cardData = { name: 'Luke' };
const favorites1 = [{ name: 'Luke' }];
const favorites2 = [{ name: 'Han Solo' }];
const mockedFn = jest.fn();

it('renders a container element', () => {
  const dom = shallow(
    <CardHeader
      cardData={ cardData }
      favorites={ favorites1 }/>,
  );

  expect(dom.find('.card-header')).toHaveLength(1);
});

it('renders a Favorite button if the card is not favorited', () => {
  const dom = shallow(
    <CardHeader
      cardData={ cardData }
      favorites={ favorites1 }
      handleFavorite={ mockedFn }/>,
  );

  expect(dom.find('.btn-add-favorite')).toHaveLength(1);
  expect(dom.find('.btn-add-favorite').text()).toEqual(' unfavorite ');
});

it('renders a Unfavorite button if the card is favorited', () => {
  const dom = shallow(
    <CardHeader
      cardData={ cardData }
      favorites={ favorites2 }
      handleFavorite={ mockedFn }/>,
  );

  expect(dom.find('.btn-add-favorite')).toHaveLength(1);
  expect(dom.find('.btn-add-favorite').text()).toEqual(' favorite ');
});

it('has a favorite/unfavorite button that can be clicked', () => {
  const dom = shallow(
    <CardHeader
      cardData={ cardData }
      favorites={ favorites2 }
      handleFavorite={ mockedFn }/>,
  );

  const button = dom.find('.btn-add-favorite');
  expect(dom.find('.btn-add-favorite')).toHaveLength(1);
  button.simulate('click');
  expect(mockedFn).toHaveBeenCalledTimes(1);
  expect(mockedFn).toHaveBeenCalledWith(cardData);
});
