import React, {useState} from 'react';


export const Login = (props) => {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
   const [username, setUsername] = useState('');
   const [password, setPass] = useState('');
   
   
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);
    
    const endPoint = 'https://localhost:3001/api/user/login'; 
    const data = {username : "user2" , password : "password2"}; 

  
    fetch(endPoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), 
    })
      .then((response) => response.json())
      .then((responseData) => {
        props.onFormSwitch('dashboard');
        console.log(responseData);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return(
    <div className='auth-form-container'>
      <h2>Login</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <input  onChange={(e) => setUsername(e.target.value)}  name="username" id='username' type="username" placeholder='Enter your username'/>
          <input  onChange={(e) => setPass(e.target.value)} name='password' id='password' type='password' placeholder='Enter your password'/>
          <button name='btnLogin' id='btnLogin' type='submit'> Login </button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
    </div>
  );
}

export default Login