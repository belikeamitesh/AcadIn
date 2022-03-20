import React from "react"
import styles from "./Login.module.css";
import { useState } from "react";

import { Link } from "react-router-dom";
export default function Login() {

    const [Shown, setShown] = useState(false);
    const togglePassword = () => {
        setShown(!Shown);
    };

    return (
        document.body.style.backgroundColor = "white",
        <div className={styles.login}>
            <div className={styles.logo}>
                <span className={styles.loginLogo}>Acad</span>
                <span className={styles.designlogo}>In</span>
            </div>
            <div className={styles.loginbox}>
                <div className={styles.box}>
                    <span className={styles.log}>Login</span>
                    <input placeholder="Email" className={styles.loginInput} required />
                    <div className={styles.loginInput}>
                        <input type={Shown ? "text" : "password"} placeholder="Password" className={styles.pass} required />
                        <i className="fa-solid fa-eye" onClick={togglePassword}></i>
                    </div>
                    <button className={styles.loginButton}>Log In</button>
                    <span className={styles.register}>New to AcadIn?
                        <Link to='/register' className={styles.regis}>Register Here</Link>
                    </span>
                </div>
            </div>
        </div >
    )
}