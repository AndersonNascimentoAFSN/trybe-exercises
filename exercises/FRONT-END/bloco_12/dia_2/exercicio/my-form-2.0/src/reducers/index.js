import { combineReducers } from 'redux';
import reducerForm from './reducerForm';

const rootReducer = combineReducers({ reducerForm: reducerForm });

export default rootReducer;
