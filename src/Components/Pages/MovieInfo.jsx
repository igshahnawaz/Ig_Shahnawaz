import React from "react";
import Header from "./Header";
import "../Css/MovieInfo.css";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import { homeCards } from "../Data/HomeCardData";
import Sidebar from "./Sidebar";
import PageNotFound from "./PageNotFound";

function MovieInfo() {
  let uselocation = useLocation();
  let currId = uselocation.pathname.split("/")[2];
  let currData = homeCards.filter((v) => v.id === currId)[0];
  const underStyle = {
    textDecoration: "none",
  };
  return (
    <>
      {homeCards.includes(currData) ? (
        <>
          <Header />
          <Sidebar />
          <div className="movieContainer">
            <div className="movieInfoContainer">
              <div className="movieInfoTitle">
                <p>{currData.homeFirstTitle}</p>
              </div>
              <div className="movieInfoImage">
                <img src={currData.homeSrc} alt="movieImage" />
                <div className="movieInfoDetails">
                  <div className="movieInfoMovieName">
                    <div className="mdTitleArea">
                      <span>Movie:</span> <p>{currData.homeTitle}</p>
                    </div>
                    <div className="mdDurationArea">
                      <span>Duration:</span> <p>{currData.homeLength}</p>
                    </div>
                    <div className="mdYearArea">
                      <span>Release Year:</span> <p>{currData.homeYear}</p>
                    </div>
                    <div className="mdQualityArea">
                      <span>Quality:</span> <p>{currData.homeQuality}</p>
                    </div>
                    <div className="mdGenreArea">
                      <span>Genre:</span> <p>{currData.homeGenre}</p>
                    </div>
                    <div className="mdDirectorArea">
                      <span>Director</span> <p>{currData.homeDirector}</p>
                    </div>
                    <div className="mdStarArea">
                      <span>Stars:</span> <p>{currData.homeStar}</p>
                    </div>
                    <div className="mdLanguageArea">
                      <span>Language:</span> <p>{currData.homeLang}</p>
                    </div>
                    <div className="mdSubstitleArea">
                      <span>Substitle:</span> <p>{currData.homeSubs}</p>
                    </div>
                    <div className="mdStoryArea">
                      <span>Story:</span> <p>{currData.homeDetails}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mdDownloadArea">
              <h1 className="mdChoose">Choose the Quality Given Below:</h1>
              <h2 className="mdSecTitle">{currData.homeSecTitle}</h2>
              <div
                className="md480p"
                style={{
                  display: `${currData.home480p != "" ? "flex" : "none"} `,
                }}
              >
                <a href={currData.home480pLink} style={underStyle}>
                  <p>{currData.home480p}</p>
                </a>
              </div>
              <div
                className="md720p"
                style={{
                  display: `${currData.home720p != "" ? "flex" : "none"} `,
                }}
              >
                <a href={currData.home720pLink} style={underStyle}>
                  <p>{currData.home720p}</p>
                </a>
              </div>
              <div
                className="md1080p"
                style={{
                  display: `${currData.home1080p != "" ? "flex" : "none"} `,
                }}
              >
                <a href={currData.home1080pLink} style={underStyle}>
                  <p>{currData.home1080p}</p>
                </a>
              </div>
              <div
                className="md1440p"
                style={{
                  display: `${currData.home1440p != "" ? "flex" : "none"} `,
                }}
              >
                <a href={currData.home1440pLink} style={underStyle}>
                  <p>{currData.home1440p}</p>
                </a>
              </div>
              <div
                className="md2160p"
                style={{
                  display: `${currData.home2160p != "" ? "flex" : "none"} `,
                }}
              >
                <a href={currData.home2160pLink} style={underStyle}>
                  <p>{currData.home2160p}</p>
                </a>
              </div>
            </div>
          </div>
          <Footer />
        </>
      ) : (
        <PageNotFound />
      )}
    </>
  );
}

export default MovieInfo;
