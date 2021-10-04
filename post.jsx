import React from 'react'
import Stories from './Stories'
import Create from './Create'
import PostShow from './PostShow'

const post = () => {
    return (
        <div className="post__lists">
            <Stories />
            < Create />
            <PostShow />
        </div>
    )
}

export default post
