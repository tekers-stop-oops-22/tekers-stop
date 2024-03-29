import React, {useState, useEffect} from "react";
import '../style.css';

export default function AdminUserItem(props) {

  return (
      <tr>
        <td>
          <a href="#" onClick={e => {
            console.log('Deleting item');
            console.log(props.item.id);
            fetch(`/api/v1/user/${props.item.id}`, {
              method: 'DELETE'
            });
          }}>
            <i class="far fa-times-circle"></i>
          </a>
        </td>
        <td>
          <img src={props.item?.avatarUrl} alt="" height="70px"/>
        </td>
        <td>{props.item?.name}</td>
        <td>${props.item?.balance}</td>
      </tr>
  );
}
