import React, { useState } from 'react';
import logo from '../img/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import '../login.css';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [pass, SetPass] = useState('');
  const navigate = useNavigate();
  return (
    <div className='wrapper'>
      <div className="logo">
        <Link to="/"><img src={logo} width="60px" height="60px" className="logo" alt="" /></Link>
    </div>
    <div className="center">
        <h1>Login</h1>
        <form method="post">
            <div className="txt_field">
                <input type="text" value={username} required onChange={e => {
                  setUsername(e.target.value);
                }}/>
                <span></span>
                <label>Username</label>
            </div>
            <div className="txt_field">
                <input type="password" value={pass} required onChange={e => {
                  SetPass(e.target.value);
                }}/>
                <span></span>
                <label>Password</label>
            </div>
            <div className="pass">Forgot Password?</div>
            <input type="submit" value="Login" onClick={e => {
              e.preventDefault();
              fetch('/api/v1/user/sign', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  name: username,
                  password: pass,
                  cart: []
                })
              }).then(resp => {
                resp.json()
                .then(data => {
                  console.log('Login Data =', data);
                  if(data != null) {
                    localStorage.setItem('userId', data.id);
                    console.log('Reached here');
                    navigate('/');
                  }
                  else {
                    setUsername('');
                    SetPass('');
                    alert('Incorrect credentials');
                  }
                })
              })
            }}/>
            <div className="signup_link">
                Not a Member? <Link to='/signup'>Signup</Link>
            </div>
        </form>
    </div>
    </div>
  )
}
