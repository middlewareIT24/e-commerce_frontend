import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
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

  const profileImage =
    "../../../../../../Personal/MiddlewareIT/e-commerce/e-commerce_frontend/public/assets/dp.jpg"; // should implement dynamic later for each accounts
  const defaultProfileImage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSB6ZH3zjn4k7qqAugR5mFcf6RC1tVNZAetQ&s";

  const handleImageError = (e) => {
    e.target.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSB6ZH3zjn4k7qqAugR5mFcf6RC1tVNZAetQ&s"; // Fallback image
  };

  return (
    <nav className="navbar">
      <div className="logo">Tedverse</div>
      <div style={{ justifyContent: "center", width: "50%" }}>
        <ul className="nav-links">
          <li>
            <a href="/">home</a>
          </li>
          <li>
            <a href="#">offers</a>
          </li>
          <li>
            <a href="#">category</a>
          </li>
          <li>
            <a href="contact">contact</a>
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
            <button
              className="btn"
              type="button"
              style={{ color: "white", outline: "none", boxShadow: "none" }}
            >
              <i className="fas fa-shopping-cart" />
              <span className="cart-count">3</span>
              {/* <span style={{ padding: "0 3px" }}>Cart</span> */}
            </button>
          </div>
          <div
            style={{
              backgroundColor: "rgba(245, 62, 99, 0.5)",
              color: "crimson",
              marginLeft: "10px",
            }}
          >
            <button
              className="btn"
              type="button"
              style={{ color: "white", outline: "none", boxShadow: "none" }}
            >
              <i className="fa-solid fa-heart"></i>
              <span className="cart-count">3</span>
              {/* <span style={{ padding: "0 3px" }}>Cart</span> */}
            </button>
          </div>
        </div>
      </div>
      {/* </div> */}
      <div className="user-section">
        <Stack direction="row" spacing={1}>
          <Chip
            avatar={
              // <Avatar
              //   alt="Natacha"
              //   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSB6ZH3zjn4k7qqAugR5mFcf6RC1tVNZAetQ&s"
              // />
              <Avatar
                alt="Natacha"
                src="/public/assets/dp.jpg"
                onError={handleImageError} // Fallback when image fails to load
              />
            }
            label="Welcome, Niloy"
            variant="filled"
            clickable
            color="default"
            sx={{
              color: "white",
              // borderColor: "white",
              // border: "none",
            }}
          />
        </Stack>
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
