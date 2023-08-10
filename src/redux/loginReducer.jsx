// import { createReducer } from "@reduxjs/toolkit";
// import { changeColor } from "../loginpage/action/loginAction";
import { createSlice } from "@reduxjs/toolkit"
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

const loginSlice = createSlice({
    name: "login",
    initialState: {
        status: 'success'
    }
})

export default loginSlice.reducer;

