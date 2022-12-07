import React, { useState } from 'react';
import logo from '../img/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import '../login.css';

export default function SignUpPage() {
  const [username, setUsername] = useState('');
  const [pass, SetPass] = useState('');
  const navigate = useNavigate();
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
            {/* <div class="pass">Forgot Password?</div> */}
            <input type="submit" value="Sign Up" onClick={e => {
              e.preventDefault();
              fetch('/api/v1/user/sign', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  name: username,
                  password: pass,
                  balance: 0,
                  avatarUrl: `https://avatars.dicebear.com/api/micah/${username}.svg`
                })
              }).then(resp => {
                resp.json()
                .then(data => {
                  console.log('Login Data =', data);
                  if(data != null) {
                    localStorage.setItem('userId', data);
                    console.log('Reached here');
                    navigate('/');
                  }
                  else {
                    setUsername('');
                    SetPass('');
                    alert('Some Error occured');
                  }
                })
              })
            }}/>
            <div class="signup_link">
                Already have an account? <Link to='/login'>Login</Link>
            </div>
        </form>
    </div>
    </div>
  )
}
