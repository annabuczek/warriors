import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import { simulateChange } from '../../testSupport/support';
import WarriorCreate from './WarriorCreate';
import { MemoryRouter } from 'react-router-dom';

describe('WarriorCreate', () => {
  const wrapper = mount(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/warriors/create']}>
        <WarriorCreate />
      </MemoryRouter>
    </Provider>,
  );
  it('renders form', () => {
    expect(wrapper.find('.form')).toHaveLength(1);
  });

  it('updates input value when changed', () => {
    simulateChange(wrapper.find('.form__input'), 'test');

    expect(wrapper.find('.form__input').prop('value')).toBe('test');
  });

  it('updates textarea value when changed', () => {
    simulateChange(wrapper.find('.form__textarea'), 'test');

    expect(wrapper.find('.form__textarea').prop('value')).toBe(
      'test',
    );
  });

  it('updates select value when changed', () => {
    simulateChange(wrapper.find('.form__select'), 'test');

    expect(wrapper.find('.form__select').prop('value')).toBe('test');
  });

  it('has cancel button that redirects to main page', () => {
    expect(wrapper.find('Link').at(0).prop('to')).toBe('/');
  });
});
