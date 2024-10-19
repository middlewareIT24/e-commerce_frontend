import React from "react";
// styles
import "../styles/footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <span>
          Created By{" "}
          <a href="https://www.linkedin.com/company/middleware-it/?viewAsMember=true">
            Middleware IT
          </a>{" "}
          | <span className="far fa-copyright"></span> 2024 All rights reserved.
        </span>
      </footer>
    </>
  );
};

export default Footer;
