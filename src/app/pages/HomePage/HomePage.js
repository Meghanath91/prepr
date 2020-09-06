import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Grid from "../../components/Grid/Grid";
import "./homePage.scss";
import Footer from "../../components/Footer/Footer";

export default function HomePage() {
  return (
    <div className="home-page">
      <NavBar />
      <h1>EXPLORE</h1>
      <div className="grid-container">
        <Grid
          source="/assets/challenge.jpg"
          alt="challenge-image"
          title="Challenges"
        />
        <Grid source="/assets/labs.jpg" alt="lab-image" title="Labs" />
        <Grid
          source="/assets/projects.jpg"
          alt="project-image"
          title="Projects"
        />
      </div>
      <Footer />
    </div>
  );
}
