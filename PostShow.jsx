import React from 'react'
import postImage from '../components/image/pic06.jpg'
import postprofile from '../components/image/pic02.jpeg'
import one from '../components/image/pic05.jpg'
import two from '../components/image/pic03.jpg'
import three from '../components/image/pic07.jpg'
import four from '../components/image/pic08.jpeg'
import five from '../components/image/pic09.jpeg'
import SidebarRight from './SidebarRight'
const PostShow = () => {
    return (
        <div className="postlist">
            <div>
                {/* 01 post */}
                <button className="btn">Hello clickfor refresh</button>
            <img src={postprofile} className="postprofile" alt="userprofile" />
            <div className="wirtepost"><p>You can do anything!</p>
            <p>"just get up and do it"</p>
            <p> “Your life only gets better when you get better.”- Brian Tracy</p>
            </div>
            </div>
            <img src={postImage}  className="postimg" alt="userpost" />    
             {/* 02 post */}
            <div>
            <img src={postprofile} className="postprofile" alt="userprofile" />
            <div className="wirtepost"><p>You can do anything!</p>
            <p>"just get up and do it"</p>
            <p> “Your life only gets better when you get better.”- Brian Tracy</p>
            </div>
            </div>
            <img src={one}  className="postimg" alt="userpost" />
             {/* 03 post */}
             <div>
            <img src={postprofile} className="postprofile" alt="userprofile" />
            <div className="wirtepost"><p>You can do anything!</p>
            <p>"just get up and do it"</p>
            <p> “Your life only gets better when you get better.”- Brian Tracy</p>
            </div>
            </div>
            <img src={two}  className="postimg" alt="userpost" />
            {/* 04 post */}
            <div>
            <img src={postprofile} className="postprofile" alt="userprofile" />
            <div className="wirtepost"><p>You can do anything!</p>
            <p>"just get up and do it"</p>
            <p> “Your life only gets better when you get better.”- Brian Tracy</p>
            </div>
            </div>
            <img src={three}  className="postimg" alt="userpost" />
            {/* 05 post */}
            <div>
             <img src={postprofile} className="postprofile" alt="userprofile" />
             <div className="wirtepost"><p>You can do anything!</p>
             <p>"just get up and do it"</p>
             <p> “Your life only gets better when you get better.”- Brian Tracy</p>
             </div>
             </div>
             <img src={four}  className="postimg" alt="userpost" />
            {/* 06 post */}
            <div>
            <img src={postprofile} className="postprofile" alt="userprofile" />
            <div className="wirtepost"><p>You can do anything!</p>
            <p>"just get up and do it"</p>
            <p> “Your life only gets better when you get better.”- Brian Tracy</p>
            </div>
            </div>
            <img src={five}  className="postimg" alt="userpost" />
            {/* 07 post */}
            <div>
            <img src={postprofile} className="postprofile" alt="userprofile" />
            <div className="wirtepost"><p>You can do anything!</p>
            <p>"just get up and do it"</p>
            <p> “Your life only gets better when you get better.”- Brian Tracy</p>
            </div>
            </div>
            <img src={three}  className="postimg" alt="userpost" />
            {/* 08 post */}
            <div>
            <img src={postprofile} className="postprofile" alt="userprofile" />
            <div className="wirtepost"><p>You can do anything!</p>
            <p>"just get up and do it"</p>
            <p> “Your life only gets better when you get better.”- Brian Tracy</p>
            </div>
            </div>
            <img src={four}  className="postimg" alt="userpost" />
            <SidebarRight />
        </div>
    )
}

export default PostShow
