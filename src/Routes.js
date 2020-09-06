import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./app/pages/HomePage/HomePage";
import Projects from "./app/pages/Projects/Projects";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
      </Switch>
    </Router>
  );
}
