import React from 'react';
import { shallow } from 'enzyme';
import Scroll from './Scroll';

const scrollFilm = {
  opening_crawl: 'opening text is lit',
  title: 'Star Wars',
  release_date: '2013-05-10',
};

it('renders a container element', () => {
  const dom = shallow(<Scroll scrollFilm={scrollFilm}/>);

  expect(dom.find('.scroll-container')).toHaveLength(1);
});

it('renders the films properties', () => {
  const dom = shallow(<Scroll scrollFilm={scrollFilm}/>);

  expect(dom.find('.scroll-crawl').text()).toEqual('opening text is lit');
  expect(dom.find('.scroll-title').text()).toEqual('Star Wars');
  expect(dom.find('.scroll-release-date').text()).toEqual('2013-05-10');
});
