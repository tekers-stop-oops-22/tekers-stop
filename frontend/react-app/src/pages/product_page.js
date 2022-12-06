import React, { useState, useEffect } from 'react';
import NavBar from '../components/navbar';
import PageFooter from '../components/page_footer';
import ShopItem from '../components/shop_item';
import f1 from "../img/products/f1.jpg";
import {useParams} from 'react-router-dom';

export default function ProductPage() {
  const [qty, setQty] = useState(1);
  const [item, setItem] = useState({});
  const [displayItems, setDisplayItems] = useState([]);
  const [cartText, setCartText] = useState('Add to Cart');
  const { productId } = useParams();

  useEffect(() => {
    console.log(`ID = ${productId}`);
    fetch(`/api/v1/product/`, {method: 'GET'})
    .then(response => {
        response.json()
        .then(data => {
            for(var product of data) {
                if(product.id === productId) {
                    setItem(product);
                    setDisplayItems(data);
                    window.scrollTo(0, 0);
                    return;
                }
            }
        })
    });
  }, [productId]);

  return (
    <div>
      <NavBar active="shop" />

    <section id="prodetails" class="section-p1">
        <div class="single-pro-image">
            <img src={item?.imageUrl} width="100%" id="MainImg" alt="" />
        </div>

        <div class="single-pro-details">
            <h6>{item?.name}</h6>
            <h4>{item?.description}</h4>
            <h2>${item?.price}</h2>
            {/* <select>
                <option>Select Size</option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
                <option>XL</option>
                <option>XXL</option>
            </select> */}
            <input type="number" value={qty} onChange={e => {
                const newVal = e.target.value > 0 ? e.target.value : 1;
                setQty(newVal);
            }}/>
            <button class="normal" onClick={e => {
                const userId = localStorage.getItem('userId');
                fetch(`/api/v1/user/${userId}/cart`, {
                    method: 'PUT',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                      'id': item.id,
                      'quantity': qty, 
                    })
                  }).then(res => {
                    setCartText('Added to Cart');
                    setTimeout(() => {setCartText('Add to Cart')}, 3000);
                });
            }}>{cartText}</button>
            <h4>Product Details</h4>
            <span>dsjchjsdkcajcnkaskcals</span>
        </div>
    </section>

    {/* <!--product1 here too by Vrihen--> */}
    <section id="product1" class="section-p1">
        <h2>Featured Products</h2>
        <p>Summer Collection New Morden Design</p>
        <div class="pro-container">
            {
                displayItems.map(function(_item, i) {
                    if(i < 4) {
                        return <ShopItem item={_item} />;
                    }
                })
            }
        </div>
    </section>

    {/* <!--newsletter section--> */}
    <PageFooter />

    </div>
  )
}
