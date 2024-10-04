import React, { useState } from "react";
import { useSelector } from "react-redux";
// css
import "../styles/navbar.css";
import "../styles/utils.css";

const NavClone = () => {
  const state = useSelector((state) => state.handleCart);

  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const searchItem = () => {
    console.log(inputValue);
  };

  return (
    <nav className="navbar">
      <div className="logo">Tedverse</div>
      <div style={{ justifyContent: "center", width: "50%" }}>
        <ul className="nav-links">
          <li>
            <a href="#">home</a>
          </li>
          <li>
            <a href="#">offers</a>
          </li>
          <li>
            <a href="#">category</a>
          </li>
          <li>
            <a href="#">contact</a>
          </li>
        </ul>
        {/* <div className="search-bar"> */}
        {/* <input type="text" placeholder="Find your joy..." />
          <div className="icons">
            <i className="fas fa-search" />
            <div className="cart-icon">
              <i className="fas fa-shopping-cart" />
              <span className="cart-count">3</span>
            </div>
          </div> */}
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Find your joy..."
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={inputValue}
            onChange={handleInputChange}
            style={{
              outline: "none",
              boxShadow: "none",
            }}
          />
          <button
            className="btn"
            type="button"
            style={{
              outline: "none",
              boxShadow: "none",
              backgroundColor: "rgba(245, 62, 99, 0.5) ",
              color: "white",
            }}
            onClick={searchItem}
          >
            <i className="fas fa-search" />
          </button>
          <div
            style={{
              backgroundColor: "rgba(245, 62, 99, 0.5)",
              color: "crimson",
              marginLeft: "10px",
            }}
          >
            <button className="btn" type="button" style={{ color: "white" }}>
              <i className="fas fa-shopping-cart" />
              <span className="cart-count">3</span>
              <span style={{ padding: "0 3px" }}>Cart</span>
            </button>
          </div>
        </div>
      </div>
      {/* </div> */}
      <div className="user-section">
        <div className="user-greeting">
          <i className="fas fa-user" />
          <span>Welcome, Niloy</span>
        </div>
        <div className="join-community">join our community</div>
        <div className="community-icons">
          <i className="fas fa-globe" />
          <i className="fab fa-facebook" />
          <i className="fas fa-mobile-alt" />
        </div>
      </div>
    </nav>
  );
};

export default NavClone;
