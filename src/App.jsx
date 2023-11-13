import React from "react";
import { TopNavBar } from "./TopNavBar";
import { Carousel } from "./Carousel";
import { ProjectBody } from "./ProjectBody";
import "./index.css";
import { useState } from "react";

function App() {

  const [currentProject, setCurrentProject] = useState(1);

  console.log(currentProject);

  function changeProject(id) {
    if (id === currentProject) return
    setCurrentProject(id);
  }

  return (
    <div className="overall">
      <TopNavBar updateProjectID = {changeProject}/>
      <Carousel updateProjectID = {changeProject}/>
      <ProjectBody projectID ={currentProject}/>
    </div>
  );
}

export default App;
