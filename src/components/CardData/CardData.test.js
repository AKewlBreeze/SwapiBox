import React from 'react';
import { shallow } from 'enzyme';
import PeopleCardData from './PeopleCardData';
import PlanetCardData from './PlanetCardData';
import VehicleCardData from './VehicleCardData';

describe('PeopleCardData testing', () => {
  const cardData = {
    name: 'Luke',
    homeworld_name: 'Tatooine',
    homeworld_population: '20000',
    species_name: 'Human',
  };

  it('renders a container element', () => {
    const dom = shallow(<PeopleCardData cardData={ cardData }/>);

    expect(dom.find('.people-card-data')).toHaveLength(1);
  });

  it('renders a name', () => {
    const dom = shallow(<PeopleCardData cardData={ cardData }/>);

    expect(dom.find('.name').length).toBe(1);
    expect(dom.find('.name').text()).toEqual('Luke');
  });

  it('renders a homeworld', () => {
    const dom = shallow(<PeopleCardData cardData={ cardData }/>);

    expect(dom.find('.homeworld').length).toBe(1);
    expect(dom.find('.homeworld').text()).toEqual('Tatooine');
  });

  it('renders a species', () => {
    const dom = shallow(<PeopleCardData cardData={ cardData }/>);

    expect(dom.find('.species').length).toBe(1);
    expect(dom.find('.species').text()).toEqual('Human');
  });

  it('renders a homeworld population', () => {
    const dom = shallow(<PeopleCardData cardData={ cardData }/>);

    expect(dom.find('.homeworld-population').length).toBe(1);
    expect(dom.find('.homeworld-population').text()).toEqual('20000');
  });
});

describe('PlanetCardData testing', () => {
  const cardData = {
    name: 'Tatooine',
    terrain: 'desert',
    population: '20000',
    climate: 'windy, arid',
    residents: ['Luke', 'Obi-Wan'],
  };

  it('renders a container element', () => {
    const dom = shallow(<PlanetCardData cardData={ cardData }/>);

    expect(dom.find('.planet-card-data')).toHaveLength(1);
  });

  it('renders a name', () => {
    const dom = shallow(<PlanetCardData cardData={ cardData }/>);

    expect(dom.find('.name').length).toBe(1);
    expect(dom.find('.name').text()).toEqual('Tatooine');
  });

  it('renders a terrain', () => {
    const dom = shallow(<PlanetCardData cardData={ cardData }/>);

    expect(dom.find('.terrain').length).toBe(1);
    expect(dom.find('.terrain').text()).toEqual('desert');
  });
  it('renders a population', () => {
    const dom = shallow(<PlanetCardData cardData={ cardData }/>);

    expect(dom.find('.population').length).toBe(1);
    expect(dom.find('.population').text()).toEqual('20000');
  });
  it('renders a climate', () => {
    const dom = shallow(<PlanetCardData cardData={ cardData }/>);

    expect(dom.find('.climate').length).toBe(1);
    expect(dom.find('.climate').text()).toEqual('windy, arid');
  });
  it('renders a residents', () => {
    const dom = shallow(<PlanetCardData cardData={ cardData }/>);

    expect(dom.find('.residents').length).toBe(1);
    expect(dom.find('.residents').text()).toEqual('Luke, Obi-Wan');
  });
});

describe('VehicleCardData testing', () => {
  const cardData = {
    name: 'At-At',
    model: 'walker',
    vehicle_class: 'badass',
    passengers: '24',
  };

  it('renders a container element', () => {
    const dom = shallow(<VehicleCardData cardData={ cardData }/>);

    expect(dom.find('.vehicle-card-data')).toHaveLength(1);
  });

  it('renders a name', () => {
    const dom = shallow(<VehicleCardData cardData={ cardData }/>);

    expect(dom.find('.name').length).toBe(1);
    expect(dom.find('.name').text()).toEqual('At-At');
  });

  it('renders a model', () => {
    const dom = shallow(<VehicleCardData cardData={ cardData }/>);

    expect(dom.find('.model').length).toBe(1);
    expect(dom.find('.model').text()).toEqual('walker');
  });

  it('renders a vehicle class', () => {
    const dom = shallow(<VehicleCardData cardData={ cardData }/>);

    expect(dom.find('.vehicle-class').length).toBe(1);
    expect(dom.find('.vehicle-class').text()).toEqual('badass');
  });

  it('renders a passengers', () => {
    const dom = shallow(<VehicleCardData cardData={ cardData }/>);

    expect(dom.find('.passengers').length).toBe(1);
    expect(dom.find('.passengers').text()).toEqual('24');
  });
});
