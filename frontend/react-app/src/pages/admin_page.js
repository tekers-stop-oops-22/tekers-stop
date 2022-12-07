import React, { useState, useEffect } from 'react';
import AdminItem from '../components/admin_item';
import adminItem from '../components/admin_item';
import AdminUserItem from '../components/admin_user_item';
import CartItem from '../components/cart_item';
import NavBar from '../components/navbar';
import PageFooter from '../components/page_footer';
import '../style.css';
import logo from '../img/logo.png';
import { Link, useNavigate } from 'react-router-dom';

export default function AdminPage() {
  const [allProducts, setAllProducts] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/api/v1/product', { method: 'GET' })
      .then(response => {
        response.json()
          .then(data => {
            setAllProducts(data);
          })
      });
    fetch('/api/v1/user', { method: 'GET' })
      .then(response => {
        response.json()
          .then(data => {
            setAllUsers(data);
          })
      });
  })


  return (
    <div>
      {/* <NavBar logout button /> */}
      <section id="header">
        <Link to="#"><img src={logo} width="60px" height="60px" class="logo" alt="" /></Link>

        <div>
          <ul id="navbar">

            <div>
              <li className="show">
                  <button className="normal" onClick={e => {
                    localStorage.removeItem('userId');
                    navigate('/login');
                  }}>Logout</button>
              </li>
            </div>
            <a href="#" id="close"><i className="far fa-times"></i></a>
          </ul>
        </div>
      </section>



      <section id="cart" className="section-p1">
        <h2>PRODUCTS</h2>
        <table width="100%">
          <thead>
            <tr>
              <td>Remove</td>
              <td>Image</td>
              <td>Product</td>
              <td>Description</td>
              <td>Price</td>
            </tr>
          </thead>
          <tbody>
            {
              allProducts.map(function (adminItem, i) {
                return <AdminItem item={adminItem} />
              })
            }

          </tbody>

        </table>

      </section>
      <section id="cart-add" className="section-p1">
        <div id="coupon">
          <div>
            <button className="normal" onClick={e => navigate('/additem')}>Add Items</button>
          </div>
        </div>
      </section>

      <section id="cart" className="section-p1">
        <h2>PRODUCTS</h2>
        <table width="100%">
          <thead>
            <tr>
              <td>Remove</td>
              <td>Avatar</td>
              <td>Username</td>
              <td>Balance</td>
            </tr>
          </thead>
          <tbody>
            {
              allUsers.map(function (adminItem, i) {
                return <AdminUserItem item={adminItem} />
              })
            }
          </tbody>

        </table>

      </section>
      <section id="cart-add" className="section-p1">
        <div id="coupon">
          <div>
            <button class="normal" onClick={e => {
              navigate('/adduser');
            }}>Add Users</button>
          </div>
        </div>
      </section>

      {/* <section id="cart-add" class="section-p1">
        <div id="coupon">
            <h3>Apply Coupon</h3>
            <div>
                <input type="text" placeholder="Enter Your Coupon" />
                <button class="normal">Apply</button>
            </div>
        </div>

        <div id="subtotal">
            <h3>Cart Totals</h3>
            <table>
                <tr>
                    <td>Cart Subtotal</td>
                    <td>${totalPrice()}</td>
                </tr>
                <tr>
                    <td>Shipping</td>
                    <td>Free</td>
                </tr>
                <tr>
                    <td><strong>Total</strong></td>
                    <td><strong>${totalPrice()}</strong></td>
                </tr>
            </table>
            <button class="normal">Proceed to chechout</button>
        </div>
    </section> */}




      {/* <!--footer section--> */}
      <PageFooter />
    </div>
  )
}
