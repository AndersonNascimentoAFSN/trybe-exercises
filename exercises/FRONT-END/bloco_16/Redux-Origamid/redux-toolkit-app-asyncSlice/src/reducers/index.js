import { combineReducers } from "redux";
import token from './token';
import user from './user';
// import modal from './modal';

const rootReducer = combineReducers({ token, user });

export default rootReducer;