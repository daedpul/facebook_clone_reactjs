import React from "react";
import "./navbar_content.css";
import "./body_content.css";

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
    return (
        <div id = "container">
            <input placeholder="Meeting ID"/>
            <input placeholder="User"/>
        </div>);
}

export { NavBar,LandingPageBody};