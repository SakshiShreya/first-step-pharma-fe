// import axios from "axios";
import * as React from "react";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import styles from "./HomePage.module.scss";

interface HomePageProps {}

const HomePage: React.FunctionComponent<HomePageProps> = () => {
  const dimensions = useWindowDimensions();
  const desktopStyle = {
    backgroundImage: `url("${process.env.PUBLIC_URL}/images/placeholder-1024.png")`,
  };

  return (
    <div
      className={styles.cont}
      style={dimensions.device === "desktop" ? desktopStyle : {}}
    >
      {dimensions.device !== "desktop" && (
        <div className={styles.image}>
          <img
            src={`${process.env.PUBLIC_URL}/images/placeholder-1024.png`}
            alt=""
          />
        </div>
      )}
      <div className={`${styles.text} container`}>
        <h1 className={styles.h1}>First Step Pharma</h1>
        <h2 className={`${styles.h2} roboto`}>Pharmaceutical Consultancy</h2>
      </div>
    </div>
  );
};

export default HomePage;
