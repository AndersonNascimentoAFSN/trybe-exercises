import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "../reducers/index";
import logger from '../middleware/logger';

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({ reducer: rootReducer, middleware });

export default store;
