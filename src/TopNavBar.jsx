import React from "react";
import "./TopNavBar.css";
import { useState } from "react";
import { SearchResultItem } from "./SearchResultItem";

export function TopNavBar({ updateProjectID, projects }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleChange = (event) => {
    // event.preventDefault();
    const query = event.target.value;
    processSearchInput(query);
  };

  function processSearchInput(query) {
    setSearchTerm(query);

    if (query.length > 0) {
      search();
    } else {
      setShowResults(false);
    }
  }

  const search = () => {
    const results = projects.filter((project) =>
      project.projectName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);

    if (results.length > 0) {
      setShowResults(true);
    }else{
        setShowResults(false);
    }
  };

  function clickSearchResult(id) {
    processSearchInput("");
    updateProjectID(id);
  }

  return (
    <nav className="navbar">
      <div className="navbarLogo">
        <img
          className="logoImage"
          src="src/assets/images/playground_logo.png"
          alt="Logo"
        />
        <span className="logoTitle">PLAYGROUND</span>
      </div>

      {/* <ul className="navbarMenu">
        <li className="navbarMenuItem">
          <a href="#">Listings</a>
        </li>
        <li className="navbarMenuItem">
          <a href="#">Promotions</a>
        </li>
        <li className="navbarMenuItem">
          <a href="#">Rewards</a>
        </li>
        <li className="navbarMenuItem">
          <a href="#">Our Partners</a>
        </li>
      </ul> */}

      <div className="navbarRightSide">
        <div className="navbarSearchBarAndResults">
          <div className="navbarSearchOuter">
            <div className="navbarSearchBar">
              <img
                className="searchIcon"
                src="src/assets/images/search_icon.png"
                alt="Logo"
              />
              <input
                className="navbarSearchInput"
                type="text"
                placeholder="Search Projects"
                value={searchTerm}
                onChange={handleChange}
              />
            </div>
            {showResults && (
            <div className="navbarSearchResultList">
              {searchResults.map((project) => {
                return (
                  <SearchResultItem
                    project = {project}
                    key={project.projecId}
                    clickSearchResult={clickSearchResult}
                  />
                );
              })}
            </div>
          )}
          </div>
        </div>
      </div>
    </nav>
  );
}
