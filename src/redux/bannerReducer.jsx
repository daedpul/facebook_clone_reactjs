import { createReducer } from "@reduxjs/toolkit";
import { focusSearch, blurSearch } from "../homepage/banner/bannerAction";


const initialState = {
    show: null
}

const bannerReducer = createReducer(
    initialState, (builder) => {
        builder.addCase(focusSearch, (initialState, action) => {
            console.log(action.payload)
            return {
                ...initialState,
                show: action.payload
            }
        }).addCase(blurSearch, (initialState, action) => {
            console.log(action.payload)
            return {
                ...initialState,
                show: action.payload
            }
        })
    }
)

export default bannerReducer;