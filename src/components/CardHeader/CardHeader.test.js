import React from 'react';
import { shallow } from 'enzyme';
import CardHeader from './CardHeader';

it('renders a container element', () => {
  const dom = shallow(<CardHeader />);

  expect(dom.find('.card-header')).toHaveLength(1);
});
