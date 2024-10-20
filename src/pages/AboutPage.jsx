import React from "react";
// styles
import "../styles/about.css";
import "../styles/utils.css";

const AboutPage = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container indexing">
          {/* Logo and Social Icons */}
          <div className="footer-left">
            <div className="logo">
              <h1>TEDVERSE</h1>
            </div>
            <div className="social-icons">
              <a href="#">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
          </div>

          {/* About Section */}
          <div className="footer-links text-align-start">
            <h3>About</h3>
            <ul className="margin-zero padding-zero">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Return and Refund Policy</a>
              </li>
              <li>
                <a href="#">Be a Partner</a>
              </li>
            </ul>
          </div>

          {/* Help Section */}
          <div className="footer-links text-align-start">
            <h3>Help</h3>
            <ul className="margin-zero padding-zero">
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default AboutPage;
