import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./app/pages/HomePage/HomePage";
import Projects from "./app/pages/Projects/Projects";
import Challenges from "./app/pages/Challenges/Challenges";
import Labs from "./app/pages/Labs/Labs";
import MyProjects from "./app/pages/MyProjects/MyProjects";

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
        <Route path="/challenges">
          <Challenges />
        </Route>
        <Route path="/labs">
          <Labs />
        </Route>
        <Route path="/myProjects">
          <MyProjects />
        </Route>
      </Switch>
    </Router>
  );
}
