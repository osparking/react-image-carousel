import React from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./Carousel.css";

export const Carousel = ({ data }) => {
  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" />
      {data.map((item, idx) => {
        return (
          <img src={item.src} alt={item.alt} key={idx} className="slide" />
        );
      })}
      <BsArrowRightCircleFill className="arrow arrow-right" />
      <span className="indicators">
        {data.map((_, idx) => {
          return (
            <button key={idx} onClick={null} className="indicator"></button>
          );
        })}
      </span>
    </div>
  );
};
