import React from "react";
import * as LandingPageJs from "./components/LandingPage.js";
function Scaffold(){
    return(
        <div>
            <LandingPageJs.NavBar/>
            <LandingPageJs.LandingPageBody/>
        </div>
    );
}

export default Scaffold;