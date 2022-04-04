import React, { useContext } from "react"
import "./topbar.css"
import { Link } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";
import Menu from "@material-ui/core/Menu";

export default function Topbar() {
    const { user } = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER

    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    return (
        <div className="topbar">
            <div className="left">
                <span className="logo">AcadIn</span>
            </div>
            <div className="center">
                <div className="search">
                    <div className="searchicon" onClick={handleClick}>
                        <i className="fa fa-search"></i>
                    </div>
                    <input placeholder="Search for friends" className="searchinput"></input>
                </div>
                <Menu anchorEl={anchorEl} onClose={handleClose} open={Boolean(anchorEl)} className="menu">
                    <div className="menuitem">
                        {/* <span className="notfound">No Results Found </span> */}
                        <div className="friendlists">
                            <img src="1.jpg" alt="" className="pic" />
                            <span className="friendname">Ankit Singh</span>
                        </div>
                        <div className="friendlists">
                            <img src="1.jpg" alt="" className="pic" />
                            <span className="friendname">Ankit Singh</span>
                        </div>
                        <div className="friendlists">
                            <img src="1.jpg" alt="" className="pic" />
                            <span className="friendname">Ankit Singh</span>
                        </div>
                        <div className="friendlists">
                            <img src="1.jpg" alt="" className="pic" />
                            <span className="friendname">Ankit Singh</span>
                        </div>
                    </div>
                </Menu>
            </div>
            <div className="right">
                <div className="topbaricons">
                    <div className="fonticon">
                        <Link to='/' className="links"> <i className="fa-solid fa-house-chimney"></i> </Link>
                    </div>
                    <div className="fonticon">
                        <Link to='/chat' className="links">
                            <i className="fa-solid fa-message"></i>
                        </Link>
                    </div>
                    <div className="fonticon">
                        <Link to='/forum' className="links">
                            <div className="logoforum">
                                <i class="fa-solid fa-users-viewfinder"></i>
                            </div>
                        </Link>
                    </div>
                </div>
                <Link to={`/profile/${user._id}`} className="links">
                    <img src={user.profilePicture
                        ? PF + user.profilePicture
                        : PF + "noAvatar.png"} alt="" className="pic" />
                </Link>
                <Link to='/login' className="links">
                    <div className="logout">
                        <span className="logoutbutton"> Logout </span>
                        <i className="fa-solid fa-right-from-bracket"></i>
                    </div>
                </Link>
            </div>
        </div>
    )
}