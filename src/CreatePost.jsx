import React, {useState} from 'react';
import { useAuth } from './AuthContext';


export const CreatePost = () => {
    const {token ,user} = useAuth();
    const [subject, setSubject] = useState('');
    const [description, setDescription] = useState('');
  
   
  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    const endPoint = 'https://localhost:3001/api/post'; 
    const data = {subject : subject , description : description, userId : user}; 
    console.log(data);
  
    fetch(endPoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer ' + token,
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



    setSubject(''); 
    setDescription(''); 
    };

  return (
    <div className='auth-form-container'>
        <form className="login-form" >
      <h2>Create a Post</h2>
      <div>
      
      <input
        type="text"
        id="subject"
        onChange={(e) => setSubject(e.target.value)}
        placeholder='Enter your subject'
        value={subject}
      />
      </div>
      <div>
      
      <textarea
        id="description"
        onChange={(e) => setDescription(e.target.value)}
        placeholder='Enter your description'
        value={description}
        />
      <div>
      <button onClick={handleSubmit}>Create</button> </div>
      </div>
      </form>
    </div>
  );
}

export default CreatePost;