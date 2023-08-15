import { React } from "react";
import "../logincomponents/button.css";
import { useDispatch, useSelector } from "react-redux";
// import { changeColor } from "..//action/loginAction"
import loginAction from "../action/loginAction";
import { useNavigate } from "react-router-dom";



function LoginButton() {
    const dispatch = useDispatch()
    // const color = useSelector((state) => state.login.color)
    const color = "red"

    const status = useSelector((state) => state.status)
    const navigate = useNavigate();

    const goTo = () => {
        navigate('/home')
    }


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
                    backgroundColor: "red"
                }} onClick={() => {
                    dispatch(loginAction())
                    goTo()
                }}>Log in</button>
        </div>
    );

}


export default LoginButton;