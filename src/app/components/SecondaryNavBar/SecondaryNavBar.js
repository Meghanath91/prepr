import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./secondaryNavBar.scss";

export default function SecondaryNavBar() {
  const [selectedChallenges, setSelectedChallenges] = useState(false);
  const [selectedLabs, setSelectedLabs] = useState(false);
  const [selectedProjects, setSelectedProjects] = useState(false);

  const handleClick = async (e) => {
    const target = e.target.name;
    console.log(target);
    if (target === "challenges") {
      await setSelectedProjects(false);
      await setSelectedLabs(false);
      setSelectedChallenges(!selectedChallenges);
    } else if (target === "labs") {
      // setSelectedChallenges(false);
      // setSelectedProjects(false);
      setSelectedLabs(!selectedLabs);
    } else if (target === "projects") {
      // setSelectedChallenges(false);
      // setSelectedLabs(false);
      setSelectedProjects(!selectedProjects);
    }
  };
  return (
    <div className="secondary-navbar">
      <div
        className={selectedChallenges ? "selected-item-click" : "selected-item"}
        onClick={(e) => handleClick(e)}
      >
        <Link name="challenges" className="Links" to="/challenges">
          Challenges
        </Link>
      </div>

      <div
        className={selectedLabs ? "selected-item-click" : "selected-item"}
        onClick={(e) => handleClick(e)}
      >
        <Link name="labs" className="Links" to="/labs">
          Labs
        </Link>
      </div>
      <div
        className={selectedProjects ? "selected-item-click" : "selected-item"}
        onClick={(e) => handleClick(e)}
      >
        <Link name="projects" className="Links" to="/projects">
          Projects
        </Link>
      </div>
    </div>
  );
}
