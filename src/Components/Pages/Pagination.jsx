import React, { useState } from "react";
import { homeCards } from "../Data/HomeCardData";

function Pagination({ nextClick, preClick }) {
  return (
    <div>
      <div className="homeNext">
        <div
          className="homeNextPage"
          style={{ gap: "20px", margin: "1.8rem 0" }}
        >
          <p onClick={preClick}>Previous</p>
          <p onClick={nextClick}>Next</p>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
