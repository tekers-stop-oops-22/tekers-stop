import React, {useState, useEffect} from 'react';
import CartItem from '../components/cart_item';
import NavBar from '../components/navbar';
import PageFooter from '../components/page_footer';
import '../style.css';

export default function CartPage() {
  const userId = localStorage.getItem('userId');
  const [cartItems, setCartItems] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch('/api/v1/product', {method: 'GET'})
    .then(response => {
      response.json()
      .then(data => {
        setAllProducts(data);
      })
    });
    fetch(`/api/v1/user/${userId}/cart`, {method:'GET'})
    .then(response => {
      response.json()
      .then(data => {
        setCartItems(data);
      })
    })
  })

  const getItemPrice = (id) => {
    for(var product of allProducts) {
      console.log(product.id, id);
      if(product.id === id) {
        return product.price;
      }
    }
  };

  const totalPrice = () => {
    let _price = 0;
    for(var cartItem of cartItems) {
      _price += cartItem.quantity * getItemPrice(cartItem.id);
    }
    return _price;
  };

  return (
    <div>
      <NavBar active="cart" />

    {/* <!--Header page--> */}
    <section id="page-header" class="about-header">
        <h2>#let's talk</h2>
        <p>random text</p>

    </section>

    <section id="cart" class="section-p1">
        <table width="100%">
            <thead>
                <tr>
                    <td>Remove</td>
                    <td>Image</td>
                    <td>Product</td>
                    <td>Price</td>
                    <td>Quantity</td>
                    <td>Subtotal</td>
                </tr>
            </thead>
            <tbody>
                {
                  cartItems.map(function(cartItem, i) {
                    return <CartItem item={cartItem} />
                  })
                }

            </tbody>

        </table>

    </section>

    <section id="cart-add" class="section-p1">
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
    </section>




    {/* <!--footer section--> */}
    <PageFooter />
    </div>
  )
}
