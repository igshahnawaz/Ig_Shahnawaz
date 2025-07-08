import Footer from "./Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Header from "./Header";
import "../Css/HomeCard.css";
import "../Css/Pagination.scss";
import "../Css/HomeCard.css";
import "../Css/Header.css";
import "../Css/Footer.css";
import Scalable from "./Scalable";
import Sidebar from "./Sidebar";
import { homePageData, homePageLength } from "../Data/HomeCardData";
import React, { useState } from "react";
import HomeCard from "../Pages/HomeCard.jsx";
import Pagination from "./Pagination";
import { render } from "@testing-library/react";

window.onloadTurnstileCallback = function () {
  render("#cloudFlare", {
    sitekey: "<0x4AAAAAABiCkvjtN1u7qtLM>",
    callback: function (token) {
      console.log(`Challenge Success ${token}`);
    },
  });
};

function Homepage() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);
  let totalPage = Math.ceil(homePageLength() / limit);
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

  return (
    <div className="Homepage">
      <Header />
      <Sidebar />
      <Scalable />
      <HomeCard
        homeCards={homePageData(page, limit)}
        firstIndex={firstIndex}
        endIndex={endIndex}
      />

      <Pagination
        totalPage={totalPage}
        page={page}
        limit={limit}
        siblings={1}
        onPageChange={handlePageChange}
      />
      <div id="claudFlare"></div>
      <Footer />
    </div>
  );
}

export default Homepage;
