import React, {useState, useEffect} from "react";
import { json } from "react-router-dom";
import pImage from "../img/products/f1.jpg";
import '../style.css';

export default function CartItem(props) {
  const userId = localStorage.getItem('userId');
  const [qty, setQty] = useState(props.item.quantity);
  const [cartItem, setCartItem] = useState({});

  useEffect(() => {
    fetch(`/api/v1/product/${props.item.id}`, {method:'GET'})
    .then(responce => {
      responce.json()
      .then(data => {
        setCartItem(data);
      });
    })
  })

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
            const newVal = e.target.value > 0 ? e.target.value : 1;
            const added = e.target.value > qty;
            setQty(newVal);
            fetch(`/api/v1/user/${userId}/cart`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                'id': props.item.id,
                'quantity': added ? 1 : -1, 
              })
            });
          }}/>
        </td>
        <td>${(cartItem?.price * qty)}</td>
      </tr>
  );
}
