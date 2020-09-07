import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import SecondaryNavBar from "../../components/SecondaryNavBar/SecondaryNavBar";
import TaskComponent from "../../components/TaskComponent/TaskComponent";
import "./projects.scss";

export default function Projects() {
  return (
    <div className="projects-page">
      <NavBar />
      <SecondaryNavBar />
      <TaskComponent
        source="/assets/projects.jpg"
        title="Automation Project"
        button="View"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu"
      />
      <TaskComponent
        source="/assets/projects.jpg"
        title="Full Stack Project"
        button="View"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu"
      />
      <TaskComponent
        source="/assets/projects.jpg"
        title="Automation Project"
        button="View"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu"
      />
    </div>
  );
}
