import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header';
import NavigationDesktop from '../NavigationDesktop/NavigationDesktop';
import NavigationMobile from '../NavigationMobile/NavigationMobile';

describe('HomePage', () => {
  it('displays link to home page', () => {
    const wrapper = shallow(<Header myList={{}} />);

    expect(wrapper.find('Link').at(0).prop('to')).toBe('/');
  });

  it('displays mobile and desktop navigation', () => {
    const wrapper = shallow(<Header myList={{}} />);

    expect(wrapper.find(NavigationDesktop)).toHaveLength(1);
    expect(wrapper.find(NavigationMobile)).toHaveLength(1);
  });

  // it('display number of warriors on my list on my list link', () => {
  //   const wrapper = mount(
  //     <MemoryRouter initialEntries={['/']}>
  //       <Header myList={warriorsMock} />
  //     </MemoryRouter>,
  //   );

  //   expect(
  //     wrapper.find('.header__list-counter').at(0).text(),
  //   ).toContain('3');
  // });
});
