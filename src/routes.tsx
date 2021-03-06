import * as React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./components/about/about";
import Error404 from "./components/error/Error404";
import HomePage from "./components/homePage/HomePage";
import ServicesPage from "./components/services/ServicesPage";

interface RoutesProps {}

const Routes: React.FunctionComponent<RoutesProps> = () => (
  <Switch>
    <Route path="/" component={HomePage} exact />
    <Route path="/home" component={HomePage} exact />
    <Route path="/about" component={About} exact />
    <Route path="/services" component={ServicesPage} exact />
    <Route component={Error404} />
  </Switch>
);

export default Routes;
