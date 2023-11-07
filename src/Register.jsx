import React, {useState} from 'react';
import { useAuth } from './AuthContext';

export const Register = (props) => {

  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPass] = useState('');

  const handleReg = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);

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

  return(
    <div className='auth-form-container'>
      <h2>Register</h2>
        <form className="login-form" onSubmit={handleReg}>
          <input  onChange={(e) => setUsername(e.target.value)}  name="username" id='username' type="username" placeholder='Enter your username'/>
          <input  onChange={(e) => setPass(e.target.value)} name='password' id='password' type='password' placeholder='Enter your password'/>
          <button type='submit'> Register </button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
  );
}

export default Register;