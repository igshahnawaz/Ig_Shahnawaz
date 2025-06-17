import { Link } from "react-router-dom";
import { homeCards } from "../Data/HomeCardData";
export default function HomeCards(props) {
  const underStyle = {
    textDecoration: "none",
  };
  let filterHomeCards=homeCards.slice(props.firstIndex,props.endIndex)
  return (
    <div className="homeCardContainer">
      {filterHomeCards.map((homeCards, i) => {
        return (
          <div className="allCardsContainer" key={`home${homeCards.id}`}>
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
                      to={`movie-details/${homeCards.id}`}
                      style={underStyle}
                    >
                      <p className="cardDownload">{homeCards.homeDownload}</p>
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
      })}
    </div>
  );
}
