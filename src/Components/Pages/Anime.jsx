import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import { homeCards } from "../Data/HomeCardData";
function Anime() {
  const underStyle = {
    textDecoration: "none",
  };
  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
  };
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);
  let firstIndex = (page - 1) * limit;
  let endIndex = firstIndex + limit;
  let animeData = homeCards.filter((val) =>
    val.homeCat.toLowerCase().includes("anime-hindi")
  );
  let animePageLength = animeData.length;
  let filterAnimeData = animeData.slice(firstIndex, endIndex);
  let totalPage = Math.ceil(animePageLength / limit);
  function handlePageChange(value) {
    if (value === "Next") {
      setPage(page + 1);
    } else if (value === "Previous") {
      setPage(page - 1);
    } else {
      setPage(value);
    }
  }
  return (
    <>
      <Header />
      <Sidebar />
      <div className="animeContainer" style={containerStyle}>
        {filterAnimeData.map((val, i) => {
          return (
            <div className="homeCardContainer" key={`anime${i}`}>
              <div className="homeCard" tabIndex={0}>
                <div className="imageCard">
                  <img
                    className="homeImage"
                    alt="movie-poseter"
                    src={val.homeSrc}
                  />
                </div>
                <span className="homeQuality">{val.homeQuality}</span>
                <div className="homeSecCard">
                  <p className="cardTitle">{val.homeTitle}</p>
                  <div className="homeLength">
                    <div className="cardYear">
                      {val.homeYear} | {val.homeLength}
                    </div>
                  </div>
                  <div className="homeDetails">
                    <p className="cardStory">
                      {val.homeDetails}
                      <Link to={`/movie-details/${val.id}`} style={underStyle}>
                        <sub className="cardSee">{val.homeMore}</sub>
                      </Link>
                    </p>
                  </div>
                  <div className="homeDirector">
                    <div className="cardDirector">
                      <p className="cardHead">Director:</p>
                      <p className="cardDetail">{val.homeDirector}</p>
                    </div>
                  </div>
                  <div className="homeStar">
                    <div className="cardStar">
                      <p className="cardHead">Starring:</p>
                      <p className="cardDetail">{val.homeStar}</p>
                    </div>
                  </div>
                  <div className="homeLang">
                    <div className="cardLang">
                      <p className="cardHead">Language:</p>
                      <p className="cardDetail">{val.homeLang}</p>
                    </div>
                  </div>
                  <div className="homeDownload">
                    <Link to={`/movie-details/${val.id}`} style={underStyle}>
                      <p className="cardDownload">{val.homeDownload}</p>
                    </Link>
                  </div>
                </div>
                <p className="homeTitle" style={{ textAlign: "center" }}>
                  {val.homeTitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <Pagination
        totalPage={totalPage}
        page={page}
        limit={limit}
        siblings={1}
        onPageChange={handlePageChange}
      />
      <Footer />
    </>
  );
}

export default Anime;
