import React from 'react';
import logo from '../img/logo.png';
import appImage from "../img/pay/app.jpg";
import playImage from "../img/pay/play.jpg";
import payImage from "../img/pay/pay.png";
import { Link } from 'react-router-dom';

export default function PageFooter() {
  return (
    <div>
      <section id="newsletter" className="section-p1 section-m1">
        <div className="newstext">
            <h4>Signup for news letter</h4>
            <p>get email updates about our latest shop and <span>special offers.</span>
            </p>
        </div>
        <div className="form">
            <input type="text" placeholder="your email address" />
            <button className="normal">Sign up</button>
        </div>

    </section>

    {/* <!--footer section--> */}
    <footer className="section-p1">
        <div className="row">

            <div className="col">
                <img className="logo" img src={logo} width="100px" height="100px" alt="" />
                <h4>Contact</h4>
                <p><strong>Address: </strong>BITS Pilani </p>
                <p><strong>Hours: </strong>9:00-22:30,Mon-Sat </p>
                <p><strong>Address: </strong>BITS Pilani </p>
                <div className="follow">
                    <h4>Follow us</h4>
                    <div className="icon">
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-pinterest"></i>
                        <i className="fab fa-youtube"></i>
                    </div>
                </div>
            </div>
            <div className="col">
                <h4>About</h4>
                <a href="#">About us</a>
                <a href="#">Delivery Information</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms & Conditions</a>
                <a href="#">Contact us</a>

            </div>
            <div className="col">
                <h4>My Account</h4>
                <Link to='/login'>Sign in</Link>
                <a href="#">View Cart</a>
                <a href="#">My Wishlist</a>
                <a href="#">Track my order</a>
                <a href="#">Help</a>
            </div>
            <div className="col install">
                <h4>Install App</h4>
                <p>From Appstore or Google Store</p>
                <div className="row">
                    <img src={appImage} alt="" />
                    <img src={playImage} alt="" />

                </div>
                <p>Secured Payment Gateways</p>
                <img src={payImage} alt="" />
            </div>

        </div>
        <div className="copyright">
            <p> &#169; BITS PILANI ECOMMERCE WEB</p>
        </div>
    </footer>
    </div>
  )
}
