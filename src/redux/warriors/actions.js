import _ from 'lodash';
import actionTypes from '../actionTypes';
import axios from 'axios';
import { setLocalStorageUpdateDate } from '../localStorage/actions';

export const fetchWarriorsRequested = () => {
  return {
    type: actionTypes.FETCH_WARRIORS_REQUESTED,
  };
};

export const fetchWarriorsSucceeded = (
  currentWarriors,
  fetchedWarriors,
) => {
  return {
    type: actionTypes.FETCH_WARRIORS_SUCCEEDED,
    data: {
      ...currentWarriors,
      ..._.mapKeys(fetchedWarriors, 'id'),
    },
  };
};

export const fetchWarriorsFailed = (error) => {
  return {
    type: actionTypes.FETCH_WARRIORS_FAILED,
    error,
  };
};

export const fetchWarriors = () => async (dispatch, getState) => {
  dispatch(fetchWarriorsRequested());
  try {
    const {
      data: { warriors },
    } = await axios.get(
      'https://run.mocky.io/v3/9fbe35dc-2333-454d-a3a3-2951ef978db1/',
    );
    dispatch(
      fetchWarriorsSucceeded(getState().warriors.data, warriors),
    );
    dispatch(setLocalStorageUpdateDate());
  } catch (error) {
    dispatch(fetchWarriorsFailed(error.message));
  }
};

export const removeWarrior = (warrior) => {
  return {
    type: actionTypes.REMOVE_WARRIOR,
    warrior,
  };
};
