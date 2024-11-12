import React from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./Carousel.css";

export const Carousel = ({ data }) => {
  return (
    <div className="carousel">
      <BsArrowLeftCircleFill />
      {data.map((item, idx) => {
        return (
          <img src={item.src} alt={item.alt} key={idx} className="slide" />
        );
      })}
      <BsArrowRightCircleFill />
    </div>
  );
};
