import React, {useState, useEffect} from "react";
import '../style.css';

export default function AdminItem(props) {

  return (
      <tr>
        <td>
          <a href="#">
            <i class="far fa-times-circle"></i>
          </a>
        </td>
        <td>
          <img src={props.item?.imageUrl} alt="" height="70px"/>
        </td>
        <td>{props.item?.name}</td>
        <td>{props.item?.description}</td>
        <td>${props.item?.price}</td>
      </tr>
  );
}
