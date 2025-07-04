import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import { homeCards } from "../Data/HomeCardData";
import Pagination from "./Pagination";

function Hollywood() {
  const underStyle = {
    textDecoration: "none",
  };
  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
  };
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);
  let hollyData = homeCards.filter((val) =>
    val.homeCat.toLowerCase().includes("hollywood-english")
  );
  let hollyPageLength = hollyData.length;
  let totalPage = Math.ceil(hollyPageLength / limit);
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
  let filterHollyData = hollyData.slice(firstIndex, endIndex);

  return (
    <>
      <Header />
      <Sidebar />
      <div className="punjabiContainer" style={containerStyle}>
        {filterHollyData.map((val, i) => {
          return (
            <div className="homeCardContainer" key={`holly${i}`}>
              <div className="homeCard" tabIndex={0}>
                <div className="imageCard">
                  <img
                    className="homeImage"
                    src={val.homeSrc}
                    alt="movie-poseter"
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

export default Hollywood;
