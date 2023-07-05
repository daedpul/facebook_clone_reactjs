import { createAction } from "@reduxjs/toolkit";

export const changeColor = createAction('changeColor', function prepare(text){
    return {
        payload:{
            name:"rubi",
            color:"green"
        }
    }
})