import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Grid from "../../components/Grid/Grid";
import "./homePage.scss";
import Footer from "../../components/Footer/Footer";

export default function HomePage() {
  const handleClick = (e) => {};
  return (
    <div className="home-page">
      <NavBar />
      <h1>EXPLORE</h1>
      <div className="grid-container">
        <Grid
          source="/assets/challenge.jpg"
          alt="challenge-image"
          title="Challenges"
          name="challenges"
          handleClick={handleClick}
        />
        <Grid
          source="/assets/labs.jpg"
          alt="lab-image"
          title="Labs"
          name="labs"
          handleClick={handleClick}
        />
        <Grid
          source="/assets/projects.jpg"
          alt="project-image"
          title="Projects"
          name="projects"
          handleClick={handleClick}
        />
      </div>
      <Footer />
    </div>
  );
}
