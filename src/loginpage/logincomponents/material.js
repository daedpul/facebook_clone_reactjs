import React from "react";
import {Username} from "./logincomponents.js"
export function LoginCard() {
    return (
        <div style={{
            height: "300px",
            width: "400px",
            backgroundColor: "white",
            borderRadius: 7,
            borderStyle: "solid",
            borderColor: "#dfe3ee",
            boxShadow: "0px 0px 20px 4px #dfe3ee"
            // boxShadow:''8b9dc3
        }}>
            <label style={{
                justifyContent:"center",
                display:"flex",
                margin: "20px",
                // backgroundColor:"blue"
            }}>Log Into Facebook</label>
            <Username/>
        </div>);
}
