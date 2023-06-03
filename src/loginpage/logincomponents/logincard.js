import React from "react";
import {Username, Password} from "./logincomponents.js"
import LoginButton from "./loginbutton.js"
function LoginCard() {
    return (
        <div style={{
            height: "300px",
            width: "400px",
            backgroundColor: "white",
            borderRadius: 7,
            borderStyle: "solid",
            borderColor: "#dfe3ee",
            boxShadow: "0px 0px 20px 4px #dfe3ee"
        }}>
            <label style={{
                justifyContent:"center",
                display:"flex",
                margin: "20px",
                // backgroundColor:"blue"
            }}>Log Into Facebook</label>
            <Username/>
            <Password/>
            <LoginButton/>
        </div>);
}

export default LoginCard;