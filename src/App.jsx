import React from "react";
import { TopNavBar } from "./TopNavBar";
import { Carousel } from "./Carousel";
import { ProjectBody } from "./ProjectBody";
import "./index.css";

function App() {
  return (
    <div className="overall">
      <TopNavBar />
      <Carousel/>
      <ProjectBody/>
    </div>
  );
}

export default App;
