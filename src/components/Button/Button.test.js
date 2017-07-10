import React from 'react';
import fetchMock from 'fetch-mock';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button test', () => {
  const mockedFn = jest.fn();
  const type = 'PEOPLE';

  it('renders a container element', () => {
    const dom = shallow(<Button />);

    expect(dom.find('.btn-dataview')).toHaveLength(1);
  });

  it('renders a button', () => {
    const dom = shallow(
      <Button type={ type } handleClick={ mockedFn }/>);
    const button = dom.find('.btn-data');

    expect(button).toHaveLength(1);
    button.simulate('click');
    expect(mockedFn).toHaveBeenCalledTimes(1);
    expect(mockedFn).toHaveBeenCalledWith(type);
  });
});
