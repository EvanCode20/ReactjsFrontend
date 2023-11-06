import React, {useState} from 'react';

export const Login = (props) => {
  
   const [email, setEmail] = useState('');
   const [pass, setPass] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(pass);
  }

  return(
    <div className='auth-form-container'>
      <h2>Login</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <input  onChange={(e) => setEmail(e.target.value)}  name="email" id='email' type="email" placeholder='Enter your email'/>
          <input  onChange={(e) => setPass(e.target.value)} name='password' id='password' type='password' placeholder='Enter your password'/>
          <button name='btnLogin' id='btnLogin' type='submit'> Login </button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
    </div>
  );
}

export default Login