import React from 'react';
import { shallow } from 'enzyme';
import { NavigationDesktop } from './NavigationDesktop';
import NavigationLinks from '../NavigationLinks/NavigationLinks';

describe('NavigationDesktop', () => {
  it('displays navigation links', () => {
    const wrapper = shallow(<NavigationDesktop listCount={0} />);

    expect(wrapper.find(NavigationLinks)).toHaveLength(1);
  });
});
