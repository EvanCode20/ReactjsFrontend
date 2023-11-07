import React, {useState} from 'react';
import { useAuth } from './AuthContext';
import ErrorComponent from './ErrorComponent';

export const Register = (props) => {

  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPass] = useState('');
  const [error, setError] = useState('');

  function isUsernameValid(username) {
    
    let errorMsg = "";
    const minLength = 3;
    const maxLength = 20;
    const validChars = /^[a-zA-Z0-9_]+$/; // Alphanumeric and underscores only
  
    // Check the length of the username
    if (username.length < minLength) {
      errorMsg = "Username is too short"
      return errorMsg; 
    }
  
    if (username.length > maxLength) {
      errorMsg = "Username is too long"
      return errorMsg; 
    }
  
    // Check if the username contains only valid characters
    if (!validChars.test(username)) {
      errorMsg = "Username contains invalid characters"
      return errorMsg; 
      
    }
  
    // All checks passed, username is valid
    errorMsg = null
    return errorMsg;
  }

  function isPasswordValid(password) {
   
    let errorMsg = "";
    const minLength = 8; 
    const maxLength = 20; 
    const hasUppercase = /[A-Z]/.test(password); 
    const hasLowercase = /[a-z]/.test(password); 
    const hasDigit = /[0-9]/.test(password); 
    const hasSpecialChar = /[!@#$%^&*]/.test(password); 
  
    // Check the length of the password
    if (password.length < minLength) {
      errorMsg = "Password is too short";
      return errorMsg; 
    }
  
    if (password.length > maxLength) {
      errorMsg = "Password is too long";
      return errorMsg; 
    }
  
    // Check for uppercase, lowercase, digit, and special character
    if (!hasUppercase || !hasLowercase || !hasDigit || !hasSpecialChar) {
      errorMsg = "Missing required characters (digit,uppercase,lowercase,special)";
      return errorMsg;
    }
  
    // All checks passed, password is valid
    errorMsg = null
    return errorMsg;
  }

  const handleReg = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);

    let validUsername = false;
    let validPassword = false;
    if(isUsernameValid(username) == null)
    {
         validUsername = true;
    }
    else{
      setError(isUsernameValid(username));
    }

    if(isPasswordValid(password) == null){
      validPassword = true
    }
    else{
      setError(isPasswordValid(username));
    
    }

    if(validUsername && validPassword){

    
    const endPoint = 'https://localhost:3001/api/user/register'; 
    const data = {username : username , password : password}; 

  
    fetch(endPoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), 
    })
      .then((response) => response.json())
      .then((responseData) => {
        login(responseData.token,username);
        props.onFormSwitch('dashboard');
        console.log(responseData);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
  }

  return(
    <div className='auth-form-container'>
      <h2>Register</h2>
        <form className="login-form" onSubmit={handleReg}>
          <input  onChange={(e) => setUsername(e.target.value)}  name="username" id='username' type="username" placeholder='Enter your username'/>
          <input  onChange={(e) => setPass(e.target.value)} name='password' id='password' type='password' placeholder='Enter your password'/>
          <button type='submit'> Register </button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        {<ErrorComponent message={error} />}
    </div>
  );
}

export default Register;