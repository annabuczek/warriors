import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import { Warriors } from './Warriors';
import { click } from '../../testSupport/support';
import warriorsMock from '../../testSupport/mocks/warriorsMock.json';

describe('Warriors', () => {
  const myList = {};
  const warriors = Object.values(warriorsMock);

  it('displays warriors', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <Warriors
          myList={myList}
          warriors={warriors}
          removeWarriorFromMyList={() => jest.fn()}
          addWarriorToMyList={() => jest.fn()}
          error={''}
          fetching={false}
        />
      </MemoryRouter>,
    );

    expect(wrapper.text()).toContain('Wojownik Stefan');
    expect(wrapper.text()).toContain('Wojowniczka Maria');
    expect(wrapper.text()).toContain('Wojowniczka Kasia');
  });

  it('displays loading when fetching true', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <Warriors
          myList={myList}
          warriors={warriors}
          removeWarriorFromMyList={() => jest.fn()}
          addWarriorToMyList={() => jest.fn()}
          error={''}
          fetching={true}
        />
      </MemoryRouter>,
    );

    expect(wrapper.text()).toContain('Loading...');
    expect(wrapper.text()).not.toContain('Wojownik Stefan');
  });

  it('displays error when error true', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <Warriors
          myList={myList}
          warriors={warriors}
          removeWarriorFromMyList={() => jest.fn()}
          addWarriorToMyList={() => jest.fn()}
          error={'Error'}
          fetching={false}
        />
      </MemoryRouter>,
    );

    expect(wrapper.text()).toContain(
      'Coś poszło nie tak, spróbuj ponownie za chwilę.',
    );
    expect(wrapper.text()).not.toContain('Wojownik Stefan');
  });

  it('has working add to my list button when warrior not on my list', () => {
    const addWarriorToMyList = jest.fn();
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <Warriors
          myList={myList}
          warriors={warriors}
          removeWarriorFromMyList={() => jest.fn()}
          addWarriorToMyList={addWarriorToMyList}
          error={''}
          fetching={false}
        />
      </MemoryRouter>,
    );

    const button = wrapper.find('.warrior__button--add').at(0);
    click(button);

    expect(addWarriorToMyList.mock.calls.length).toBe(1);
  });

  it('has working remove from my list button when warrior on my list', () => {
    const removeWarriorFromMyList = jest.fn();
    const myList = warriorsMock;
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <Warriors
          myList={myList}
          warriors={warriors}
          removeWarriorFromMyList={removeWarriorFromMyList}
          addWarriorToMyList={() => jest.fn()}
          error={''}
          fetching={false}
        />
      </MemoryRouter>,
    );

    const button = wrapper.find('.warrior__button--remove').at(0);
    click(button);

    expect(removeWarriorFromMyList.mock.calls.length).toBe(1);
  });

  it('has link to redirect to warrior details', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <Warriors
          myList={myList}
          warriors={warriors}
          removeWarriorFromMyList={() => jest.fn()}
          addWarriorToMyList={() => jest.fn()}
          error={''}
          fetching={false}
        />
      </MemoryRouter>,
    );

    expect(wrapper.find('Link').at(0).prop('to')).toBe(
      '/warriors/show/1',
    );
  });
});
