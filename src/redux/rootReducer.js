import { combineReducers } from 'redux';
import localStorage from './localStorage/reducer';
import warriors from './warriors/reducer';

export default combineReducers({
  localStorage,
  warriors,
});
