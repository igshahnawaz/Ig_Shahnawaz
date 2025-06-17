import React from "react";
import { Link } from "react-router-dom";
import "../Css/PageNotFound.css";
function PageNotFound() {
  let underStyle = {
    textDecoration: "none",
  };
  return (
    <div className="pageAllContainer">
      <div className="pageContainer">
        <Link to={"/"} style={underStyle}>
          <h1 className="webLogo">404 Page Not Found</h1>
        </Link>
        <div className="pageNotFound">
          <p className="unavailablePage">
            We are sorry. The web address you entered is not correct or
            currently unavailable.
          </p>
          <p className="availablePage">Please enter a correct web address.</p>
          <p className="thankYou">thank you</p>
          <div className="goHomepage">
            <span
              style={{
                color: "red",marginTop:'8px',
                height:'20px',
                marginRight: '0.5rem',
                fontSize:'1.5rem'
              }}
            >
              >> 
            </span> 
            click here to go
            <Link className="goHome" to={"/"}>
              HomePage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
