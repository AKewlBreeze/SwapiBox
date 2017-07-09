import React from 'react';
import fetchMock from 'fetch-mock';
import { shallow } from 'enzyme';
import FavButton from './FavButton';

describe('FavButton test', () => {
  const mockedFn = jest.fn();
  const type = 'people';

  it('renders a container element', () => {
    const dom = shallow(<FavButton />);

    expect(dom.find('.btn-favorite')).toHaveLength(1);
  });


  it('has a button', () => {
    const dom = shallow(
      <FavButton favoritesCount={[]}
        type={ type }
        handleClick={ mockedFn }/>,
      );
    const button = dom.find('.btn-favorite');
    button.simulate('click');

    expect(mockedFn).toHaveBeenCalledTimes(1);
    expect(mockedFn).toHaveBeenCalledWith(type);
  });
});
