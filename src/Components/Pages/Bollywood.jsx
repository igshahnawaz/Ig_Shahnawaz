import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { homeCards } from "../Data/HomeCardData";
import Pagination from "./Pagination";
import "../Css/HomeCard.css";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

function Bollywood() {
  const underStyle = {
    textDecoration: "none",
  };
  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
  };

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);
  let bollyData = homeCards.filter((val) =>
    val.homeCat.toLowerCase().includes("bollywood")
  );
  let bollyPageLength = bollyData.length;
  let totalPage = Math.ceil(bollyPageLength / limit);
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
  let filterBollyData = bollyData.slice(firstIndex, endIndex);
  return (
    <>
      <Header />
      <Sidebar />
      <div className="bollyContainer" style={containerStyle}>
        {filterBollyData.map((val, i) => {
          return (
            <div className="homeCardContainer" key={`bolly${i}`}>
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

export default Bollywood;
