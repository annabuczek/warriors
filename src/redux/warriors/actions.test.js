import _ from 'lodash';
import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import moment from 'moment';
import thunk from 'redux-thunk';
import actionTypes from '../actionTypes';
import {
  fetchWarriors,
  fetchWarriorsRequested,
  fetchWarriorsSucceeded,
  fetchWarriorsFailed,
} from './actions';
import warriorsApiMock from '../../testSupport/mocks/warriorsApiMock.json';
import { setLocalStorageUpdateDate } from '../localStorage/actions';

const mockStore = configureMockStore([thunk]);
const mockAdapter = new MockAdapter(axios);

describe('warriors actions', () => {
  describe('fetchWarriorsRequested', () => {
    it('creates FETCH_WARRIORS_REQUESTED action', () => {
      const expectedAction = {
        type: actionTypes.FETCH_WARRIORS_REQUESTED,
      };

      expect(fetchWarriorsRequested()).toEqual(expectedAction);
    });
  });
});

describe('fetchWarriorsSucceeded', () => {
  it('creates FETCH_WARRIORS_SUCCEEDED action', () => {
    const currentWarriors = {
      '1': {
        id: 1,
        name: 'Wojownik Krzyś',
        description:
          'Aenean eu pretium dui, sit amet posuere tortor.',
        skill: 'Je pączki na czas',
      },
    };

    const fetchedWarriors = warriorsApiMock.warriors;

    const expectedAction = {
      type: actionTypes.FETCH_WARRIORS_SUCCEEDED,
      data: {
        ...currentWarriors,
        ..._.mapKeys(fetchedWarriors, 'id'),
      },
    };

    expect(
      fetchWarriorsSucceeded(
        currentWarriors,
        warriorsApiMock.warriors,
      ),
    ).toEqual(expectedAction);
  });
});

describe('fetchWarriorsFailed', () => {
  it('creates FETCH_WARRIORS_FAILES action', () => {
    const expectedAction = {
      type: actionTypes.FETCH_WARRIORS_FAILED,
      error: 'Request failed with status code 404',
    };

    expect(
      fetchWarriorsFailed('Request failed with status code 404'),
    ).toEqual(expectedAction);
  });
});

describe('fetchWarriors', () => {
  it('creates actions when fetch succeeded', () => {
    mockAdapter
      .onGet(
        'https://run.mocky.io/v3/9fbe35dc-2333-454d-a3a3-2951ef978db1/',
      )
      .reply(200, warriorsApiMock);

    const expectedActions = [
      fetchWarriorsRequested(),
      fetchWarriorsSucceeded({}, warriorsApiMock.warriors),
      setLocalStorageUpdateDate(moment().add(3, 'days').format()),
    ];

    const store = mockStore({ warriors: {} });
    return store.dispatch(fetchWarriors()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates actions when fetch failed', () => {
    mockAdapter
      .onGet(
        'https://run.mocky.io/v3/9fbe35dc-2333-454d-a3a3-2951ef978db1/',
      )
      .reply(404, {
        message: 'Request failed with status code 404',
      });

    const expectedActions = [
      fetchWarriorsRequested(),
      fetchWarriorsFailed('Request failed with status code 404'),
    ];

    const store = mockStore({ warriors: {} });
    return store.dispatch(fetchWarriors()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
