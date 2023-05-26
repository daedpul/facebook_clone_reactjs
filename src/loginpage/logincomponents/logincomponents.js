import React from "react";

export class Username extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (<div style={{
            display: "flex",
            alignContent: "center",
            alignItems: "center",
            backgroundColor: "red",
            flexDirection: "column",
            margin:"10px"
            // justifyContent:"center"
        }}>
            
            <input style={{
                height: "40px",
                width: "100%",
                margin: "25px",
                // padding:"50px"
            }}>
            </input>

        </div>);
    }
}

