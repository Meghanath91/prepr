import React from "react";
import "./tooltip.scss";
import { Tooltip, Typography, withStyles } from "@material-ui/core";
export default function ToolTip({ content }) {
  const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: "#f5f5f9",
      color: "rgba(0, 0, 0, 0.87)",
      maxWidth: 600,
      fontSize: theme.typography.pxToRem(16),
      border: "1px solid #dadde9",
    },
  }))(Tooltip);
  return (
    <HtmlTooltip
      title={
        <React.Fragment>
          <Typography color="inherit"></Typography> {content}
        </React.Fragment>
      }
    >
      <input
        className="tooltip-icon"
        type="button"
        value="????????????????????"
      />
    </HtmlTooltip>
  );
}
