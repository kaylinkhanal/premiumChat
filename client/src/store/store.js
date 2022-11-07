import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import RegisterSlice from '../ActionReducers/RegisterSlice';

const reducer = combineReducers({
    Register: RegisterSlice,
});

const store = configureStore({
    reducer,
});

export default store;
