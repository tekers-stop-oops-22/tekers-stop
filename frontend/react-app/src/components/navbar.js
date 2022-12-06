import React from 'react';
import logo from '../img/logo.png';
import '../style.css';
import { Link } from 'react-router-dom';

export default function NavBar(props) {
  return (
    <div>
      <section id="header">
        <a href="#"><img src={logo} width="60px" height="60px" className="logo" alt=""/></a>
        <span>TEKER'S STOP</span>
        <div>
            <ul id="navbar">
                <li><Link className={props.active == 'home' ? "active" : ""} to="/">Home</Link></li>
                <li><Link className={props.active == 'shop' ? "active" : ""} to="/shop/1">Shop</Link></li>
                <li><Link className={props.active == 'about' ? "active" : ""} to="/about">About</Link></li>
                <li><Link className={props.active == 'contact' ? "active" : ""} to="/contact">Contacts</Link></li>
                <li lg="lg-bag"><Link className={props.active == 'cart' ? "active" : ""} to="/cart"><i className="fas fa-shopping-cart"></i></Link></li>
                <a href="#" id="close"><i className="far fa-times"></i></a>
            </ul>
        </div>
        <div id="mobile">
            <Link to="/cart"><i className="far fa-shopping-bag"></i></Link>
            <i id="bar" className="fas fa-outdent"></i>
        </div>
    </section>
    </div>
  )
}
