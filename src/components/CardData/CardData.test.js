import React from 'react';
import { shallow } from 'enzyme';
import CardData from './CardData';

it('renders a container element', () => {
  const dom = shallow(<CardData />);

  expect(dom.find('.card-data')).toHaveLength(1);
});
