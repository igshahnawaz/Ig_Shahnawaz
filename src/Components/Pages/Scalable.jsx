import React, { useCallback, useEffect, useState } from "react";
import "../Css/Scalable.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { ScalableData } from "../Data/ScalableData";
import { Link } from "react-router-dom";

export default function Scalable() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === ScalableData.length - 1 ? 0 : prevIndex + 1
    );
  }, [ScalableData.length]);
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? ScalableData.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const sliderStyle = {
    display: "flex",
    transition: "transform 0.5s ease",
    transform: `translateX(-${currentIndex * 100}%)`,
    position: "relative",
  };

  const indicatorStyle = (index) => ({
    backgroundColor: currentIndex === index ? "rgb(255, 0, 187)" : "white",
  });
  const underStyle = {
    textDecoration: "none",
  };
  return (
    <div>
      <div className="scalableContainer">
        <div className="scalableImage">
          {ScalableData.map((imgs, index) => {
            return (
              <Link
                key={index}
                to={`movie-details/${imgs.id}`}
                className="scaleLink"
                style={underStyle}
              >
                <div
                  className="scaleImage"
                  key={`scaleImage${index}`}
                  style={sliderStyle}
                >
                  <img src={imgs.homeScaleSrc} alt="movie-poseter" />
                </div>
              </Link>
            );
          })}

          <button className="scaleLeftBtn" onClick={prevSlide}>
            <FaAngleLeft />
          </button>
          <button className="scaleRightBtn" onClick={nextSlide}>
            <FaAngleRight />
          </button>
          <div className="scaleDiv">
            {ScalableData.map((p, index) => (
              <div
                className="scaleIndi"
                key={`scaleDiv${index}`}
                style={indicatorStyle(index)}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
