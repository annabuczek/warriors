import _ from 'lodash';
import actionTypes from '../actionTypes';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_WARRIOR_TO_MY_LIST:
      return {
        ...state,
        [`${action.warrior.id}`]: action.warrior,
      };
    case actionTypes.REMOVE_WARRIOR_FROM_MY_LIST:
      return _.omit(state.data, action.warrior.id);
    default:
      return state;
  }
};
