import React, { useState } from 'react';
import logo from '../img/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import '../login.css';

export default function AddItemPage() {
  const [name, setName] = useState('');
  const [desc, SetDesc] = useState('');
  const [url, SetUrl] = useState('');
  const [price, SetPrice] = useState(0);
  const navigate = useNavigate();
  return (
    <div className='wrapper'>
      <div className="logo">
        <Link to="/"><img src={logo} width="60px" height="60px" className="logo" alt="" /></Link>
    </div>
    <div className="center">
        <h1>Add Item</h1>
        <form method="post">
            <div className="txt_field">
                <input type="text" value={name} required onChange={e => {
                  setName(e.target.value);
                }}/>
                <span></span>
                <label>Name</label>
            </div>
            <div className="txt_field">
                <input type="text" value={desc} required onChange={e => {
                  SetDesc(e.target.value);
                }}/>
                <span></span>
                <label>Description</label>
            </div>
            <div className="txt_field">
                <input type="number" value={price} required onChange={e => {
                  SetPrice(e.target.value);
                }}/>
                <span></span>
                <label>Price</label>
            </div>
            <div className="txt_field">
                <input type="text" value={url} required onChange={e => {
                  SetUrl(e.target.value);
                }}/>
                <span></span>
                <label>Image URL</label>
            </div>
            <input type="submit" value="Add Item" onClick={e => {
              e.preventDefault();
              fetch('/api/v1/product', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  name: name,
                  description: desc,
                  price: price,
                  imageUrl: url
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
