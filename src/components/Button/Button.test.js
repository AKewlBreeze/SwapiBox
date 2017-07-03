import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

it('renders a container element', () => {
  const dom = shallow(<Button />);

  expect(dom.find('.btn-dataview')).toHaveLength(1);
});
