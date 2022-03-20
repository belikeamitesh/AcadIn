import React from "react"
import styles from "./Chat.module.css";
import Topbar from "../../component/Topbar";

export default function Chat() {
    return (
        document.body.style.backgroundColor = "rgb(17, 16, 16)",
        < div className={styles.page} >
            <Topbar />
            <div className={styles.content}>
                <div className={styles.left}>
                    <div className={styles.user}>
                        <img src="profile.jpg" alt="" className={styles.profilepic} />
                        <h3 className={styles.heading}>Chats</h3>
                    </div>
                    <div className={styles.search}>
                        <div className={styles.searchbox}>
                            <div className={styles.searchicon}>
                                <i className="fa fa-search"></i>
                            </div>
                            <input placeholder="Search or start new chat here" className={styles.searchinput}></input>
                        </div>
                    </div>
                    <div className={styles.friend}>
                        <div className={styles.friendlist}>
                            <img src="1.jpg" alt="" className={styles.pic} />
                            <div className={styles.chattab}>
                                <span className={styles.friendname}>Ankit Singh</span>
                                <span className={styles.lastchat}>Hello how are you and are you fine now with this</span>
                            </div>
                        </div>
                        <div className={styles.friendlist}>
                            <img src="2.jpg" alt="" className={styles.pic} />
                            <div className={styles.chattab}>
                                <span className={styles.friendname}>Ankith Reddy</span>
                                <span className={styles.lastchat}>Hey are you okay ? </span>
                            </div>
                        </div>
                        <div className={styles.friendlist}>
                            <img src="blank.jpg" alt="" className={styles.pic} />
                            <div className={styles.chattab}>
                                <span className={styles.friendname}>Ananya</span>
                                <span className={styles.lastchat}>Hi</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.top}>
                        <img src="1.jpg" alt="" className={styles.profilepic} />
                        <h3 className={styles.username}>Ankit Singh</h3>
                        <div className={styles.menu}>
                            <i class="fa-solid fa-ellipsis-vertical"></i>
                        </div>
                    </div>
                    <div className={styles.middle}>
                        <div className={styles.senttext}>
                            This message was sent
                        </div>
                        <div className={styles.received}>
                            This message was received from Ankit Singh to the Ankit Singh
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.emoji}>
                            <i class="fa-regular fa-face-grin"></i>
                        </div>
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