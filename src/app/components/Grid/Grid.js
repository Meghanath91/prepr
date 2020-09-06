import React from "react";
import "./grid.scss";

export default function Grid({ source, alt, title, handleClick }) {
  return (
    <div className="grid" onClick={handleClick}>
      <div className="grid-img-container">
        <img className="grid-img" src={source} alt={alt} />
      </div>
      <div className="title-container">
        <h3>{title}</h3>
      </div>
    </div>
  );
}
