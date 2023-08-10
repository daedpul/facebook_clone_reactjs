import { React } from "react";
import "../logincomponents/button.css";
import { useDispatch, useSelector } from "react-redux";
import { changeColor } from "..//action/loginAction"




function LoginButton() {
    const dispatch = useDispatch()
    const color = useSelector((state) => state.login.color)
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
                    backgroundColor: color
                }} onClick={() => {
                    dispatch(changeColor())

                }}>Log in</button>
        </div>
    );
}

export default LoginButton;