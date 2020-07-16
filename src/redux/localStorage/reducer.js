import actionTypes from '../actionTypes';

const initialState = {
  updateDate: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_LOCAL_STORAGE_UPDATE_DATE:
      return {
        ...state,
        updateDate: action.updateDate,
      };
    default:
      return state;
  }
};
