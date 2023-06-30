import React from "react";
import { combineReducers } from "redux";
import { login, loginAction } from "../../state/actions/loginAction";
import "../logincomponents/button.css";
import { useSelector, useDispatch } from "react-redux";

function LoginButton() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.color);
    return (
        <div
            style={{
                display: "flex",
            }}
        >
            <button
                style={{
                    width: "100%",
                    height: "40px",
                    margin: "10px",
                    outline: "none",
                    border: "none",
                    borderRadius: 5,
                    paddingLeft: "10px",
                    paddingRight: "10px",
                    // color: "#FFFFFF",
                    // color: state.color,
                    backgroundColor: "#1877f2",

                }} onClick={() => dispatch(loginAction())}>Log in</button>
        </div>
    );
}

export default LoginButton;