import React from "react";
import { Route, useRouteMatch, Redirect } from "react-router-dom";
import Component from "./Component";
import FunctionalComponent from "./FunctionalComponent";
import ClassComponent from "./ClassComponent";

export default function ComponentRoutes() {
  let { path, url } = useRouteMatch();
  return (
    <>
      {/*NavBar here */}
      <Route path={`${path}/what-is-components`}>
        <Component />
      </Route>

      <Redirect to={`${path}/what-is-components`} />

      <Route path={`${path}/function-component`}>
        <FunctionalComponent />
      </Route>
      <Route path={`${path}/class-component`}>
        <ClassComponent/>
      </Route>
    </>
  );
}
