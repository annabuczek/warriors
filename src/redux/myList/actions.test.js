import actionTypes from '../actionTypes';
import {
  addWarriorToMyList,
  removeWarriorFromMyList,
} from './actions';

describe('myList actions', () => {
  describe('addWarriorToMyList', () => {
    it('creates ADD_WARRIOR_TO_MY_LIST action', () => {
      const expectedAction = {
        type: actionTypes.ADD_WARRIOR_TO_MY_LIST,
      };

      expect(addWarriorToMyList()).toEqual(expectedAction);
    });
  });

  describe('removeWarriorFromMyList', () => {
    it('creates REMOVE_WARRIOR_FROM_MY_LIST action', () => {
      const expectedAction = {
        type: actionTypes.REMOVE_WARRIOR_FROM_MY_LIST,
      };

      expect(removeWarriorFromMyList()).toEqual(expectedAction);
    });
  });
});
