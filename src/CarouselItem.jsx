import React from "react";
import "./CarouselItem.css";

export function CarouselItem({ project, updateProjectID, projectIndex }) {
  const padwithZeros = (num) => {
    return (num + 1).toString().padStart(2, "0");
  };

  return (
    <button className="carouselItem" onClick={() => updateProjectID(project.projectId)}>
      <div className="carouselItemContents">
        <div className="leftSide">
          <span className="rank">{padwithZeros(projectIndex)}</span>
          <span className="separator"></span>
        </div>
        <div className="rightSide">
          <img
            className="carouselProjectImage"
            src={project.projectImageUrl}
            alt="Project_Image"
          />
          <div className="carouselProjectInfo">
            <span className="carouselProjectTicker">{project.projectName}</span>
            <span className="carouselProjectTitle">{project.projectName}</span>
          </div>
        </div>
      </div>
    </button>
  );
}
