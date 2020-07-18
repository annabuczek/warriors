import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import localStorage from './localStorage/reducer';
import myList from './myList/reducer';
import warriors from './warriors/reducer';

export default combineReducers({
  localStorage,
  warriors,
  myList,
  form,
});
