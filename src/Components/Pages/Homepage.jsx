import Footer from "./Footer";
import Header from "./Header";
// import HomeCard from "./HomeCard";
import "../Css/HomeCard.css";
import Scalable from "./Scalable";
import Sidebar from "./Sidebar";
import HomeCard from "./HomeCard";
import { homeCards } from "../Data/HomeCardData";
// import SearchCard from "./SearchCard";

function Homepage() {
  return (
    <div className="Homepage">
      <Header />
      <Sidebar />
      <Scalable />
      <HomeCard pageData1={homeCards} />
      <Footer />
    </div>
  );
}

export default Homepage;
