import React from "react";
import "./CarouselItem.css";

export function CarouselItem({id, ticker, title}) {

  const padwithZeros = (num) => {
    return (num+1).toString().padStart(2,'0');
  }

  return (
    <div className="carouselItem">
      <div className="carouselItemContents">
        <div className="leftSide">
          <span className="rank">{padwithZeros(id)}</span>
          <span className="separator"></span>
        </div>
        <div className="rightSide">
          <img
            className="carouselProjectImage"
            src="src/assets/images/project_placeholder.png"
            alt="Project_Image"
          />
          <div className="carouselProjectInfo">
            <span className="carouselProjectTicker">{ticker}</span>
            <span className="carouselProjectTitle">{title}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
