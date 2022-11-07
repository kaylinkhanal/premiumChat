import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import users from '../reducers/users'

import logger from 'redux-logger'

const reducer = combineReducers({
    users:users
});

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
