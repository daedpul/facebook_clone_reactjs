import { createReducer } from "@reduxjs/toolkit";
import { loginAction } from "../../state/actions/loginAction";

const state = {
    color: "white"
}
const loginReducer = createReducer(state, (builder) => {
    builder.addCase(loginAction, (state, action) => {
        return state.color = "red"
    })
})

export default loginReducer;