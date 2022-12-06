import React, { useState } from 'react';
import logo from '../img/logo.png';
import { Link } from 'react-router-dom';
import '../login.css';

export default function SignUpPage() {
  const [username, setUsername] = useState('');
  const [pass, SetPass] = useState('');
  return (
    <div className="wrapper">
      <div class="logo">
        <Link to="/"><img src={logo} width="60px" height="60px" class="logo" alt="" /></Link>
    </div>
    <div class="center">
        <h1>Sign Up</h1>
        <form method="post">
            <div class="txt_field">
                <input type="text" value={username} required onChange={e => {
                  setUsername(e.target.value);
                }}/>
                <span></span>
                <label>Username</label>
            </div>
            <div class="txt_field">
                <input type="password" value={pass} required onChange={e => {
                  SetPass(e.target.value);
                }}/>
                <span></span>
                <label>Password</label>
            </div>
            <div class="pass">Forgot Password?</div>
            <input type="submit" value="Login" onSubmit={e => {
              fetch('/api/v1/user/login', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  name: username,
                  password: pass,
                  cart: []
                })
              })
              e.preventDefault();
            }}/>
            <div class="signup_link">
                Already have an account? <Link to='/login'>Login</Link>
            </div>
        </form>
    </div>
    </div>
  )
}
