import React from 'react'
import img1 from "../components/image/pic02.jpeg"

const SidebarRight = () => {
    return (
        <div>
            
            <div className="sidebarRight">
             <div className= "sidebar_lists">
                 <div className= "sidebar_listimg">
                 </div>
               <div className= "profile_lists">Web Devloper</div>
                <img src={img1} alt="srcpic" />
                <div className= "profile__list">software Devloper</div>
                <img src={img1} alt="srcpic" />
                <div className= "profile__list">php Devloper</div>
                <img src={img1} alt="srcpic" />
                <div className= "profile__list">reactjs Devloper</div>
                <img src={img1} alt="srcpic" />
                <div className= "profile__list">Nodejs Devloper</div>
                <img src={img1} alt="srcpic" />
                <div className= "profile__list">android Devloper</div>
                <img src={img1} alt="srcpic" />
                <div className= "profile__list">java Devloper</div>
                <img src={img1} alt="srcpic" />
                <div className= "profile__list">fullstack Devloper</div>
                <img src={img1} alt="srcpic" />
             </div>            
         </div>
     )
        </div>
    )
}

export default SidebarRight
