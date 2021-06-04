import rootReducer from '../reducers/index.js';

const { applyMiddleware, compose } = Redux;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const thunk = (store) => (next) => (action) => {
  if(typeof action === 'function') {
    return action(store.dispatch);
  }
  return next(action);
}

const localStorage = (store) => (next) => (action) => {
  const response = next(action);

  if(action.localStorage !== undefined)
    window.localStorage.setItem(
      action.localStorage,
      JSON.stringify(action.payload),
    );
  return response;
};

const enhacer = composeEnhancers(applyMiddleware(thunk, localStorage));


const store = Redux.createStore(rootReducer, enhacer);

export default store;
