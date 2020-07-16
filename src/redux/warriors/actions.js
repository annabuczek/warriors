import _ from 'lodash';
import actionTypes from '../actionTypes';
import api from '../../api/warriorsApi';
import { setLocalStorageUpdateDate } from '../localStorage/actions';

export const fetchWarriors = () => {
  return (dispatch, getState) => {
    dispatch({ type: actionTypes.FETCH_WARRIORS_REQUESTED });
    return api
      .get('/')
      .then(({ data: { warriors } }) => {
        dispatch({
          type: actionTypes.FETCH_WARRIORS_SUCCEEDED,
          data: {
            ...getState().warriors.data,
            ..._.mapKeys(warriors, 'id'),
          },
        });
        dispatch(setLocalStorageUpdateDate());
      })
      .catch((error) => {
        dispatch({
          type: actionTypes.FETCH_WARRIORS_FAILED,
          error,
        });
      });
  };
};
