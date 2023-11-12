import React from "react";
import { useState } from "react";
import "./ProjectBody.css";
import ProjectTitleSection from "./ProjectTitleSection";
import SocialsGrapSection from "./SocialGraphSection";

export function ProjectBody() {
  const projectTitle = "NEW PROJECT";
  const influencers = Array.from({ length: 5 }, (_, index) => ({
    id: index,
    handle: `Influencer${index}`,
    score: 0.6 + 0.4 * Math.random(),
    followers: Math.round(Math.random() * (5000 - 4000) + 1000),
  }));

  const sortedInfluencers = influencers.sort((a, b) => b.score - a.score);

  console.log(influencers);
  return (
    <>
      <div className="projectOverall">
        <ProjectTitleSection title = {projectTitle} influencers ={(sortedInfluencers)} />
        <SocialsGrapSection/>
      </div>
    </>
  );
}
