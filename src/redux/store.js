import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import { loadState, saveState } from './localStorage';
import rootReducer from './rootReducer';

const persistedState = loadState();

export const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(thunk)),
);

store.subscribe(() => {
  saveState({
    warriors: { data: store.getState().warriors.data },
    localStorage: store.getState().localStorage,
    myList: store.getState().myList,
  });
});
