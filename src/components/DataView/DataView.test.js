import React from 'react';
import { shallow } from 'enzyme';
import DataView from './DataView';

it('renders a container element', () => {
  const dom = shallow(<DataView />);

  expect(dom.find('.card-container')).toHaveLength(1);
});
