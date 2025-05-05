import React from "react";
import "../Css/Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  const underStyle = {
    textDecoration: "none",
    color: "black",
  };
  return (
    <div>
      <footer>
        <div className="footer">
          <div className="footerContainer">
            <div className="homeHelp">
              <p className="homeTalk">Talk About</p>
            </div>
            <div className="contactArea">
              <div className="homeAbout">
                <Link style={underStyle} to={"/about-us"}>
                  <p className="about">About-us</p>
                </Link>
              </div>
              <div className="homeContact">
                <Link style={underStyle} to={"/contact-us"}>
                  <p className="contact">Contact-us</p>
                </Link>
              </div>
              <div className="homeDisc">
                <Link style={underStyle} to={"/disclaimer"}>
                  <p className="disclaimer">Disclaimer</p>
                </Link>
              </div>
            </div>
            <div className="homeReminder">
              <div className="reminder">
                <p>Reminder</p>
              </div>
            </div>
            <div className="homeInfo">
              <div className="info">
                <h2>Note:-</h2> Sometimes this website name would be changed.
                But don't worry We would try to do our best. You would have to
                change the the website url like samsmovies.name,
                samsmovies.org,.samsmovies.rest etc.
              </div>
            </div>
            <div className="copyright">
              <Link to={"/"} style={underStyle}>
                <div className="footerLogo">
                  <p className="samFooter">SamsMovies</p>
                </div>
              </Link>
              Copyright © mkvCinemas.com 2025
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
