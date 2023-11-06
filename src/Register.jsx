import React, {useState} from 'react';

export const Register = (props) => {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleReg = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(pass);
  }

  return(
    <div className='auth-form-container'>
      <h2>Register</h2>
        <form className="login-form" onSubmit={handleReg}>
          <input  onChange={(e) => setEmail(e.target.value)}  name="email" id='email' type="email" placeholder='Enter your email'/>
          <input  onChange={(e) => setPass(e.target.value)} name='password' id='password' type='password' placeholder='Enter your password'/>
          <button type='submit'> Register </button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
  );
}

export default Register;