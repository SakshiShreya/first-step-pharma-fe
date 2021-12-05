import * as React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/homePage/HomePage";

interface RoutesProps {}

const Routes: React.FunctionComponent<RoutesProps> = () => (
  <Switch>
    <Route path="/">
      <HomePage />
    </Route>
  </Switch>
);

export default Routes;
