import * as React from "react";
import Cover from "./cover/Cover";

interface HomePageProps {}

const HomePage: React.FunctionComponent<HomePageProps> = () => (
  <div>
    <Cover />
  </div>
);

export default HomePage;
