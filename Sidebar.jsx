  import React from 'react'
  import img1 from "../components/image/pic02.jpeg"

const Sidebar = () => {
    return (
         <div className="sidebar">
             <div className= "sidebar__list">
                 <div className= "sidebar__listimage">
                 </div>
               <div className= "profile__list">Web Devloper</div>
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
}

export default Sidebar
 