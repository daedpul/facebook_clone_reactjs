import React from "react";
import LoginCard from "./logincomponents/logincard"
import Logo from "../resource/fb_logo.svg";
export function LoginPage() {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            flexDirection: "column",
            backgroundColor: "#f0f2f5",
        }}>
            <img
                style={
                    {
                        width: "250px"
                    }
                }
                src={Logo}></img>
            <LoginCard />
        </div>
    );
}

