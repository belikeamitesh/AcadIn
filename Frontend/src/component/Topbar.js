import React, { useContext } from "react"
import "./topbar.css"
import { Link } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

export default function Topbar() {
    const { user } = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    return (
        <div className="topbar">
            <div className="left">
                <span className="logo">AcadIn</span>
            </div>
            <div className="center">
                <div className="search">
                    <div className="searchicon">
                        <i className="fa fa-search"></i>
                    </div>
                    <input placeholder="Search Here" className="searchinput"></input>
                </div>
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