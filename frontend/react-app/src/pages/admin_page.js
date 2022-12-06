import React, {useState, useEffect} from 'react';
import AdminItem from '../components/admin_item';
import adminItem from '../components/admin_item';
import AdminUserItem from '../components/admin_user_item';
import CartItem from '../components/cart_item';
import NavBar from '../components/navbar';
import PageFooter from '../components/page_footer';
import '../style.css';

export default function AdminPage() {
  const [allProducts, setAllProducts] = useState([]);
  const [allUsers, setAllUsers] = useState([]);

  const fetchProducts = () => {
    fetch('/api/v1/product', {method: 'GET'})
    .then(response => {
      response.json()
      .then(data => {
        setAllProducts(data);
      })
    });
  }

  const fetchUsers = () => {
    fetch('/api/v1/user', {method: 'GET'})
    .then(response => {
      response.json()
      .then(data => {
        setAllUsers(data);
      })
    });
  }

  const deleteUserItem = (id) => {
    console.log('Deleting item');
    fetch(`/api/v1/product/${id}`, {
      method: 'DELETE'
    }).then(resp => {
      fetchUsers();
    })
  }

  useEffect(() => {
    fetchProducts();
    fetchUsers();
  })


  return (
    <div>
      {/* <NavBar active="cart" /> */}

    <section id="cart" class="section-p1">
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
                  allProducts.map(function(adminItem, i) {
                    return <AdminItem item={adminItem} deleteUser={deleteUserItem}/>
                  })
                }

            </tbody>

        </table>

    </section>

    <section id="cart" class="section-p1">
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
                  allUsers.map(function(adminItem, i) {
                    return <AdminUserItem item={adminItem} />
                  })
                }
            </tbody>

        </table>

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
