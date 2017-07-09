import React from 'react';
import Button from './Button';
import fetchMock from 'fetch-mock'
import { shallow } from 'enzyme';

describe('Button test', () =>{
  let mockFn = jest.fn()

it('renders a container element', () => {
  const dom = shallow(<Button />);

  expect(dom.find('.btn-dataview')).toHaveLength(1);
});


it('has a button', () =>{
  const mockFn = jest.fn()
  const dom = shallow(<Button buttonClick = {mockFn}/>)
  const buttonFound = dom.find('.btn-dataview').first()
  buttonFound.simulate('click')

  expect(mockFn).toBeCalled()
})


it('should render three buttons', () =>{
    let mockFn = jest.fn()
    const dom = shallow(<Controls onClick = {() => mockFn}/>)

    expect(wrapper.find('button').length).toEqual(3);

  })

});
