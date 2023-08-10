import React, { Component } from "react";

const colorPalette = {
    focusedBorder: "#1b74e4",
    unFocusedBorder: "#dddfe2",
    outlineColor: "#e7f3ff"
}

class Username extends Component {
    state = {
        borderColor: "#dddfe2",
        outlineColor: "#FFFFFF",
        textColor: "transparent"
    };

    constructor(props) {
        super(props);
    }
    render() {
        return (<div style={{
            display: "flex",
            alignContent: "center",
            alignItems: "center",
            flexDirection: "column",
            marginLeft: "20px",
            marginRight: "20px",
        }}>

            <input
                placeholder="Email or phone number"
                style={{
                    height: "40px",
                    width: "100%",
                    fontFamily: "",
                    border: "1px solid",
                    borderRadius: 5,
                    margin: "10px",
                    color: this.state.textColor,
                    justifyContent: "center",
                    outlineColor: this.state.outlineColor,
                    paddingLeft: "10px",
                    paddingRight: "10px",
                    borderColor: this.state.borderColor,
                    outline: "2px solid"
                }}
                onFocus={() => this.setState({
                    borderColor: colorPalette.focusedBorder,
                    outlineColor: colorPalette.outlineColor,
                    textColor: "#000000"

                })}
                onBlur={() => this.setState({ borderColor: "#dddfe2", outlineColor: "#FFFFFF" })}
            /
            >
        </div>);
    }
}

class Password extends Component {
    state = {
        borderColor: "#dddfe2",
        outlineColor: "#FFFFFF",
        textColor: "transparent"
    };

    constructor() {
        super();
    }
    render() {
        return (<div style={{
            display: "flex",
            alignContent: "center",
            alignItems: "center",
            flexDirection: "column",
            marginLeft: "20px",
            marginRight: "20px",

        }}>

            <input type="password"
                placeholder="Password"
                style={{
                    height: "40px",
                    width: "100%",
                    fontFamily: "",
                    border: "1px solid",
                    borderRadius: 5,
                    margin: "10px",
                    color: this.state.textColor,
                    justifyContent: "center",
                    outlineColor: this.state.outlineColor,
                    paddingLeft: "10px",
                    paddingRight: "10px",
                    borderColor: this.state.borderColor,
                    outline: "2px solid",

                }}
                onFocus={() => this.setState({
                    borderColor: colorPalette.focusedBorder,
                    outlineColor: colorPalette.outlineColor,
                    textColor: "#000000"

                })}

                onBlur={() => this.setState({ borderColor: "#dddfe2", outlineColor: "#FFFFFF" })}
            /
            >
        </div>);
    }
}

export { Username, Password };