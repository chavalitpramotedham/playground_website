import React from "react";
import { useState } from "react";
import "./InfluencerListItem.css";

export function InfluencerListItem({ id, handle, score, followers }) {
  const itemWidth = score * 100;
  const itemHeight = score * 100;

  return (
    <div className="influencerListItem">
      <img
        className="influencerLogo"
        src="src/assets/images/project_placeholder.png"
        alt="Logo"
        style={{ width: `${itemWidth}px`, height: `${itemHeight}px` }}
      />
      <div className="influencerInfo">
        <span className="influencerHandle">{handle}</span>
        <span className="influencerFollowers">{followers} Followers</span>
      </div>
    </div>
  );
}
