import React, { useState, useEffect } from "react";
import NavBar from "../components/navbar";
import ShopItem from "../components/shop_item";
import "../style.css";
import PageFooter from "../components/page_footer";
import NavigateButtons from "../components/navigate_buttons";
import { useParams } from "react-router-dom";

function ShopPage() {
  const { page } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    // const { page } = this.props.params;
    fetch('/api/v1/product', {method: 'GET'})
        .then(response => {
            response.json().then(data => {
                console.log(`Items = ${data}`);
                setItems(data);
            })
        });
  }, [page]);


    return (
      <div>
        <NavBar active="shop" />

        {/* <!--Header page--> */}
        <section id="page-header">
          <h2>#stayhome</h2>
          <p>save more with coupons and upto 70%off</p>
        </section>

        {/* <!--product1 here too by Vrihen--> */}
        <section id="product1" className="section-p1">
          <div className="pro-container">
            {
              items.map(function(item, i) {
                return <ShopItem item={item} />
              })
            }
          </div>
        </section>

        {/* <!--Page number--> */}
        <section id="pagination" className="section-p1">
          <NavigateButtons itemLength={items.length} currentPage={parseInt(page, 10)}/>
        </section>

        <PageFooter />
      </div>
    );
}

export default ShopPage;