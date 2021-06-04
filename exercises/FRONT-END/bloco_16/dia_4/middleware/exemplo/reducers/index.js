const INCREMENTAR = 'INCREMENTAR';
const REDUZIR = 'REDUZIR';

function reducer(state = 0, action) {
  // console.log('reducer');
  switch(action.type) {
    case INCREMENTAR:
      return state + 1;
    case REDUZIR:
      return state - 1;
    default:
      return state;
  }
}

const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log('Action', action);
  console.log('PREV_STATE', store.getState());
  next(action);
  console.log('NEW_STATE', store.getState());
  console.groupEnd();
  // console.log(action);
  // return next(action);
  return next(action);
}

const { applyMiddleware, compose } = Redux;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(logger));

const store = Redux.createStore(reducer, enhancer);

store.dispatch({ type: INCREMENTAR});
store.dispatch({ type: INCREMENTAR});
store.dispatch({ type: INCREMENTAR});
store.dispatch({ type: REDUZIR});

// console.log(store.getState());

export default store;
