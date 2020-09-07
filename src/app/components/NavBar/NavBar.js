import React from "react";
import { useHistory } from "react-router-dom";
import "./navBar.scss";

export default function NavBar() {
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  };
  // const handleMode = () => {
  //   const element = document.body;
  //   element.classList.toggle("dark-mode");
  // };
  return (
    <div className="navbar">
      <div className="company-logo">
        <img
          className="logo-pic"
          src="/assets/logo.png"
          alt="prer-logo"
          onClick={handleClick}
        />
      </div>
      {/* <button onClick={handleMode}>mode</button> */}
      <div className="search-bar">
        <input type="text" placeholder="search" />
        <img src="/assets/search.webp" alt="lens-img" />
      </div>
    </div>
  );
}
