import React from "react";
import "./taskComponent.scss";

export default function TaskComponent({ title, description, source, alt }) {
  return (
    <div className="task-container">
      <img src={source} alt={alt} />

      <div className="task-details">
        <p className="task-title">{title}</p>
        <p>{description}</p>
      </div>
      <div className="link">View</div>
    </div>
  );
}
