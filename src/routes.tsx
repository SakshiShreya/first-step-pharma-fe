import * as React from "react";
import { Route, Switch } from "react-router-dom";
import Error404 from "./components/error/Error404";
import HomePage from "./components/homePage/HomePage";

interface RoutesProps {}

const Routes: React.FunctionComponent<RoutesProps> = () => (
  <Switch>
    <Route path="/" component={HomePage} exact />
    <Route component={Error404} />
  </Switch>
);

export default Routes;
