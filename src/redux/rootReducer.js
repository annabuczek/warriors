import { combineReducers } from 'redux';

export default combineReducers({
  warriors: () => {
    return { warrior: 'warrior' };
  },
});
