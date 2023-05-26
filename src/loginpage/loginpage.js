import React from "react";
import { LoginCard } from "./logincomponents/material"
export function LoginPage() {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems:"center",
            height: "100vh",
            flexDirection: "column",
            backgroundColor: "#f0f2f5",
        }}>
            <LoginCard/>
            {/* <label>Hello World</label> */}
            {/* <label>Hello World</label> */}
            {/* <label>Hello World</label> */}
        </div>
    );
}

