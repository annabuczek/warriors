import _ from 'lodash';
import actionTypes from '../actionTypes';

const initialState = {
  fetching: false,
  error: '',
  data: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_WARRIORS_REQUESTED:
      return {
        ...state,
        fetching: true,
      };
    case actionTypes.FETCH_WARRIORS_SUCCEEDED:
      return {
        ...state,
        data: action.data,
        fetching: false,
      };
    case actionTypes.FETCH_WARRIORS_FAILED:
      return {
        ...state,
        error: action.error,
        fetching: false,
      };
    case actionTypes.REMOVE_WARRIOR:
      return {
        ...state,
        data: _.omit(state.data, action.warrior.id),
      };
    default:
      return state;
  }
};
