import tokenReducer from  './tokenReducer.js';
import userReducer from  './userReducer.js';

const { combineReducers } = Redux; 

const rootReducer = combineReducers({
  token: tokenReducer, 
  user: userReducer
});

export default rootReducer;
