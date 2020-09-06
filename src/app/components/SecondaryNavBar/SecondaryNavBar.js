import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./secondaryNavBar.scss";

export default function SecondaryNavBar() {
  const [selected, setSelected] = useState("");
  const handleClick = () => {};
  return (
    <div className="secondary-navbar">
      <Link className="Links" to="/challenges">
        Challenges
      </Link>
      <Link className="Links" to="/labs">
        Labs
      </Link>
      <Link className="Links" to="/projects">
        Projects
      </Link>
    </div>
  );
}
