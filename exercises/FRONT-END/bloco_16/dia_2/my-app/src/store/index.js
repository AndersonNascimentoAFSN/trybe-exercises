import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import listReducer from '../reducers';

const rootReducer = combineReducers({ listReducer });

const store = createStore(rootReducer, composeWithDevTools());

export default store;
