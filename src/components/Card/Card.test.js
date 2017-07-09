import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

const peopleCardData = { data_type: 'person' };
const planetCardData = { data_type: 'planet' };
const vehicleCardData = { data_type: 'vehicle' };

it('renders a container element', () => {
  const dom = shallow(<Card cardData={ peopleCardData }/>);

  expect(dom.find('.card')).toHaveLength(1);
});

it('renders a CardHeader', () => {
  const dom = shallow(<Card cardData={ peopleCardData }/>);

  expect(dom.find('CardHeader')).toHaveLength(1);
});

it('renders a PeopleCardData component appropriately', () => {
  const dom = shallow(<Card cardData={ peopleCardData }/>);

  expect(dom.find('PeopleCardData')).toHaveLength(1);
});

it('renders a PlanetCardData component appropriately', () => {
  const dom = shallow(<Card cardData={ planetCardData }/>);

  expect(dom.find('PlanetCardData')).toHaveLength(1);
});

it('renders a VehicleCardData component appropriately', () => {
  const dom = shallow(<Card cardData={ vehicleCardData }/>);

  expect(dom.find('VehicleCardData')).toHaveLength(1);
});
