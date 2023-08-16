import { createReducer } from "@reduxjs/toolkit";
import { focusSearch, blurSearch } from "../homepage/banner/action/bannerAction";


const initialState = {
    show: null
}

const bannerReducer = createReducer(
    initialState, (builder) => {
        builder.addCase(focusSearch, (initialState, action) => {

            return {
                ...initialState,
                show: action.payload
            }
        }).addCase(blurSearch, (initialState, action) => {
            return {
                ...initialState,
                show: action.payload
            }
        })
    }
)

export default bannerReducer;