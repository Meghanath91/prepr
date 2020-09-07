import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import MyProjectsNavBar from "../../components/MyProjectsNavBar/MyProjectsNavBar";
import "./myProjects.scss";
import TaskComponent from "../../components/TaskComponent/TaskComponent";
export default function MyProjects() {
  return (
    <div>
      <NavBar />
      <div className="my-project-title-bar">
        <h1>Projects</h1>
        <div className="create-project">
          <p>Create Project</p>
          <img src="/assets/add.png" alt="prepr-add-project-icon" />
        </div>
      </div>
      <MyProjectsNavBar />
      <div className="my-projects">
        <TaskComponent
          source="/assets/fullstack.png"
          title="Business Challenge"
          button="Details"
          additionalButton="Delete"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu"
        />
      </div>
    </div>
  );
}
