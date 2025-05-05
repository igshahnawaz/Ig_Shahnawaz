import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import "../Css/Disclaimer.css";

function Disclaimer() {
  return (
    <div>
      <Header />
      <Sidebar />
      <div className="disclaimerContainer">
        <div className="disclaimerArea">
          <h1>Disclaimer</h1>
          <p>
            Welcome to
            <span style={{ fontWeight: "600", padding: "0 .5rem" }}>
              SamsMovies.com
            </span>
            . By using this website, you agree to the terms outlined in this
            disclaimer. Please read the following information carefully.
          </p>
          <h2>General Information</h2>
          <p>
            SamsMovies.com is intended for informational and entertainment
            purposes only. While we strive to provide accurate and up-to-date
            content related to movies, reviews, and industry news, we do not
            guarantee the completeness, reliability, or accuracy of the
            information presented on this site.
          </p>
          <h2>Copyright & Intellectual Property</h2>
          <p>
            All movie-related content, including images, posters, and trailers,
            are the property of their respective owners. SamsMovies.onl does not
            claim ownership of any copyrighted materials displayed on this
            website. If you believe that any content violates copyright laws,
            please contact us, and we will take appropriate action.
          </p>
          <h2>External Links & Third-Party Content</h2>
          <p>
            Our website may contain links to third-party websites for additional
            resources or references. SamsMovies.onl is not responsible for the
            content, accuracy, or privacy policies of any external sites.
            Visiting third-party websites is at your own discretion.
          </p>
          <h2>No Legal or Financial Advice</h2>
          <p>
            The content provided on SamsMovies.onl is for entertainment and
            informational purposes only. We do not offer legal, financial, or
            professional advice. Any decisions made based on information from
            this website are solely at your own risk.
          </p>
          <h2>Changes to This Disclaimer</h2>
          <p>
            SamsMovies.onl reserves the right to update, modify, or revise this
            disclaimer at any time without prior notice. It is your
            responsibility to review this page periodically for any changes.
          </p>
          <div className="discConcern">
            <p>
              If you have any concerns regarding this disclaimer, please contact
              us at
            </p>
            <b>
              <a
                href="mailto:support@samsmovies.com"
                style={{ color: "rgb(255,0,255)", textDecoration: "none" }}
              >
                support@samsmovies.com
              </a>
              .
            </b>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Disclaimer;
