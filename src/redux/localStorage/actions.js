import actionTypes from '../actionTypes';
import moment from 'moment';

export const setLocalStorageUpdateDate = () => {
  return {
    type: actionTypes.SET_LOCAL_STORAGE_UPDATE_DATE,
    updateDate: moment().add(3, 'days').format(),
  };
};
