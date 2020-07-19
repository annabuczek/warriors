import React from 'react';
import { shallow } from 'enzyme';
import { click } from '../../testSupport/support';
import { WarriorShow } from './WarriorShow';
import RemoveWarriorPopup from '../../components/RemoveWarriorPopup/RemoveWarriorPopup';
import warriorsMock from '../../testSupport/mocks/warriorsMock.json';

describe('WarriorShow', () => {
  const myList = {};
  const warriors = { data: warriorsMock };
  const match = { params: { id: '1' } };

  it('displays warrior', () => {
    const wrapper = shallow(
      <WarriorShow
        myList={myList}
        warriors={warriors}
        removeWarriorFromMyList={() => jest.fn()}
        addWarriorToMyList={() => jest.fn()}
        removeWarrior={() => jest.fn()}
        match={match}
      />,
    );

    expect(wrapper.text()).toContain('Wojownik Stefan');
  });

  it('has working add to my list button when warrior not on my list', () => {
    const addWarriorToMyList = jest.fn();
    const wrapper = shallow(
      <WarriorShow
        myList={myList}
        warriors={warriors}
        removeWarriorFromMyList={() => jest.fn()}
        addWarriorToMyList={addWarriorToMyList}
        removeWarrior={() => jest.fn()}
        match={match}
      />,
    );

    const button = wrapper.find('.warrior__button').at(0);
    expect(button.text()).toContain('Dodaj do mojej listy');

    click(button);
    expect(addWarriorToMyList.mock.calls.length).toBe(1);
  });

  it('has working remove from my list button when warrior on my list', () => {
    const myList = warriorsMock;
    const removeWarriorFromMyList = jest.fn();
    const wrapper = shallow(
      <WarriorShow
        myList={myList}
        warriors={warriors}
        removeWarriorFromMyList={removeWarriorFromMyList}
        addWarriorToMyList={() => jest.fn()}
        removeWarrior={() => jest.fn()}
        match={match}
      />,
    );

    const button = wrapper.find('.warrior__button').at(0);
    expect(button.text()).toContain('Usuń z mojej listy');

    click(button);
    expect(removeWarriorFromMyList.mock.calls.length).toBe(1);
  });

  it('displays popup when attempt to remove warrior', () => {
    const removeWarrior = jest.fn();
    const wrapper = shallow(
      <WarriorShow
        myList={myList}
        warriors={warriors}
        removeWarriorFromMyList={() => jest.fn()}
        addWarriorToMyList={() => jest.fn()}
        removeWarrior={removeWarrior}
        match={match}
      />,
    );

    expect(wrapper.find(RemoveWarriorPopup)).toHaveLength(1);
  });
});
