import moment from 'moment';
import actionTypes from '../actionTypes';
import { setLocalStorageUpdateDate } from './actions';

describe('localStorage actions', () => {
  describe('setLocalStorageUpdateDate', () => {
    it('creates SET_LOCAL_STORAGE_UPDATE_DATE action', () => {
      const updateDate = moment().add(3, 'days').format();

      const expectedAction = {
        type: actionTypes.SET_LOCAL_STORAGE_UPDATE_DATE,
        updateDate,
      };

      expect(setLocalStorageUpdateDate()).toEqual(expectedAction);
    });
  });
});
