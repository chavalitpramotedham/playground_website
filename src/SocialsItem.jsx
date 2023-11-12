import React from "react";
import { useState } from "react";
import "./SocialsItem.css";

export function SocialsItem({ id, title, handle }) {
  const getImagePath = (title) => {
    if (title.toLowerCase() === "twitter") {
      return "src/assets/images/X_icon.png";
    } else if (title.toLowerCase() === "telegram") {
      return "src/assets/images/Tele_icon.png";
    }
  };

  return (
    <div className="socialsItem">
      <img
        className="socialsItemLogo"
        src={getImagePath(title)}
        alt="Logo"
      />
      <span className="socialsItemHandle">{handle}</span>
    </div>
  );
}
