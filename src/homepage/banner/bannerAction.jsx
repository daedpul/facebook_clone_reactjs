import { createAction } from "@reduxjs/toolkit";

const focusSearch = createAction(
    'focusSearch', function prepare(){
        return {
            payload:{
                show:false
            }
        }
    }
)

const blurSearch = createAction(
    'blurSearch', function prepare(){
        return {
            payload:{
                show:true
            }
        }
    }
)
export {focusSearch, blurSearch};