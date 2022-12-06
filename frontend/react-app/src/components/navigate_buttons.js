import React from "react";
import "../style.css";
import { Link } from "react-router-dom";

export default function NavigateButtons(props) {
  if(props.itemLength <= 0) {
    return <></>;
  }
  if(props.itemLength <= 16) {
    return (
      <div>
        <Link to="/shop/1">1</Link>
      </div>
    );
  }
  const nums = [];
  for(var i = 0; i <= Math.floor(props.itemLength / 16); i += 16) {
    nums.push(i + 1);
  }
  if(props.currentPage >= Math.floor(props.itemLength / 16)) {
    return (
      <div>
        {
          nums.map(function(num, i) {
            return <Link to={`/shop/${num}`}>{num}</Link>
          })
        }
      </div>
    );
  }
  return (
    <div>
      {
        nums.map(function(num, i) {
          return <Link to={`/shop/${num}`}>{num}</Link>
        })
      }
      <Link to={`/shop/${props.currentPage + 1}`}>
        <i className="fas fa-angle-right"></i>
      </Link>
    </div>
  );
}
