import { HashRouter } from "react-router-dom";
import React from "react";
import Footer from "./components/footer/Footer";
import Routes from "./routes";
import Header from "./components/header/Header";
import "./App.scss";

interface AppProps {}

const App: React.FunctionComponent<AppProps> = () => (
  <HashRouter>
    <Header />
    <Routes />
    <Footer />
  </HashRouter>
);

export default App;
