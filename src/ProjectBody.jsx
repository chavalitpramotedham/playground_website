import React from "react";
import { useState } from "react";
import "./ProjectBody.css";
import ProjectTitleSection from "./ProjectTitleSection";
import SocialsGraphSection from "./SocialGraphSection";

export function ProjectBody({ project }) {
  //   const influencers =    Array.from({ length: Math.round(3+Math.random()*3) }, (_, index) => ({
  //     id: index,
  //     handle: `Influencer${index}`,
  //     score: 0.6 + 0.4 * Math.random(),
  //     followers: Math.round(Math.random() * (5000 - 4000) + 1000),
  //   }));

  //   const sortedInfluencers = influencers.sort((a, b) => b.score - a.score);

  //   const socials = [
  //     { id: 0, title: "Twitter", handle: `@newproject${projectID}Twitter` },
  //     { id: 1, title: "Telegram", handle: `@newproject${projectID}Telegram` },
  //   ];
  
  project.socials = [{ id: 0, title: "Twitter", handle: project.projectName }];

  return (
    <>
      <div className="projectOverall">
        <ProjectTitleSection project={project} />
        <SocialsGraphSection />
      </div>
    </>
  );
}
