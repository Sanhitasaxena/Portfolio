import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "../components/About";
import Projects from "../components/Projects";

const PrimaryRoutes = () => {
  return (
    <>
      <Switch>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </>
  );
};

export default PrimaryRoutes
