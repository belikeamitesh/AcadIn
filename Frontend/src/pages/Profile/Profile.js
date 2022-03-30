import React, {useState, useEffect, useContext, createRef} from "react"
import styles from "./Profile.module.css";
import Topbar from "../../component/Topbar";
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Profile() {
    const [open, setOpen] = useState(false);
    const [user, setUser] = useState({});
    const {id} = useParams();
    const username = createRef();
    const bio = createRef();
    const education = createRef();
    const experience = createRef();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(async()=>{
        if (!id) return;
        const res = await axios.get(`http://localhost:5000/user/${id}`);
        console.log(res.data);
        setUser(res.data);
        console.log(user);
    }, []);

    const updateUser = async() => {
        console.log(username.current.value);
        console.log(bio.current.value);
        console.log(education.current.value);
        console.log(experience.current.value);
        const body = {userId:id, username, bio, education, experience};
        const res = await axios.put(`http://localhost:5000/user/${id}/updatebio`, body );
        console.log(res.data);
        // setUser(res.data);
        // user = await axios.get(`http://localhost:5000/user/${user._id}`);
    }

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
                    <span className={styles.bio}> {user.bio} </span>
                    {/* Remove edituderprofile for friend's profile */}
                    <span className={styles.edituserprofile} onClick={handleClickOpen}>
                        <i class="fa-solid fa-pen"></i>
                        <span className={styles.space}>Edit profile</span>
                    </span>
                    <Dialog open={open} onClose={handleClose}>
                        <div className={styles.dialog}>
                            <DialogTitle >
                                <div className={styles.dialogtitle}>
                                    <span className={styles.dialogtit}>Edit Profile</span>
                                    <span className={styles.dialogwarn}>Warning* : Don't enter anything to the field that you don't want to change</span>
                                </div>
                                <hr></hr>
                            </DialogTitle>
                            <DialogContent>
                                <div className={styles.dialogbody}>
                                    <span className={styles.dialogtext}>Name </span>
                                    <input placeholder="Enter your Name" className={styles.dialoginput} ref={username} />
                                </div>
                                <div className={styles.dialogbody}>
                                    <span className={styles.dialogtext}>Bio </span>
                                    <input placeholder="Enter bio here" className={styles.dialoginput} ref={bio}/>
                                </div>
                                <div className={styles.dialogbody}>
                                    <span className={styles.dialogtext}>Education </span>
                                    <input placeholder="Enter you Highest Education" className={styles.dialoginput} ref={education} />
                                </div>
                                <div className={styles.dialogbody}>
                                    <span className={styles.dialogtext}>Experience </span>
                                    <input placeholder="Enter your Experience" className={styles.dialoginput} ref={experience} />
                                </div>
                                <div className={styles.dialogbody}>
                                    <span className={styles.dialogtext}>About </span>
                                    <input placeholder="Enter about you" className={styles.dialoginput} />
                                </div>
                            </DialogContent>
                            <DialogActions>
                                <div className={styles.dialogclose} onClick={handleClose}>
                                    <span className={styles.dialogcancel}> Cancel </span>
                                    <span className={styles.dialogsave} onClick={updateUser}> Save Changes </span>
                                </div>
                            </DialogActions>
                        </div>
                    </Dialog>
                    {/* Remove addnew division for self profile */}
                    <div className={styles.addnew}>
                        <span className={styles.addfriend}>
                            <i class="fa-solid fa-user-plus"></i>
                            <span className={styles.space}>Add Friend</span>
                        </span>
                        {/* Remove friend, if already a friend */}
                        {/* <span className={styles.removefriend}>
                            <i class="fa-solid fa-user-minus"></i>
                            <span className={styles.space}>Remove Friend</span>
                        </span> */}
                        <span className={styles.textfriend}>
                            <i class="fa-brands fa-facebook-messenger"></i>
                            <span className={styles.space}>Message</span>
                        </span>
                    </div>
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