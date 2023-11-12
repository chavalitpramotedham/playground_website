import React from "react";
import './TopNavBar.css'

export function TopNavBar() {
  return (
    <nav className="navbar">
      <div className="navbarLogo">
        <img className="logoImage"
          src="src/assets/images/playground_logo.png"
          alt="Logo"
        />
        <span className="logoTitle" >PLAYGROUND</span>
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
        <div className="navbarSearch">
          <div className="navbarSearchContent">
            <img className="searchIcon"
              src="src/assets/images/search_icon.png"
              alt="Logo"
            />
            <input className="navbarSearchInput"
              type="text"
              placeholder="Search Projects"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
