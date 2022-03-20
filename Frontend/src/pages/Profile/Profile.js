import React from "react"
import styles from "./Profile.module.css";
import Topbar from "../../component/Topbar";

export default function Profile() {
    return (
        document.body.style.backgroundColor = "white",
        <div className={styles.page}>
            < Topbar />
            <div className={styles.profile}>
                <div className={styles.info}>
                    <div className={styles.cover}>
                        <img src="cover.jpg" alt="" className={styles.coverpic} />
                        <button className={styles.editcover}>
                            <i class="fa-solid fa-camera"></i>
                        </button>
                        <img src="profile.jpg" alt="" className={styles.profilepic} />
                        <button className={styles.editprofile}>
                            <i class="fa-solid fa-camera"></i>
                        </button>
                    </div>
                    <h4 className={styles.username}>THOR : GOD OF THUNDER</h4>
                    <span className={styles.bio}> Hi I am Thor, The God of Thunder from Asgard (Bio) </span>
                </div>
                <div className={styles.about}>
                    <div className={styles.wrap}>
                        <div className={styles.feed}>
                            <div className={styles.division}>
                                <div className={styles.content}>
                                    <h3 className={styles.heading}>Education</h3>
                                    <span className={styles.value}> Learned From Asgard was not that easy for me </span>
                                    <hr></hr>
                                    <h3 className={styles.heading}>Experience</h3>
                                    <span className={styles.value}> Worked under Captain America in the Team of Avengers </span>
                                    <hr></hr>
                                    <h3 className={styles.heading}>About</h3>
                                    <span className={styles.value}>Keep or Discard this field as per your planning </span>
                                </div>
                            </div>
                            <div className={styles.division}>
                                <div className={styles.content}>
                                    <h3 className={styles.friend}>Friends</h3>
                                    <div className={styles.friendflex}>
                                        <div className={styles.friendlist}>
                                            <img src="1.jpg" alt="" className="pic" />
                                            <span className={styles.friendname}>Ankit Singh</span>
                                        </div>
                                        <div className={styles.friendlist}>
                                            <img src="blank.jpg" alt="" className="pic" />
                                            <span className={styles.friendname}>Ananya</span>
                                        </div>
                                        <div className={styles.friendlist}>
                                            <img src="blank.jpg" alt="" className="pic" />
                                            <span className={styles.friendname}>Amartya</span>
                                        </div>
                                        <div className={styles.friendlist}>
                                            <img src="blank.jpg" alt="" className="pic" />
                                            <span className={styles.friendname}>Amitesh</span>
                                        </div>
                                        <div className={styles.friendlist}>
                                            <img src="blank.jpg" alt="" className="pic" />
                                            <span className={styles.friendname}>Unknown</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.post}>
                            The Home page Center post page to be called here ( Ananya )
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}