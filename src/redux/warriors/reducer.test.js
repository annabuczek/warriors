import reducer from './reducer';
import {
  fetchWarriorsRequested,
  fetchWarriorsFailed,
  fetchWarriorsSucceeded,
} from './actions';
import actionTypes from '../actionTypes';

describe('warriors reducer', () => {
  const initialState = { fetching: false, error: '', data: {} };
  it('returns initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('sets fetching value when fetch requested', () => {
    expect(reducer(initialState, fetchWarriorsRequested())).toEqual({
      fetching: true,
      error: '',
      data: {},
    });
  });

  it('sets data when fetch succeeded', () => {
    const fetchedWarriors = {
      '2': {
        id: 2,
        name: 'Wojownik Krzyś',
        description:
          'Aenean eu pretium dui, sit amet posuere tortor.',
        skill: 'Je pączki na czas',
      },
    };

    expect(
      reducer(
        initialState,
        fetchWarriorsSucceeded({}, fetchedWarriors),
      ),
    ).toEqual({
      fetching: false,
      error: '',
      data: { ...fetchedWarriors },
    });
  });

  it('sets error when fetch failed', () => {
    expect(
      reducer(
        initialState,
        fetchWarriorsFailed('Request failed with status code 404'),
      ),
    ).toEqual({
      fetching: false,
      error: 'Request failed with status code 404',
      data: {},
    });
  });

  it('removes warrior', () => {
    const state = {
      fetching: false,
      error: '',
      data: {
        1: {
          id: '1',
          name: 'Wojowniczka Ewa',
        },
        2: {
          id: '2',
          name: 'Wojownik Sebastian',
        },
      },
    };

    const warrior = { id: '2', name: 'Wojownik Sebastian' };

    const removeWarriorAction = {
      type: actionTypes.REMOVE_WARRIOR,
      warrior,
    };

    expect(reducer(state, removeWarriorAction)).toEqual({
      fetching: false,
      error: '',
      data: {
        1: {
          id: '1',
          name: 'Wojowniczka Ewa',
        },
      },
    });
  });

  it('adds warrior', () => {
    const state = {
      fetching: false,
      error: '',
      data: {
        1: {
          id: '1',
          name: 'Wojowniczka Ewa',
        },
      },
    };

    const warrior = { id: '2', name: 'Wojownik Sebastian' };

    const addWarriorAction = {
      type: actionTypes.ADD_WARRIOR,
      warrior,
    };

    expect(reducer(state, addWarriorAction)).toEqual({
      fetching: false,
      error: '',
      data: {
        1: {
          id: '1',
          name: 'Wojowniczka Ewa',
        },
        2: {
          id: '2',
          name: 'Wojownik Sebastian',
        },
      },
    });
  });
});
