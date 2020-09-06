import React from "react";
import "./grid.scss";

export default function Grid({ source, alt, title, handleClick, name }) {
  return (
    <div className="grid" onClick={(e) => handleClick(e, name)}>
      <div className="grid-img-container">
        <img className="grid-img" src={source} alt={alt} />
      </div>
      <div className="title-container">
        <h3>{title}</h3>
      </div>
    </div>
  );
}
