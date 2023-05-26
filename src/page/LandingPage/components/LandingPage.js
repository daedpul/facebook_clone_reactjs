import React from "react";
import "./navbar_content.css";
import "./body_content.css";
import { useState } from "react";
import { MongoClient } from "mongodb";


function NavBar() {

    return (
        <div class="navbar" >
            <ul>
                <li>About us </li>
                <li>Contact us </li>
            </ul>
        </div>);
}



function LandingPageBody() {
    const [message, setMessage] = useState('');
    const [printMessage, setPrintMessage] = useState('');
    const _onClick = () => {
        setPrintMessage(message);
    }
    const _onChange = (event) => {
        setMessage(event.target.value);
    }
    return (

        <div>
            <input itemID="message" onChange={_onChange} />
            <label >Meeting ID</label>
            <button onClick={_onClick}>Submit</button>
            <label>Message: {printMessage}</label>
        </div>
    );
}

export { NavBar, LandingPageBody };