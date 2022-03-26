import React from "react"
import "./topbar.css"

export default function Topbar() {
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
                    <input type="text" placeholder="Search Here" className="searchinput">
                       
                    </input>
                </div>
            </div>
            <div className="right">
                <div className="topbaricons">
                    <div className="fonticon">
                        <i className="fa-solid fa-house-chimney"></i>
                    </div>
                    <div className="fonticon">
                        <i className="fa-solid fa-user-plus"></i>
                        <span className="badge">1</span>
                    </div>
                    <div className="fonticon">
                        <i class="fa-solid fa-message"></i>
                        <span className="badge">2</span>
                    </div>
                    <div className="fonticon">
                        <i className="fa-solid fa-bell" aria-hidden="true"></i>
                        <span className="badge">1</span>
                    </div>
                </div>
                <img src="1.jpg" alt="" className="pic" />
            </div>
        </div>
    )
}