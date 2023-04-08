import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import Cover from "../components/Cover/Cover"

const PrimaryRoutes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        {/* <Route path="/">
          <Cover />
        </Route> */}
      </Switch>
    </>
  );
};

export default PrimaryRoutes
