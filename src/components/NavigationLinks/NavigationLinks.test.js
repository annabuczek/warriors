import React from 'react';
import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import NavigationLinks from './NavigationLinks';

describe('NavigationLinks', () => {
  it('displays navigation links', () => {
    const wrapper = shallow(<NavigationLinks listCount={0} />);

    expect(wrapper.text()).toContain('Moja Lista0Dodaj Wojownika');
  });

  it('displays number of warriors on my list on my list link', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <NavigationLinks listCount={3} />
      </MemoryRouter>,
    );

    expect(
      wrapper.find('.navigation-links__list-counter').at(0).text(),
    ).toContain('3');
  });
});
