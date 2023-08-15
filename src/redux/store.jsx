import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './loginReducer';
import bannerReducer from './bannerReducer';


const store = configureStore({
    reducer:{
        login:loginReducer,
        banner:bannerReducer
    }
}) 

export default store;

