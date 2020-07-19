import React from 'react';
import { shallow } from 'enzyme';
import HomePage from './HomePage';
import Warriors from '../../components/Warriors/Warriors';

describe('HomePage', () => {
  it('display Warriors', () => {
    const wrapper = shallow(<HomePage />);

    expect(wrapper.find(Warriors)).toHaveLength(1);
  });

  it('has link that scroll page to warriors', () => {
    const wrapper = shallow(<HomePage />);

    expect(wrapper.find('Link').at(0).prop('to')).toBe('warrior');
  });
});
