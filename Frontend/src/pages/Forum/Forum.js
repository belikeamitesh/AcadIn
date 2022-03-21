import React from "react"
import styles from "./Forum.module.css";
import Topbar from "../../component/Topbar";

export default function Forum() {
    return (
        document.body.style.backgroundColor = "rgb(17, 16, 16)",
        < div className={styles.page} >
            <Topbar />
            <div className={styles.content}>
                <div className={styles.left}>
                    <div className={styles.user}>
                        <h3 className={styles.heading}>Active Forums</h3>
                    </div>
                    <div className={styles.friend}>
                        {/* <span className={styles.nochat}>You don't have any active Forum ( If no current forum )</span> */}
                        <div className={styles.friendlist}>
                            <div className={styles.chattab}>
                                <span className={styles.friendname}>DSA</span>
                                <span className={styles.lastchat}>We all are here to discuss about the very important DSA topics</span>
                            </div>
                        </div>
                        <div className={styles.friendlist}>
                            <div className={styles.chattab}>
                                <span className={styles.friendname}>Sport Events</span>
                                <span className={styles.lastchat}>Events of Sports</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.top}>
                        <h3 className={styles.username}>Sport Events</h3>
                        <div className={styles.menu}>
                            <span className={styles.deletechat}> Delete Forum </span>
                        </div>
                    </div>
                    <div className={styles.middle}>
                        <div className={styles.senttext}>
                            <span className={styles.sender}>Ankit Singh</span>
                            This message was sent by you
                        </div>
                        <div className={styles.received}>
                            <span className={styles.receiver}>Amartya</span>
                            This message was received from other users of forum
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.message}>
                            <input placeholder="Type a message" className={styles.textarea}></input>
                        </div>
                        <div className={styles.send}>
                            <i class="fa-solid fa-paper-plane"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}