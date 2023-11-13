import React from "react";
import "./SearchResultItem.css";

export function SearchResultItem({ project, clickSearchResult}) {
  return (
    <button className="navbarSearchResultItem" onClick={() => clickSearchResult(project.projectId)}>
      <img
        className="searchProjectImage"
        src={project.projectImageUrl}
        alt="Project_Image"
      ></img>
      <span className="searchProjectTitle">{project.projectName}</span>
    </button>
  );
}