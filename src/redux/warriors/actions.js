import _ from 'lodash';
import actionTypes from '../actionTypes';
import axios from 'axios';
import { setLocalStorageUpdateDate } from '../localStorage/actions';
import { removeWarriorFromMyList } from '../myList/actions';
import history from '../../history';

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
      'https://run.mocky.io/v3/b98b52b2-cf69-4104-9c47-b7fa032efa5c',
    );
    dispatch(
      fetchWarriorsSucceeded(getState().warriors.data, warriors),
    );
    dispatch(setLocalStorageUpdateDate());
  } catch (error) {
    dispatch(fetchWarriorsFailed(error.message));
  }
};

export const removeWarrior = (warrior) => (dispatch) => {
  dispatch({
    type: actionTypes.REMOVE_WARRIOR,
    warrior,
  });
  dispatch(removeWarriorFromMyList(warrior));
  history.push('/');
};

export const addWarrior = (warrior) => (dispatch) => {
  dispatch({
    type: actionTypes.ADD_WARRIOR,
    warrior,
  });
  history.push(`/warriors/show/${warrior.id}`);
};
