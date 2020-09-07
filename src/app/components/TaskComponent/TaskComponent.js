import React from "react";
import "./taskComponent.scss";

export default function TaskComponent({
  title,
  description,
  source,
  alt,
  button,
  additionalButton,
}) {
  return (
    <div className="task-container">
      <img src={source} alt={alt} />

      <div className="task-details">
        <p className="task-title">{title}</p>
        <p>{description}</p>
      </div>
      <div className="view-button">
        <img src="/assets/view.png" alt={alt} />
        <div className="link">{button}</div>
      </div>
      {additionalButton ? (
        <div className="delete-button">
          <img src="/assets/delete.png" alt={alt} />
          <div>{additionalButton}</div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
