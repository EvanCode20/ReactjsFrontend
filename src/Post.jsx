import React, { useState, useEffect } from 'react';
import "./Post.css";
import { useAuth } from './AuthContext';


const Post = ({_id,description,subject,userId}) => {
    const {token ,user} = useAuth();
    let postId = 0;
    
    const [posts, setData] = useState([])

    useEffect(() => {
        getPosts();
      }, []);


    const getPosts = () => {
    const endPoint = 'https://localhost:3001/api/post/all'; 
     
    fetch(endPoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer ' + token,
      },
      body: JSON.stringify(), 
    })
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData.posts)
        console.log(responseData);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
      };



      const handleDelete = (subject) => {
        if (subject !== null) {
          let post = posts.find((post) => post.subject === subject);
      
          if (post) {
            console.log(post);
            let endPoint = 'https://localhost:3001/api/post/' + post._id;
            const data = { subject: subject, description: description, userId: user };
            console.log(data);
      
            fetch(endPoint, {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
              },
              body: JSON.stringify(data),
            })
            .then((response) => response.json())
            .then((responseData) => {
              console.log(responseData);
              
            })
            .catch((error) => {
              console.error('Error:', error);
            });
          } else {
            console.log("Post not found.");
          }
        }
      };

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
                    
                    {userId === user && (
        <button className='small-button' onClick={() => handleDelete(subject)}>Delete</button>
      )}
                </li>
            </ul>
        </div>
    )
    
}

export default Post