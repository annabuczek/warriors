import React from 'react';
import { shallow } from 'enzyme';
import { NavigationMobile } from './NavigationMobile';
import NavigationLinks from '../NavigationLinks/NavigationLinks';

describe('NavigationMobile', () => {
  it('displays navigation links', () => {
    const wrapper = shallow(<NavigationMobile listCount={0} />);

    expect(wrapper.find(NavigationLinks)).toHaveLength(1);
  });
});
