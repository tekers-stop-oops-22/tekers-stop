import React from 'react';
import { json, Link } from 'react-router-dom';
import pImage from "../img/products/f1.jpg";
import '../style.css'

const stringToUuid = (str) => {
  str = str.replace('-', '');
  return 'xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx'.replace(/[x]/g, function(c, p) {
    return str[p % str.length];
  });
}

export default function ShopItem(props) {
  return (
      <div className="pro">
        <Link to={`/product/${props.item.id}`}>
        <img src={props.item?.imageUrl || pImage} alt="" width="400px" height="300px" style={{
          aspectRatio: "4/3"
        }}/>
        <div className="des">
            <span>{props.item?.name}</span>
            {/* <h5>tshirt1</h5> */}
            <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
            </div>
            <h4>${props.item?.price}</h4>

        </div>
        </Link>
        <a href="#" onClick={e => {
          const newItem = {
            'id': props.item.id,
            'quantity': 1
          };
          const userId = localStorage.getItem('userId');
          console.log('USER ID ', userId);
          fetch(`/api/v1/user/${userId}/cart`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(newItem)
          })
          .then(response => {
            console.log('Added item');
          });
        }}>
            <div className="dlink">
              <i className="fas fa-shopping-cart"></i>
            </div>
        </a>
      </div>
  );
}
