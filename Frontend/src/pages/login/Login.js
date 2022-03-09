import React from "react"
import "./login.css"
import { useState } from "react"
export default function Login() {

    const [Shown, setShown] = useState(false);
    const togglePassword = () => {
        setShown(!Shown);
    };

    return (
        <div className="login">
            <div className="logo">
                <span className="loginLogo">Acad</span>
                <span className="designlogo">In</span>
            </div>
            <div className="loginbox">
                <div className="box">
                    <span className="log">Login</span>
                    <input placeholder="Email" className="loginInput" required />
                    <div className="loginInput">
                        <input type={Shown ? "text" : "password"} placeholder="Password" className="pass" required />
                        <i className="fa-solid fa-eye" onClick={togglePassword}></i>
                    </div>
                    <button className="loginButton">Log In</button>
                    <span className="register">New to AcadIn?
                        <a href="Login.js" className="regis"> Register Here</a>
                    </span>
                </div>
            </div>
        </div >
    )
}