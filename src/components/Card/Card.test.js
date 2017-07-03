import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

it('renders a container element', () => {
  const dom = shallow(<Card />);

  expect(dom.find('.card')).toHaveLength(1);
});

it('renders a CardHeader and a CardData component', () => {
  const dom = shallow(<Card />);

  expect(dom.find('CardHeader')).toHaveLength(1);
  expect(dom.find('CardData')).toHaveLength(1);
});
