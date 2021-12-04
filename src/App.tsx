import "./App.scss";
import { HashRouter } from "react-router-dom";
import React from "react";
import Footer from "./components/footer/Footer";
import Routes from "./routes";

interface AppProps {}

const App: React.FunctionComponent<AppProps> = () => (
  <HashRouter>
    <Routes />
    <Footer />
  </HashRouter>
);

export default App;
