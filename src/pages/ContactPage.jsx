import React from "react";
import { Footer, Navbar } from "../components";
// styles
import "../styles/contact.css";
import "../styles/utils.css";

const ContactPage = () => {
  return (
    <>
      <div className="full-height">
        <Navbar />

        <div className="page-content contact-container indexing">
          {/* Contact Info Section */}
          <div className="contact-info">
            <div className="contact-details">
              <div className="info-item">
                <i className="fas fa-landmark"></i>
                <p>Naimul Hassan</p>
              </div>
              <div className="info-item">
                <i className="fas fa-map-marker-alt"></i>
                <p>Dhaka, Bangladesh</p>
              </div>
              <div className="info-item">
                <i className="fas fa-envelope"></i>
                <p>naimul.hassan.se@gmail.com</p>
              </div>
              <div className="info-item">
                <i className="fas fa-phone"></i>
                <p>(+880) 1515215937</p>
              </div>
            </div>
          </div>

          {/* Message Form Section */}
          <div className="contact-form">
            <h3>Message me</h3>
            <form>
              <div className="form-group">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
              </div>
              <input type="text" placeholder="Subject" />
              <textarea placeholder="Message.."></textarea>
              <button type="submit">Send message</button>
            </form>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
