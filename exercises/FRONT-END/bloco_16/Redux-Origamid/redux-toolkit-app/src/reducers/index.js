import { combineReducers } from "redux";
import contador from './contador';
import modal from './modal';

const rootReducer = combineReducers({ contador, modal });

export default rootReducer;