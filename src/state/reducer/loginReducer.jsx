import { createReducer } from "@reduxjs/toolkit";
import { loginAction } from "../../state/actions/loginAction";

const state = {
    status: ["await"]
}
export const loginReducer = createReducer(state, (builder) => {
    builder.addCase(loginAction, (state, action) => {
        console.log(action.payload);

    })
})

export default loginReducer;