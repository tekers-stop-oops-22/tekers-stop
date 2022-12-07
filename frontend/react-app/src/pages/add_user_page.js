import React, { useState } from 'react';
import logo from '../img/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import '../login.css';

export default function AddUserPage() {
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const [balance, SetBalance] = useState(0);
  const navigate = useNavigate();
  return (
    <div className='wrapper'>
      <div className="logo">
        <Link to="/"><img src={logo} width="60px" height="60px" className="logo" alt="" /></Link>
    </div>
    <div className="center">
        <h1>Add User</h1>
        <form method="post">
            <div className="txt_field">
                <input type="text" value={name} required onChange={e => {
                  setName(e.target.value);
                }}/>
                <span></span>
                <label>Name</label>
            </div>
            <div className="txt_field">
                <input type="text" value={pass} required onChange={e => {
                  setPass(e.target.value);
                }}/>
                <span></span>
                <label>Password</label>
            </div>
            <div className="txt_field">
                <input type="number" value={balance} required onChange={e => {
                  if(e.target.value >= 0)
                    SetBalance(e.target.value);
                }}/>
                <span></span>
                <label>Balance</label>
            </div>
            <input type="submit" value="Add User" onClick={e => {
              e.preventDefault();
              fetch('/api/v1/user', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  name: name,
                  password: pass,
                  balance: balance,
                  avatarUrl: `https://avatars.dicebear.com/api/micah/${name}.svg`
                })
              }).then(resp => {
                console.log('Reached here');
                navigate('/admin');
              })
            }}/>
            <div className="signup_link">
                Return to <Link to='/admin'>Admin Console</Link>
            </div>
        </form>
    </div>
    </div>
  )
}
