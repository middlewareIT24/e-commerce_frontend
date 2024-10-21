import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import React from "react";
// css
import "../styles/homeHeader.css";
// import "../styles/navbar.css";
// import "../styles/utils.css";

const HomeHeader = () => {
  const profileImage =
    "../../../../../../Personal/MiddlewareIT/e-commerce/e-commerce_frontend/public/assets/dp.jpg"; // should implement dynamic later for each accounts
  const defaultProfileImage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSB6ZH3zjn4k7qqAugR5mFcf6RC1tVNZAetQ&s";

  const handleImageError = (e) => {
    e.target.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSB6ZH3zjn4k7qqAugR5mFcf6RC1tVNZAetQ&s"; // Fallback image
  };

  return (
    <div className="home-header">
      <div style={{ width: "90%" }}>
        <ul className="menu-links">
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
      </div>

      <Stack direction="row" spacing={1} pt={0.63}>
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
          }}
        />
      </Stack>
    </div>
  );
};

export default HomeHeader;
