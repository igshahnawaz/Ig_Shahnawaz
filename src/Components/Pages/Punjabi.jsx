import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import { punjabiData } from "../Data/PunjabiData";

function Punjabi() {
  const underStyle = {
    textDecoration: "none",
  };
  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
  };
      let page_size = 20;
      let [currPage, setCurrPage] = useState(1);
      let startIndex = (currPage - 1) * page_size;
      let endIndex = page_size + startIndex;
      let mypunjabiData = punjabiData.slice(startIndex, endIndex);
      let endPage = Math.ceil(punjabiData.length / page_size);
  let prePage = () => {
        setCurrPage(currPage - 1);
      };
      let nextPage = () => {
        setCurrPage(currPage + 1);
      };
    
      let preStyle = {
        display: currPage <= 1 ? "none" : "flex",
      };
    
      let nextStyle = {
        display: currPage === endPage ? "none" : "flex",
      };
  
  return (
    <>
      <Header />
      <Sidebar />
      <div className="punjabiContainer" style={containerStyle}>
        {punjabiData.map((val, i) => {
          return (
            <div className="homeCardContainer" key={`punjabi${i}`}>
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
      <div className="homeNext">
        <div
          className="homeNextPage"
          style={{ gap: "20px", margin: "1.8rem 0" }}
        >
          <p onClick={prePage} style={preStyle}>
            Previous
          </p>
          <p onClick={nextPage} style={nextStyle}>
            Next
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Punjabi;
