import React from "react"
import "./register.css"
import { useState } from "react"
export default function Login() {

    const [Shown, setShown] = useState(false);
    const togglePassword = () => {
        setShown(!Shown);
    };

    return (
        <div className="register">
            <div className="logo">
                <span className="registerLogo">Acad</span>
                <span className="designlogo">In</span>
            </div>
            <div className="registerbox">
                <div className="box">
                    <span className="regis">Sign Up</span>
                    <input placeholder="Email" className="registerInput" required />
                    <div className="registerInput">
                        <input type={Shown ? "text" : "password"} placeholder="Password" className="pass" required />
                        <i className="fa-solid fa-eye" onClick={togglePassword}></i>
                    </div>
                    <button className="registerButton">Register</button>
                    <span className="login">Already on AcadIn?
                        <a href="Register.js" className="log">Login</a>
                    </span>
                </div>
            </div>
        </div >
    )
}