import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import "../Css/Contact.css";

function Contact() {
  return (
    <div>
      <Header />
      <Sidebar />
      <div className="contactContainer">
        <div className="contactContainerSec">
          <div className="contactHead">
            <h1>Contact Us</h1>
            <p>
              We’d love to hear from you! At SamsMovies.com, we value your
              feedback, questions, and suggestions. Whether you need assistance,
              have a collaboration idea, or just want to chat about movies,
              we’re here to help.
            </p>
          </div>
          <div className="getInTouchHead">
            <h1>Get In Touch</h1>
          </div>
          <div className="EmailHead">
            <h2>Email Us</h2>
            <p>For general inquiries or support, reach out to us at:</p>
            <b>
              <a
                href="mailto:support@samsmovies.com"
                style={{ color: "rgb(255,0,195)", textDecoration: "none" }}
              >
                support@samsmovies.com
              </a>
            </b>
            <p>For business partnerships and collaborations, contact:</p>
            <b>
              <a
                href="mailto:business@samsmovies.com"
                style={{ color: "rgb(255, 0, 195)", textDecoration: "none" }}
              >
                business@samsmovies.com
              </a>
            </b>
          </div>
          <div className="connectHead">
            <h2>Connect With Us Online</h2>
            <div className="connectSecHead">
              <h3>Facebook:</h3>
              <p>facebook.com/samsmovies</p>
            </div>
            <div className="connectSecHead">
              <h3>Instagram:</h3>
              <p>Instagram.com/samsmovies</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
