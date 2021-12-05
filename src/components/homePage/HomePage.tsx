import * as React from "react";
import Cover from "./cover/Cover";
import Services from "./services/Services";

interface HomePageProps {}

const HomePage: React.FunctionComponent<HomePageProps> = () => (
  <div>
    <Cover />
    <Services />
  </div>
);

export default HomePage;
