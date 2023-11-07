import React from "react";
import "./Post.css";


const Post = ({description,subject,userId}) => {
    
    let postId = 0;

    return(
        <div>
            <ul>
                <li className="list" key={postId++}>
                    <p className="username">{userId}</p>
                    <div className="my-class">
                   
                        <p className="underline">Subject</p>
                        {subject}
                    
                    
                        <p className="underline">Description</p>
                        {description}
                    </div>
                    
                </li>
            </ul>
        </div>
    )
    
}

export default Post