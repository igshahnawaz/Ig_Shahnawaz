import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../Css/Sidebar.css";
function Sidebar() {
  const [showSide, setShowSide] = useState(true);
  const hideSidebar = () => {
    setShowSide(!showSide);
  };
  let sidebarStyle = {
    transform: `translateX(${showSide ? -101 : 0}%)`,
    transition: showSide ? "0s" : "0.5s",
  };
  const sideClose = () => {
    setShowSide(!showSide);
  };

  let overlayStyle = {
    display: `${showSide ? "none" : "block"}`,
  };
  let rootId = document.getElementById("samsmovies");
  showSide
    ? (rootId.style.position = "")
    : (rootId.style.position = "relative");
  const hideSide = () => {
    setShowSide(!showSide);
  };

  const underStyle = {
    textDecoration: "none",
  };

  showSide
    ? (document.body.style.overflow = "auto")
    : (document.body.style.overflow = "hidden");
  return (
    <nav>
      <div
        className="sidebarOverlay"
        style={overlayStyle}
        onClick={hideSide}
      ></div>
      <div className="sidebar" style={sidebarStyle}>
        <ul>
          <div className="menuClosebar">
            <FaBars className="menuIconClose" onClick={sideClose} />
          </div>
          <Link style={underStyle} to="/bollywood-movies">
            <li>Bollywood Movies</li>
          </Link>
          <Link style={underStyle} to={"/south-indian-hindi-dubbed-movies"}>
            <li>South Indian Hindi Dubbed Movies</li>
          </Link>
          <Link style={underStyle} to={"/hollywood-hindi-dubbed-movies"}>
            <li>Hollywood Hindi Dubbed Movies</li>
          </Link>
          <Link style={underStyle} to={"/hollywood-english-movies"}>
            <li>Hollywood English Movies</li>
          </Link>
          <Link style={underStyle} to={"/punjabi-movies"}>
            <li>Punjabi Movies</li>
          </Link>
          <Link style={underStyle} to={"/web-series"}>
            <li>Web-Series</li>
          </Link>
          <Link style={underStyle} to={"/korean-drama-hindi-dubbed"}>
            <li>Korean Drama Hindi Dubbed</li>
          </Link>
          <Link style={underStyle} to={"/anime-hindi-dubbed"}>
            <li>Anime</li>
          </Link>
        </ul>
      </div>

      <div className="navSec">
        <div className="secHeader">
          <div className="menuBar">
            <FaBars className="menuIcon" onClick={hideSidebar} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
