import React from "react";
import { useState } from "react";
import "./ProjectTitleSection.css";
import { InfluencerListItem } from "./InfluencerListItem";
import { SocialsItem } from "./SocialsItem";

export function ProjectTitleSection({ projectInfo }) {

  return (
    <div className="projectTitleSection">
      <div className="projectTitleSectionContents">
        <div className="projectSummary">
          <div className="projectBasicInfo">
            <img
              className="projectLogo"
              src="src/assets/images/project_placeholder.png"
              alt="Logo"
            />
            <div className="projectTitle">
              <span className="title">{projectInfo.title}</span>

              <ul className="socials">
                {projectInfo.socials.map((socialsItem) => {
                  return <SocialsItem {...socialsItem} key={socialsItem.id} />;
                })}
              </ul>
            </div>
          </div>
          <div className="projectAdditional">
            <div className="projectAdditionalContents">
              <button className="shareButton">
                <img
                  className="shareButtonIcon"
                  src="src/assets/images/share_button.png"
                  alt="Logo"
                />
                <span className="shareButtonText">Share Project</span>
              </button>
              <div className="ratingButtons">
                <button className="upvoteButton">
                  <span className="upvoteButtonText">🚀 Promote</span>
                </button>
                <button className="downvoteButton">
                  <span className="downvoteButtonText">👎🏻</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="influencerSection">
          <div className="connector">
            <div className="topConnector"></div>
            <div className="bottomConnector"></div>
          </div>
          <div className="influencerListSection">
            <span className="influencerListTitle">
              Most Influential Followers:
            </span>
            <ul className="influencerList">
              {projectInfo.influencers.map((influencer) => {
                return (
                  <InfluencerListItem {...influencer} key={influencer.id} />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectTitleSection;
