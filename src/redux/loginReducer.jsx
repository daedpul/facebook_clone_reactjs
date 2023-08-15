// import { createReducer } from "@reduxjs/toolkit";
import loginAction from "../loginpage/action/loginAction";
import { createAsyncThunk, createReducer, createSlice } from "@reduxjs/toolkit"
import { useNavigate } from "react-router-dom";
/*
const initialState = { name: "dave", color: "#1877f2" };

const loginReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(changeColor, (initialState, action) => {
            return {
                ...initialState,
                color: action.payload.color,
            }
        })
})

export { loginReducer }*/

/*const loginSlice = createSlice({
    name: "login",
    initialState: {
        status: 'success'
    }
})*/
const initialState ={
    status:null
}
export const loginReducer = createReducer(
    [], (builder) => {
        builder.addCase(initialState, (state, action) => {
            return {
                ...initialState,
                status: action.payload
            }
        })
    }
)

export default loginReducer;

