import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import { MyList } from './MyList';
import { click } from '../../testSupport/support';
import warriorsMock from '../../testSupport/mocks/warriorsMock.json';

describe('MyList', () => {
  const myList = warriorsMock;
  const removeWarriorFromMyList = jest.fn();

  it('display warriors', () => {
    const wrapper = shallow(
      <MyList
        myList={myList}
        removeWarriorFromMyList={removeWarriorFromMyList}
      />,
    );

    expect(wrapper.text()).toContain('Wojownik Stefan');
    expect(wrapper.text()).toContain('Wojowniczka Maria');
    expect(wrapper.text()).toContain('Wojowniczka Kasia');
  });

  it('removes warrior from my list when button clicked', () => {
    const wrapper = shallow(
      <MyList
        myList={myList}
        removeWarriorFromMyList={removeWarriorFromMyList}
      />,
    );

    click(wrapper.find('button').at(0));

    expect(removeWarriorFromMyList.mock.calls.length).toBe(1);
  });

  it('has link to redirect to warrior details', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/mylist']}>
        <MyList
          myList={myList}
          removeWarriorFromMyList={removeWarriorFromMyList}
        />
      </MemoryRouter>,
    );

    expect(wrapper.find('Link').at(0).prop('to')).toBe(
      '/warriors/show/1',
    );
  });
});
