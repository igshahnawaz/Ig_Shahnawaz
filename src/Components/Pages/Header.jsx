import "../Css/Header.css";
import { IoSearch } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [inputColor, setInputColor] = useState(false);
  const underStyle = {
    textDecoration: "none",
  };
  const navigate = useNavigate();
  let [movieSearch, setMovieSearch] = useState("");

  let inputSearch = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setMovieSearch(e.target.value.toLowerCase().trim().replace(/\s+/g, "-"));
      navigate(`/you-are-searching-for/${movieSearch}`);
    }
  };
  const focusHandle = () => {
    setInputColor(!inputColor);
  };
  const blurHandle = () => {
    setInputColor(!inputColor);
  };
  return (
    <div style={{ overflowX: "hidden" }}>
      <nav className="navbar">
        <div className="header">
          <div className="appLogo">
            <Link to={"/"} style={underStyle}>
              <h1 className="samLogo">SamsMovies</h1>
            </Link>
          </div>
          <div
            className="searchbarArea"
            style={{
              outline: `${inputColor ? "2px solid rgb(68, 255, 5)" : "none"}`,
            }}
          >
            <input
              type="text"
              className="searchbar"
              name="Searchbar"
              placeholder="What are you looking for ?"
              onFocus={focusHandle}
              onBlur={blurHandle}
              onKeyDown={inputSearch}
              onChange={(e) =>
                setMovieSearch(
                  e.target.value.toLowerCase().trim().replaceAll(" ", "-")
                )
              }
            />
            <Link
              onClick={() => navigate(`/you-are-searching-for/${movieSearch}`)}
              className="searchIcon"
              style={{
                display: "flex",
                fontSize: "1.8rem",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IoSearch />
            </Link>
          </div>
          <div className="moviesMod">
            <div className="headerBolly">
              <Link style={underStyle} to={"/bollywood-movies"}>
                <p>Bollywood</p>
              </Link>
            </div>
            <div className="headerHolly">
              <Link style={underStyle} to={"/hollywood-english-movies"}>
                <p>Hollywood</p>
              </Link>
            </div>
            <div className="headerAnime">
              <Link style={underStyle} to={"/anime-hindi-dubbed"}>
                <p>Anime</p>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
