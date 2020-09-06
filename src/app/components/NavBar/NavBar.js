import React from "react";
import "./navBar.scss";

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="company-logo">
        <img className="logo-pic" src="/assets/logo.png" alt="prer-logo" />
      </div>
      <div className="search-bar">
        <input className="search-bar" type="text" placeholder="search" />

        <div>
          <img
            className="search-img"
            src="/assets/search.webp"
            alt="lens-img"
          />
        </div>
      </div>
    </div>
  );
}
