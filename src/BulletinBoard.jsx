import React, { useEffect, useState } from 'react';
import Post from './Post';
import { useAuth } from './AuthContext';

export const BulletinBoard = () => {
    const { token } = useAuth();
    const [posts, setData] = useState([])

    useEffect(() => {
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
      },);


  return (
    <div>
        
      {posts.map((post)=> (
                <Post
                  description={post.description}
                  subject={post.subject}
                  userId={post.userId}
                  />
            ))}
    </div>
  );
}

export default BulletinBoard;