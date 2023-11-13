import React from "react";
import { TopNavBar } from "./TopNavBar";
import { Carousel } from "./Carousel";
import { ProjectBody } from "./ProjectBody";
import "./index.css";
import { useState } from "react";
import jsonData from './data/sample_data_playground.json';

class Project {
  constructor(
      projectId,
      projectName,
      projectUrl,
      projectImageUrl,
      projectBio,
      projectRawScore,
      projectScore,
      projectDiscoveryDate,
      connectedUsers
  ) {
      this.projectId = projectId;
      this.projectName = projectName;
      this.projectUrl = projectUrl;
      this.projectImageUrl = projectImageUrl;
      this.projectBio = projectBio;
      this.projectRawScore = projectRawScore;
      this.projectScore = projectScore;
      this.projectDiscoveryDate = projectDiscoveryDate;
      this.connectedUsers = connectedUsers;
  }
}

const projects = jsonData.map(projectData => {
  return new Project(
    projectData.projectId,
    projectData.projectName,
    projectData.projectUrl,
    projectData.projectImageUrl,
    projectData.projectBio,
    projectData.projectRawScore,
    projectData.projectScore,
    projectData.projectDiscoveryDate,
    projectData.connectedUsers
  );
});

function App() {

  const [currentProject, setCurrentProject] = useState(projects[0].projectId);

  function changeProject(id) {

    console.log(id);
    if (id === currentProject) return
    setCurrentProject(id);
  }

  return (
    <div className="overall">
      <TopNavBar updateProjectID = {changeProject} projects = {projects}/>
      <Carousel updateProjectID = {changeProject} projects = {projects} />
      <ProjectBody project = {projects.find(project => project.projectId === currentProject)}/>
    </div>
  );
}

export default App;
