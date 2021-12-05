import * as React from "react";
import styles from "./Loader.module.scss";

interface LoaderProps {
  width: number | string;
  height: number | string;
  style?: React.CSSProperties;
}

const Loader: React.FunctionComponent<LoaderProps> = ({
  height,
  width,
  style,
}) => <span className={styles.loader} style={{ height, width, ...style }} />;

Loader.defaultProps = {
  style: {},
};

export default Loader;
