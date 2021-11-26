import "./App.scss";
import { HashRouter } from "react-router-dom";
import React from "react";
import Footer from "./components/footer/Footer";

interface AppProps {}

const App: React.FunctionComponent<AppProps> = () => (
  <HashRouter>
    <div className="test">abc</div>
    <Footer />
  </HashRouter>
);

export default App;
