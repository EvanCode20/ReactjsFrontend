import React, {useState} from 'react';
import { useAuth } from './AuthContext';
import ErrorComponent from './ErrorComponent';

export const CreatePost = () => {
    const {token ,user} = useAuth();
    const [subject, setSubject] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');

   function isSubjectValid(s)
   {
    let errorMsg = "";
    const minLength = 3;
    const maxLength = 50;

    if (s.length < minLength) {
        errorMsg = "Subject is too short"
        return errorMsg; 
      }
    
      if (s.length > maxLength) {
        errorMsg = "Subject is too long"
        return errorMsg; 
      }

      // All checks passed, subject is valid
    errorMsg = null
    return errorMsg;
   }

   function isDescValid(d)
   {
    let errorMsg = "";
    const minLength = 3;
    const maxLength = 200;

    if (d.length < minLength) {
        errorMsg = "Description is too short"
        return errorMsg; 
      }
    
      if (d.length > maxLength) {
        errorMsg = "Description is too long"
        return errorMsg; 
      }

      // All checks passed, description is valid
    errorMsg = null
    return errorMsg;
   }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let validSubject = false;
    let validDesc = false;

    if(isSubjectValid(subject) == null)
    {
        validSubject = true;
    }
    else{
        setError(isSubjectValid(subject));
    }


    if(isDescValid(description) == null){
        validDesc = true;
    }
    else{
        setError(isDescValid(description));
    }

    if(validSubject && validDesc){
    
    
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
        setError("Post has been created!")
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }


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
      {<ErrorComponent message={error} />}
    </div>
  );
}

export default CreatePost;