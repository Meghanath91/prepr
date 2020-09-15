import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import SecondaryNavBar from "../../components/SecondaryNavBar/SecondaryNavBar";
import TaskComponent from "../../components/TaskComponent/TaskComponent";
import "./challenge.scss";
import ToolTip from "../../components/Tooltip/Tooltip";

export default function Challenges() {
  return (
    <div className="challenges-page">
      {" "}
      <NavBar />
      <SecondaryNavBar />
      <ToolTip content="hi" />
      <TaskComponent
        source="/assets/fullstack.png"
        title="Business Challenge"
        button="View"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu"
      />
      <TaskComponent
        source="/assets/projects.jpg"
        title="Full Stack Challenge"
        button="View"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu"
      />
      <TaskComponent
        source="/assets/frontend.jpg"
        title="Front End Challenge"
        button="View"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu"
      />
    </div>
  );
}
