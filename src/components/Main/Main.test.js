import React from 'react';
import { shallow } from 'enzyme';
import Main from './Main';

const favorites = [];

it('renders container elements', () => {
  const dom = shallow(<Main favorites={favorites}/>);

  expect(dom.find('.main-container')).toHaveLength(1);
  expect(dom.find('.title')).toHaveLength(1);
  expect(dom.find('.buttons-container')).toHaveLength(1);
});

it('renders a FavButton component', () => {
  const dom = shallow(<Main favorites={favorites}/>);

  expect(dom.find('FavButton')).toHaveLength(1);
});

it('renders 3 buttons', () => {
  const dom = shallow(<Main favorites={favorites}/>);

  expect(dom.find('Button')).toHaveLength(3);
});

it('renders a DataView component', () => {
  const dom = shallow(<Main favorites={favorites}/>);

  expect(dom.find('DataView')).toHaveLength(1);
});
