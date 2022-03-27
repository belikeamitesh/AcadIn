import React from "react"
import styles from "./Register.module.css"
import { useState } from "react"
import {Link} from "react-router-dom";

export default function Register() {

    const [Shown, setShown] = useState(false);
    const togglePassword = () => {
        setShown(!Shown);
    };

    return (
        <div className={styles.register}>
            <div className={styles.logo}>
                <span className={styles.registerLogo}>Acad</span>
                <span className={styles.designlogo}>In</span>
            </div>
            <div className={styles.registerbox}>
                <div className={styles.box}>
                    <span className={styles.regis}>Sign Up</span>
                    <input placeholder="Email" className={styles.registerInput} required />
                    <div className={styles.registerInput}>
                        <input type={Shown ? "text" : "password"} placeholder="Password" className={styles.pass} required />
                        <i className="fa-solid fa-eye" onClick={togglePassword}></i>
                    </div>
                    <button className={styles.registerButton}>Register</button>
                    <span className={styles.login}>Already on AcadIn?
                        <Link to="/login" className={styles.log}>Login</Link>
                    </span>
                </div>
            </div>
        </div >
    )
}