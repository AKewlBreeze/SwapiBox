import React from 'react';
import fetchMock from 'fetch-mock';
import { shallow } from 'enzyme';
import FavButton from './FavButton';

describe('FavButton test', () => {
  const mockedFn = jest.fn();
  const type = 'people';

  it('renders a container element', () => {
    const dom = shallow(<FavButton />);

    expect(dom.find('.btn-favorite-view')).toHaveLength(1);
  });

  it('renders a button', () => {
    const dom = shallow(
      <FavButton favoritesCount={2}
        type={ type }
        handleClick={ mockedFn }/>,
      );
    const button = dom.find('.btn-favorite-view');
    expect(button).toHaveLength(1);
    button.simulate('click');

    expect(mockedFn).toHaveBeenCalledTimes(1);
    expect(mockedFn).toHaveBeenCalledWith(type);
  });

  it('renders a favorite count in the button', () => {
    const dom = shallow(
      <FavButton favoritesCount={2}
        type={ type }
        handleClick={ mockedFn }/>,
      );
    const button = dom.find('.btn-favorite-view');
    expect(button.text()).toEqual('Favorites: 2');
  });
});
