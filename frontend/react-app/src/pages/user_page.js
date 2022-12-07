import React, { useState, useEffect } from "react";
import logo from "../img/logo.png";
import "../user.css";
import { Link, useNavigate } from "react-router-dom";

export default function UserPage() {
  const [user, setUser] = useState({});
  const [balance, setBalance] = useState(0);
  const [update, setUpdate] = useState('Update');
  const navigate = useNavigate();

    const fetchData = () => {
        if (localStorage.getItem("userId") === null) {
            navigate("/login");
          }
          const userId = parseInt(localStorage.getItem("userId"), 10);
          console.log("USER ID = ", userId);
          fetch(`/api/v1/user/${userId}`, { method: "GET" }).then((resp) => {
            resp.json().then((data) => {
              console.log("DATA = ", data);
              if (data == null) {
                navigate("/login");
              } else {
                setUser(data);
                setBalance(data.balance);
                console.log('Set balance');
              }
            });
          });
    }

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className="userWrapper">
      <div className="logo">
        <Link to="/">
          <img src={logo} className="logo" alt="" />
        </Link>
      </div>
      <div className="container d-flex justify-content-center mt-5">
        <div className="card">
          <div className="top-container">
            <img
              src={user.avatarUrl}
              className="img-fluid profile-image"
              width="70"
            />

            <div className="mx-3">
              <h5 className="name">{user.name}</h5>
            </div>
          </div>

          <div className="middle-container d-flex justify-content-between align-items-center mt-3 p-2">
            <div className="dollar-div px-3">
              <div className="round-div">
                <i className="fa fa-dollar dollar"></i>
              </div>
            </div>
            <div className="d-flex flex-column text-right mr-2">
              <span className="current-balance">Current Balance</span>
              <div class="col-sm-10 my-2">
                <input
                  type="number"
                  class="form-control"
                  id="inputPassword"
                  value={balance}
                  onChange={e => {
                    if(e.target.value >= 0) {
                        setBalance(e.target.value);
                    }
                  }}
                />
                <button className="btn btn-success my-2" onClick={e => {
                    const userId = parseInt(localStorage.getItem('userId'), 10);
                    fetch(`/api/v1/user/${userId}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            name: user.name,
                            balance: balance,
                            password: user.password,
                            avatarUrl: user.avatarUrl
                        })
                    }).then(resp => {
                        setUpdate('Updated!')
                        setTimeout(() => setUpdate('Update'), 3000);
                    });
                }}>{update}</button>
              </div>
            </div>
          </div>

          {/* <div className="recent-border mt-4">
                        <span className="recent-orders">Recent orders</span>
                    </div>
                    <div className="fashion-studio-border pt-2">
                        <span className="fashion-studio">Fashion studio</span>
                    </div> */}

          <input className="my-3" type="submit" value="Sign Out" onClick={e => {
            localStorage.removeItem('userId');
            navigate('/login');
          }}/>
          <input className="my-1" type="submit" value="Home" onClick={e => {
            navigate('/');
          }}/>
        </div>
      </div>
    </div>
  );
}
