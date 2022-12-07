import React, {useState, useEffect} from "react";
import { json } from "react-router-dom";
import pImage from "../img/products/f1.jpg";
import '../style.css';

export default function CartItem(props) {
  const userId = parseInt(localStorage.getItem('userId'), 10);
  const [qty, setQty] = useState(props.item.quantity);
  const [cartItem, setCartItem] = useState({});

  useEffect(() => {
    fetch(`/api/v1/product/${props.item.product}`, {method:'GET'})
    .then(responce => {
      responce.json()
      .then(data => {
        setCartItem(data);
      });
    })
  }, []);

  return (
      <tr>
        <td>
          <a href="#">
            <i class="far fa-times-circle"></i>
          </a>
        </td>
        <td>
          <img src={cartItem?.imageUrl} alt="" height="70px"/>
        </td>
        <td>{cartItem?.name}</td>
        <td>${cartItem?.price}</td>
        <td>
          <input type="number" value={qty} onChange={e => {
            if(e.target.value < 0) return;
            const newVal = e.target.value;
            setQty(newVal);
            fetch(`/api/v1/cart/`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                'product': props.item.product,
                'user': userId,
                'quantity': newVal, 
              })
            });
          }}/>
        </td>
        <td>${(cartItem?.price * qty)}</td>
      </tr>
  );
}
