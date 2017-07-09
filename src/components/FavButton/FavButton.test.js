import React from 'react';
import FavButton from './FavButton.js';
import fetchMock from 'fetch-mock'
import { shallow } from 'enzyme';

describe('FavButton test', () =>{
  let mockFn = jest.fn()

it('renders a container element', () => {
  const dom = shallow(<Button />);

  expect(dom.find('.btn-favorite')).toHaveLength(1);
});


it('has a button', () =>{
  const mockFn = jest.fn()
  const dom = shallow(<button onClick= {()=>{mockFn}}/>)
  const buttonFound = dom.find('.btn-favorite').first()
  buttonFound.simulate('click')

  expect(mockFn).toBeCalled()
})



});
