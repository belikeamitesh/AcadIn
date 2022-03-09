import React from "react";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    // <Login/>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
    </Router>
  )
}

export default App;
