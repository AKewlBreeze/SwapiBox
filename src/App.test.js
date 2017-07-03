import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('starts with a default state', () => {
  const dom = shallow(<App/>);

  expect(dom.state().favorites).toEqual([]);
  expect(dom.state().scrollFilm).toEqual({});
  expect(dom.state().isDevMode).toEqual(true);
});
