import React from "react";
import "./navBar.scss";

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="company-logo">
        <img className="logo-pic" src="/assets/logo.png" alt="prer-logo" />
      </div>
      <div className="search-bar">
        <input type="text" placeholder="search" />
        <img src="/assets/search.webp" alt="lens-img" />
      </div>
    </div>
  );
}
