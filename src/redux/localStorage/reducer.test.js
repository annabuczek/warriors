import moment from 'moment';
import reducer from './reducer';
import { setLocalStorageUpdateDate } from './actions';

describe('localStorage reducer', () => {
  const initialState = { updateDate: null };
  it('returns initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('updates local storage update date', () => {
    expect(
      reducer(initialState, setLocalStorageUpdateDate()),
    ).toEqual({
      updateDate: moment().add(3, 'days').format(),
    });
  });
});
