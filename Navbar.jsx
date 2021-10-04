import React from 'react'
import {FaFacebook} from "react-icons/fa";
import {RiHome7Fill,RiAccountCircleLine,RiBankLine,RiMessengerLine,RiNotification3Fill,RiAccountPinCircleFill,RiAddLine} from "react-icons/ri";
import {FaPlay} from "react-icons/fa";
//import {RiBankLine} from "react-icons/ri";
//import {RiAccountCircleLine} from "react-icons/ri";
const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="Navbar__first">
                <div className="Navbar__logo"></div>
                <FaFacebook className="Navbar__logo" />
                <div className="Navbar__searchbar">
                    <input type="text" className="Navbar__search" placeholder="Facebook-Search"/>
                </div>
            </div>
            <div className="Navbar__middle">
                <span>
                <RiHome7Fill className= "middle__logo" />
                <span>
                <FaPlay  className= "middle__logo"/>
                </span>
                <span>
                <RiBankLine  className= "middle__logo"/>
                </span>
                <span>
                <RiAccountCircleLine  className= "middle__logo"/>
                </span>
                <div className="Navbar__middle-logo"></div>
                </span>
            </div>
            <div className="Navbar__last">
                <span>
                < RiAddLine className="Navbar__last_logo" />
                </span>
                <span>
                < RiMessengerLine className="Navbar__last_logo" />
                </span>
                <span>
                <RiNotification3Fill className="Navbar__last_logo"/>
                </span>
                <span>
                <RiAccountPinCircleFill className="Navbar__last_logo"/>
                </span>
                {/* <span>
                    <img src="./components/image/pic.jpg" alt="profile pic" height="100px" width="100px"  ></img>
                </span> */}
            
            </div>
            
        </div>
    )
}

export default Navbar
