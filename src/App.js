// import Scaffold from "./page/LandingPage/Scaffold";
import * as Login from "./loginpage/loginpage.js";
import Home from "./homepage/body.jsx";
import { BrowserRouter, Routes, Router, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route index element={<Login.LoginPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
