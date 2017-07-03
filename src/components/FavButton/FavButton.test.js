import React from 'react';
import { shallow } from 'enzyme';
import FavButton from './FavButton';

it('renders container elements', () => {
  const dom = shallow(<FavButton favorites={[]}/>);

  expect(dom.find('.btn-favorite')).toHaveLength(1);
});

it('renders a button with 0 favorites count', () => {
  const dom = shallow(<FavButton favorites={[]}/>);

  expect(dom.find('.btn-favorite').text()).toEqual('Favorites 0');
});

it('renders a button with > 0 favorites count', () => {
  const dom = shallow(<FavButton favorites={[{}, {}]}/>);

  expect(dom.find('.btn-favorite').text()).toEqual('Favorites 2');
});
