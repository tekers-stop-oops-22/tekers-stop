import React, {Component} from 'react';
import hero4 from './img/hero4.png';
import f1 from "./img/features/f1.png";
import f2 from "./img/features/f2.png";
import f3 from "./img/features/f3.png";
import f4 from "./img/features/f4.png";
import f5 from "./img/features/f5.png";
import f6 from "./img/features/f6.png";
import './style.css';
import NavBar from './components/navbar';
import ShopItem from './components/shop_item';
import PageFooter from './components/page_footer';
// import { useNavigate } from 'react-router-dom';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
        };
    }

    componentDidMount() {
    fetch('api/v1/product', {method: 'GET'})
        .then(response => {
            response.json().then(data => {
                console.log(data);
                this.setState({items: data});
            })
        });
    }

  render() { 
    return (
    <div className="App">
      <NavBar active="home"/>

    <section id="hero">
        <img src={hero4} alt="bg-img" id="bg-img" />
        <h4>Trade In Offer</h4>
        <h2>Super Value Trades</h2>
        <h1>On All Products</h1>
        <p>save more with coupons and upto 70%off</p>
        <button>Shop Now</button>

    </section>

    <section id="feature" className="section-p1">
        <div className="fe-box">
            <img src={f1} alt="" />
            <h6>Free Shipping</h6>
        </div>

        <div className="fe-box">
            <img src={f2} alt="" />
            <h6>Online Order</h6>
        </div>

        <div className="fe-box">
            <img src={f3} alt="" />
            <h6>Save Money</h6>
        </div>

        <div className="fe-box">
            <img src={f4} alt="" />
            <h6>Promotions</h6>
        </div>

        <div className="fe-box">
            <img src={f5} alt="" />
            <h6>Happy Sell</h6>
        </div>

        <div className="fe-box">
            <img src={f6} alt="" />
            <h6>F24/7 Support</h6>
        </div>

    </section>

    <section id="banner" className="section-m1">
        <div>
            <h4>Repair Services </h4>
            <h2>Up to <span>70% off</span> - All T-Shirts and Accessories</h2>
            <button className="normal">Explore More</button>
        </div>
    </section>

    <section id="product1" className="section-p1">
        <h2>Featured Products</h2>
        <p>Summer Collection New Morden Design</p>
        <div className="pro-container">
            {
                this.state.items.map(function(item, i) {
                    if(i < 4)
                    return <ShopItem item={item}/>
                })
            }
        </div>
    </section>

    <section id="sm-banner" className="section-p1">
        <div className="banner-box">
            <h4>crazy deals</h4>
            <h2>buy 1 get 1 free</h2>
            <span>The best classic is on sale on TechersStop</span>
            <button className="white">Learn More</button>
        </div>
        <div className="banner-box banner-box2">
            <h4>Spring/Summer</h4>
            <h2>Upcoming Season</h2>
            <span>The best classic is on sale on TechersStop</span>
            <button className="white">Collection</button>
        </div>
    </section>

    <section id="banner3">
        <div className="banner-box">
            <h2>SEASON SALE</h2>
            <h3>Winter Collection -50% off</h3>
        </div>
        <div className="banner-box banner-box2">
            <h2>NEW FOOTWEAR COLLECTION</h2>
            <h3>Spring/Summer 2022</h3>
        </div>
        <div className="banner-box banner-box3">
            <h2>T-SHIRTS</h2>
            <h3>New Trendy Prints</h3>
        </div>
    </section>

    {/* <!--newsletter section--> */}
    <PageFooter />
    </div>
  );
  }
}

