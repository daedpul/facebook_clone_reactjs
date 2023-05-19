import React from "react";
import "./bullet.css"
function Greet() {
    return (
        <h1>
            Hello
        </h1>
    );
}

function Name() {
    return (
        <h2> Dave</h2>
    );
}

function NavBar() {
    return (
        <div class="navbar">
            <ul>
                <li>About me </li>
                <li>Contact me </li>
            </ul>
        </div>);
}

export { NavBar, Greet, Name };