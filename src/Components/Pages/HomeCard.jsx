import { Link } from "react-router-dom";
import "../Css/HomeCard.css";
import { homeCards } from "../Data/HomeCardData";
import Pagination from "./Pagination";
import { useState } from "react";
export default function HomeCards() {
  let itemsLimit = 20;
  let [currPage, setCurrPage] = useState(1);
  let startIndex = (currPage - 1) * itemsLimit;
  let endIndex = startIndex + itemsLimit;
  let pageData = homeCards.slice(startIndex, endIndex);
  const underStyle = {
    textDecoration: "none",
  };
  let nextClick = () => {
    setCurrPage(currPage + 1);
  };
  let preClick = () => {
    setCurrPage(currPage - 1);
  };
  return (
    <div className="homeCardContainer">
      {pageData.map((p, i) => {
        return (
          <div className="allCardsContainer" key={`home${i}`}>
            <div className="homeCard" tabIndex={0}>
              <div className="imageCard">
                <img
                  className="homeImage"
                  src={p.homeSrc}
                  alt="movie-poseter"
                />
              </div>
              <span className="homeQuality">{p.homeQuality}</span>
              <div className="homeSecCard">
                <p className="cardTitle">{p.homeTitle}</p>
                <div className="homeLength">
                  <div className="cardYear">
                    {p.homeYear} | {p.homeLength}
                  </div>
                </div>
                <div className="homeDetails">
                  <p className="cardStory">
                    {p.homeDetails}
                    <Link to={`movie-details/${p.id}`} style={underStyle}>
                      <sub className="cardSee">{p.homeMore}</sub>
                    </Link>
                  </p>
                </div>
                <div className="langDetails">
                  <div className="homeDirector">
                    <div className="cardDirector">
                      <p className="cardHead">Director:</p>
                      <p className="cardDetail">{p.homeDirector}</p>
                    </div>
                  </div>
                  <div className="homeStar">
                    <div className="cardStar">
                      <p className="cardHead">Starring:</p>
                      <p className="cardDetail">{p.homeStar}</p>
                    </div>
                  </div>
                  <div className="homeLang">
                    <div className="cardLang">
                      <p className="cardHead">Language:</p>
                      <p className="cardDetail">{p.homeLang}</p>
                    </div>
                  </div>
                  <div className="homeSubs">
                    <div className="cardSubs">
                      <p className="cardHead">Substitles:</p>
                      <p className="cardDetail">{p.homeSubs}</p>
                    </div>
                  </div>
                  <div className="homeDownload">
                    <Link to={`movie-details/${p.id}`} style={underStyle}>
                      <p className="cardDownload">{p.homeDownload}</p>
                    </Link>
                  </div>
                </div>
              </div>
              <p className="homeTitle" style={{ textAlign: "center" }}>
                {p.homeTitle}
              </p>
            </div>
          </div>
        );
      })}
      <Pagination nextClick={nextClick} preClick={preClick} currPage={currPage} />
    </div>
  );
}
