import { configureStore } from '@reduxjs/toolkit'
import {loginReducer} from "../src/redux/loginReducer"



const store = configureStore({
    reducer:{
        login:loginReducer
    }
}) 

export {store};

