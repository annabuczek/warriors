import reducer from './reducer';
import {
  addWarriorToMyList,
  removeWarriorFromMyList,
} from './actions';

describe('myList reducer', () => {
  const initialState = {};
  it('returns initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('adds warrior to my list', () => {
    const initialState = { 1: { id: '1', name: 'Wojowniczka Ewa' } };
    const warrior = { id: '2', name: 'Wojownik Sebastian' };

    expect(
      reducer(initialState, addWarriorToMyList(warrior)),
    ).toEqual({
      1: {
        id: '1',
        name: 'Wojowniczka Ewa',
      },
      2: {
        id: '2',
        name: 'Wojownik Sebastian',
      },
    });
  });

  it('removes warrior from my list', () => {
    const initialState = {
      1: {
        id: '1',
        name: 'Wojowniczka Ewa',
      },
      2: {
        id: '2',
        name: 'Wojownik Sebastian',
      },
    };
    const warrior = { id: '2', name: 'Wojownik Sebastian' };

    expect(
      reducer(initialState, removeWarriorFromMyList(warrior)),
    ).toEqual({
      1: {
        id: '1',
        name: 'Wojowniczka Ewa',
      },
    });
  });
});
