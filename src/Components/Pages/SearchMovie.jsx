import React, { useState } from "react";
import { homeCards } from "../Data/HomeCardData";
import "../Css/SearchMovie.css";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Pagination from "./Pagination";
import Puppy from "../Imgs/puppy Image1.png";
function SearchMovie(props) {
  let currVal = useLocation().pathname.split("/")[2].replaceAll("-", " ");
  let search = homeCards.filter((val) =>
    val.homeTitle
      .toLowerCase()
      .includes(currVal.toLowerCase().replaceAll("-", " "))
  );

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);
  const searchLength = search.length;
  let totalPage = Math.ceil(searchLength / limit);
  let firstIndex = (page - 1) * limit;
  let endIndex = firstIndex + limit;
  function handlePageChange(value) {
    if (value === "Next") {
      setPage(page + 1);
    } else if (value === "Previous") {
      setPage(page - 1);
    } else {
      setPage(value);
    }
  }
  let sliceSearchData = search.slice(firstIndex, endIndex);

  const underStyle = {
    textDecoration: "none",
  };
  return (
    <div>
      <Header />
      <Sidebar />
      {searchLength > 0 ? (
        <div className="searchResultFound">
          <p style={{ color: "#ff0099" }}>
            Your Are Searching for :-{" "}
            <span style={{ color: "white", marginLeft: ".1rem" }}>
              {currVal}
            </span>
          </p>
        </div>
      ) : (
        ""
      )}
      <div className="allCardContainer">
        {searchLength > 0 ? (
          sliceSearchData.map((homeCards, i) => {
            return (
              <div
                className="searchCardsContainer"
                key={`home${homeCards.id}`}
                style={{
                  display: "flex",
                  gap: "30px",
                  color: "red",
                }}
              >
                <div className="homeCard" tabIndex={0}>
                  <div className="imageCard">
                    <img
                      className="homeImage"
                      src={homeCards.homeSrc}
                      alt="movie-poseter"
                    />
                  </div>
                  <span className="homeQuality">{homeCards.homeQuality}</span>
                  <div className="homeSecCard">
                    <p className="cardTitle">{homeCards.homeTitle}</p>
                    <div className="homeLength">
                      <div className="cardYear">
                        {homeCards.homeYear} | {homeCards.homeLength}
                      </div>
                    </div>
                    <div className="homeDetails">
                      <p className="cardStory">
                        {homeCards.homeDetails}
                        <Link
                          to={`/movie-details/${homeCards.id}`}
                          style={underStyle}
                        >
                          <sub className="cardSee">{homeCards.homeMore}</sub>
                        </Link>
                      </p>
                    </div>
                    <div className="langDetails">
                      <div className="homeDirector">
                        <div className="cardDirector">
                          <p className="cardHead">Director:</p>
                          <p className="cardDetail">{homeCards.homeDirector}</p>
                        </div>
                      </div>
                      <div className="homeStar">
                        <div className="cardStar">
                          <p className="cardHead">Starring:</p>
                          <p className="cardDetail">{homeCards.homeStar}</p>
                        </div>
                      </div>
                      <div className="homeLang">
                        <div className="cardLang">
                          <p className="cardHead">Language:</p>
                          <p className="cardDetail">{homeCards.homeLang}</p>
                        </div>
                      </div>
                      <div className="homeSubs">
                        <div className="cardSubs">
                          <p className="cardHead">Substitles:</p>
                          <p className="cardDetail">{homeCards.homeSubs}</p>
                        </div>
                      </div>
                      <div className="homeDownload">
                        <Link
                          to={`/movie-details/${homeCards.id}`}
                          style={underStyle}
                        >
                          <p className="cardDownload">
                            {homeCards.homeDownload}
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <p className="homeTitle" style={{ textAlign: "center" }}>
                    {homeCards.homeTitle}
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <div className="searchNotFound">
            <div className="searchResult">
              <p style={{ color: "#ff0099" }}>
                Your Are Searching for :-{" "}
                <span style={{ color: "white", marginLeft: ".1rem" }}>
                  {currVal}
                </span>
              </p>
              <p className="noResult">Sorry No Results found</p>
            </div>
            <div className="searchImageCircle">
              <div className="searchImage">
                <img src={Puppy} alt="Puppy Image" className="puppyImage" />
              </div>
              <div className="searchTitle">
                <span>We are sorry,</span> Please search another Movie
              </div>
            </div>
          </div>
        )}
      </div>
      <Pagination
        totalPage={totalPage}
        page={page}
        limit={limit}
        siblings={1}
        onPageChange={handlePageChange}
      />
      <Footer />
    </div>
  );
}

export default SearchMovie;
