import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { createStore, combineReducers } from 'redux';
import clickReducer from '../reducers/clickReducer';

const renderWithRedux = (
  component, { initialState, store = createStore(combineReducers({ clickReducer }), initialState)} = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
  store,
  }
}

export default renderWithRedux;
