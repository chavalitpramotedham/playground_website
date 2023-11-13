import React from "react";
import "./SearchResultItem.css";

export function SearchResultItem({ id, title, clickSearchResult}) {
  return (
    <button className="navbarSearchResultItem" onClick={() => clickSearchResult(id)}>
      <img
        className="searchProjectImage"
        src="src/assets/images/project_placeholder.png"
        alt="Project_Image"
      ></img>
      <span className="searchProjectTitle">{title}</span>
    </button>
  );
}