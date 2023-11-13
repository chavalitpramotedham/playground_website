import React from "react";
import "./TopNavBar.css";
import { useState } from "react";
import { SearchResultItem } from "./SearchResultItem";

export function TopNavBar({updateProjectID}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const data = Array.from({ length: 50 }, (_, index) => ({
    id: index,
    ticker: `P${index}`,
    title: `Project${index}`,
  }));

  const handleChange = (event) => {
    // event.preventDefault();
    const query = event.target.value;
    processSearchInput(query);
  };

  function processSearchInput(query){
    setSearchTerm(query);

    if (query.length > 0) {
      search();
    } else {
      setShowResults(false);
    }
  }

  const search = () => {
    const results = data.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);

    if (results.length > 0) {
      setShowResults(true);
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
              {searchResults.map((item) => {
                return (
                    <SearchResultItem {...item} key={item.id} clickSearchResult = {clickSearchResult}/>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
