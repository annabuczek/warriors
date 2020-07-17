import { combineReducers } from 'redux';
import localStorage from './localStorage/reducer';
import myList from './myList/reducer';
import warriors from './warriors/reducer';

export default combineReducers({
  localStorage,
  warriors,
  myList,
});
