import { configureStore,combineReducers } from '@reduxjs/toolkit'
import loginReducer from './loginReducer';
import bannerReducer from './bannerReducer';
import {  } from '@reduxjs/toolkit';


const rootReducer = combineReducers({
    loginReducer,
    bannerReducer
})


const store = configureStore({
    reducer:rootReducer
}) 

export default store;

