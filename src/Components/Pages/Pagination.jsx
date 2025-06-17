import { returnPaginationRange } from "../Utils/appUtils";
import React from "react";
import "../Css/Pagination.scss";
import { HiDotsHorizontal } from "react-icons/hi";
export default function Pagination(props) {
  let array = returnPaginationRange(
    props.totalPage,
    props.page,
    props.limit,
    props.siblings
  );
  let firstPage = [];
  for (let i = 1; i <= props.totalPage; i++) {
    firstPage.push(i);
  }
  return (
    <div className="pagination">
      <div className="list-item">
        <button
          className="page-link"
          onClick={(e) => props.onPageChange("Previous")}
          style={{
            display: `${props.page <= 1 ? "none" : "block"}`,
          }}
        >
          Previous
        </button>
      </div>
      {props.totalPage <= 5 ? (
        <>
          {firstPage.map((value, i) => {
            if (value === props.page) {
              return (
                <div key={i} className="list-item">
                  <button
                    className="activePage"
                    onClick={() => props.onPageChange(value)}
                  >
                    {value}
                  </button>
                </div>
              );
            } else {
              return (
                <div key={i} className="list-item">
                  <button
                    className="page-link"
                    onClick={() => props.onPageChange(value)}
                  >
                    {value}
                  </button>
                </div>
              );
            }
          })}
        </>
      ) : (
        array.map((value, i) => {
          if (value === props.page) {
            return (
              <div key={i} className="list-item">
                <button
                  className="activePage"
                  onClick={() => props.onPageChange(value)}
                  style={{ backgroundColor: "aqua" }}
                >
                  {value}
                </button>
              </div>
            );
          } else {
            return (
              <div key={i} className="list-item">
                <button
                  disabled={value === " ..." || value === "... " ? true : false}
                  className={
                    value === " ..." || value === "... "
                      ? "list-dots"
                      : "page-link"
                  }
                  onClick={() => props.onPageChange(value)}
                >
                  {value === " ..." || value === "... " ? (
                    <HiDotsHorizontal />
                  ) : (
                    value
                  )}
                </button>
              </div>
            );
          }
        })
      )}
      <div className="list-item">
        <button
          className="page-link"
          onClick={() => props.onPageChange("Next")}
          style={{
            display: `${props.page >= props.totalPage ? "none" : "block"}`,
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
