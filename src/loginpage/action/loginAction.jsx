import { createAction } from "@reduxjs/toolkit";

export const changeColor = createAction('changeColor', function prepare() {

    fetch("/api").then(
        response => response.json()
    ).then(
        data => {
            console.log(data);
        }
    )

    return {
        payload: {
            color: "green"
        }
    }
})