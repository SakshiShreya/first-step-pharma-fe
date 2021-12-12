import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import styles from "./Error404.module.scss";

interface Error404Props {}

const Error404: FunctionComponent<Error404Props> = () => (
  <div className={`${styles.cont} container`}>
    <h1 className={styles.h1}>404</h1>
    <p className={styles.oops}>Ooops, This Page Not Found!</p>
    <p className={styles.thisLink}>This link might be corrupted</p>
    <p className={styles.orThe}>or the page may have been removed</p>
    <Link className={styles.button} to="/">Go To Home </Link>
  </div>
);

export default Error404;
