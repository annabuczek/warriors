import React from 'react';
import { shallow } from 'enzyme';
import NotFound from './NotFound';

describe('NotFound', () => {
  it('display 404', () => {
    const wrapper = shallow(<NotFound />);

    expect(wrapper.text()).toContain('404');
  });
});
