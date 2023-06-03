import { configureStore } from "@reduxjs/toolkit"
import loginReducer from "../../src/state/reducer/loginReducer"


export const store = configureStore({
    reducer: {
        status: loginReducer
    }
}
)