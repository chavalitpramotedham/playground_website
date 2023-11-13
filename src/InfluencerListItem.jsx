import React from "react";
import { useState } from "react";
import "./InfluencerListItem.css";

export function InfluencerListItem({ user }) {
  // Mock Values
  const score = 0.6 + 0.4 * Math.random();
  const followers = Math.round(Math.random() * (5000 - 4000) + 1000);

  const itemWidth = score * 100;
  const itemHeight = score * 100;

  console.log(user);

  return (
    <div className="influencerListItem">
      <img
        className="influencerLogo"
        src={user.profileImageUrl}
        alt="User Profile Picture"
        style={{ width: `${itemWidth}px`, height: `${itemHeight}px` }}
      />
      <div className="influencerInfo">
        <span className="influencerHandle">{user.displayName}</span>
        <span className="influencerFollowers">
          {followers} Followers
        </span>
      </div>
    </div>
  );
}
