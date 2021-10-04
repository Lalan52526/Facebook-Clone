import React from 'react'
import Userimg from '../components/image/pic02.jpeg'
import { FaVideo,FaFileImage,FaRegGrinHearts } from "react-icons/fa";
const Create = () => {
    return (
        <div className="create">
            <div className="create__first">
                <div className="create__first-img">
                    <img src={Userimg} alt="user"/>
                </div>
                   <span className="inputs"> <input type="text"placeholder="Write something here......." /></span>
            </div>
            <div className="below_inputs">
                <span className="redcolor"><FaVideo  className="icon_first"/>Live Video</span>
                <span  className="bluecolor"><FaFileImage className="icon_first"/>Photo</span>
                <span  className="greencolor"><FaRegGrinHearts  className="icon_first"/>Felling</span>
            </div>
        </div>
    )
}

export default Create
