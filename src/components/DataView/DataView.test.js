import React from 'react';
import { shallow } from 'enzyme';
import DataView from './DataView';

const currentData = {
  results: [
    { name: 'Luke' },
    { name: 'Anakin' },
    { name: 'Chewbacca' },
    { name: 'Darth Vader' },
    { name: 'Han Solo' },
  ],
};

it('renders a container element', () => {
  const dom = shallow(<DataView />);

  expect(dom.find('.card-container')).toHaveLength(1);
});

it('renders 5 cards if 5 cards have been passed in', () => {
  const dom = shallow(
    <DataView
      currentData={ currentData }/>,
  );

  const cards = dom.find('Card');
  expect(cards.length).toEqual(5);
});
