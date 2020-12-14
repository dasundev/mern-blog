import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import Api from '../../helper/API';




export default function PostPage(id) {
    let {postId} = useParams();
    
    const [post, setPost] = useState([])
    let api = new Api();
    
    api.getPostDetails({postId})
        .then((res) => setPost(res.data))
        .catch((err) => console.log(err))

    return (        
        <div>
            {post.title}
        </div>
    )
}


