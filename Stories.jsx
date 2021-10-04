import React from 'react'
import storiesImage from '../components/image/pic02.jpeg'
// import img1 from '../components/image/pic02.jpeg'

const Stories = () => {
    return (
        <div className="stories">
            <div className="stories__col">
                <div className="strories__body">
                    <div className="stroies__image">
                        <div>
                    <img className="image" src={storiesImage} alt="stories pic" />
                    <img className="p_logo" src={storiesImage} alt="stories pic"/>web developer</div>
                    
                    </div>
                </div>
                </div>
                <div className="stories__col">
                <div className="strories__body">
                    <div>
                    <img className="image" src={storiesImage} alt="stories pic" />
                    <img className="p_logo" src={storiesImage} alt="stories pic" />software d</div>
        
                </div>
                </div>
                <div className="stories__col">
                <div className="strories__body">
                    <div>
                    <img  className="image" src={storiesImage} alt="stories pic" />
                    <img className="p_logo" src={storiesImage} alt="stories pic" />php developer</div>
                </div>
                </div>
                <div className="stories__col">
                <div className="strories__body">
                  <div>
                    <img className="image" src={storiesImage} alt="stories pic" />
                    <img className="p_logo" src={storiesImage} alt="stories pic" />reactjs d</div>
                </div>
                </div>
            
        </div>
    )
}

export default Stories
