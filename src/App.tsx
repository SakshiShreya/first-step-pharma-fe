import "./App.scss";
import { HashRouter } from "react-router-dom";
import React from "react";

interface AppProps {}

const App: React.FunctionComponent<AppProps> = () => (
  <HashRouter>
    <div className="test">abc</div>
  </HashRouter>
);

export default App;
