import actionTypes from '../actionTypes';

export const addWarriorToMyList = (warrior) => {
  return {
    type: actionTypes.ADD_WARRIOR_TO_MY_LIST,
    warrior,
  };
};

export const removeWarriorFromMyList = (warrior) => {
  return {
    type: actionTypes.REMOVE_WARRIOR_FROM_MY_LIST,
    warrior,
  };
};
