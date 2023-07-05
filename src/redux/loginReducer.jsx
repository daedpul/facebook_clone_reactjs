import { createReducer } from "@reduxjs/toolkit";
import { changeColor } from "./actions/loginAction";


const initialState = { name:"dave", color: "#1877f2" };

const loginReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(changeColor, (state, action)=>{
        return{
            ...state,
            color:action.payload.color,
        }
    })
})

export {loginReducer}