import React from 'react';
import { shallow } from 'enzyme';
import CardData from './CardData';
import PeopleCardData from './CardData';
import PlanetCardData from './CardData';
import VehicleCardData from './CardData';

describe('CardData testing',()=>{

it('renders a container element', () => {
  const dom = shallow(<CardData />);

  expect(dom.find('.card-data')).toHaveLength(1);
});

it("has a class of PeopleCardData", () => {
    const mockClick = jest.fn();
    const wrapper = shallow(
      <PeopleCard data={mockPeople} addFavorite={mockClick} favorites={[]} />
    );

    expect(wrapper.find(".people-card-data").length).toBe(1);
  });

    it("has a class of PlanetCardData", () => {
        const mockClick = jest.fn();
        const wrapper = shallow(
          <PlanetCardData  />
        );

        expect(wrapper.find(".planet-card-data").length).toBe(1);
      });

      it("has a class of VehicleCardData", () => {
          const mockClick = jest.fn();
          const wrapper = shallow(
            <VehicleCardData  />
          );

          expect(wrapper.find(".vehicle-card-data").length).toBe(1);
        });



  it("evaluates the number of card elements ", () => {
    const mockClick = jest.fn();
    const wrapper = shallow(
      <PeopleCard data={mockPeople} addFavorite={mockClick} favorites={[]} />
    );

    expect(wrapper.find("p").length).toBe(4);
  });

  it("checks to see that favorites function has been called", () => {
    const mockClick = jest.fn();
    const wrapper = shallow(
      <PeopleCard data={mockPeople} addFavorite={mockClick} favorites={[]} />
    );

    const button = wrapper.find(".peopleCardInfo").children().first();
    button.simulate("click");
    expect(mockClick).toBeCalled();
  });


});
