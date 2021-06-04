import rootReducer from '../reducers/index.js';
import thunk from './middleware/thunk.js';
import localStorage from './middleware/localStorage.js';
const { createStore, compose, applyMiddleware } = Redux;


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk, localStorage));

const store = createStore(rootReducer, enhancer);

export default store;
