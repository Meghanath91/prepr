import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import SecondaryNavBar from "../../components/SecondaryNavBar/SecondaryNavBar";
import TaskComponent from "../../components/TaskComponent/TaskComponent";
import "./labs.scss";
export default function Labs() {
  return (
    <div className="challenges-page">
      <NavBar />
      <SecondaryNavBar />
      <TaskComponent
        source="/assets/frontend.jpg"
        title="FUN Lab section C"
        button="View"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu"
      />
      <TaskComponent
        source="/assets/projects.jpg"
        title="FUN Lab section B"
        button="View"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu"
      />
      <TaskComponent
        source="/assets/fullstack.png"
        title="FUN Lab section A"
        button="View"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu"
      />
    </div>
  );
}
