import React, { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import fsLogo from "../../assets/images/firstStepLogo2.svg";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import styles from "./Header.module.scss";

interface HeaderProps {}

interface INav {
  label: string;
  url: string;
}

const Header: FunctionComponent<HeaderProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dimensions = useWindowDimensions();
  const nav: Array<INav> = [
    {
      label: "Home",
      url: "/home",
    },
    {
      label: "About",
      url: "/about",
    },
    {
      label: "Contact Us",
      url: "/contactus",
    },
  ];
  const linkType = isOpen ? styles.linkMobile : styles.linkDesktop;

  const navList = nav.map((ctrl) => (
    <Link className={linkType} key={ctrl.label} to={ctrl.url}>
      {ctrl.label}
    </Link>
  ));

  const sideBarStyles = isOpen ? styles.open : styles.close;
  const navigation = (
    <nav className={isOpen ? styles.listMobile : styles.listDesktop}>
      {navList}
    </nav>
  );

  return (
    <header className={styles.header}>
      <div className={`${styles.cont} container`}>
        <div className={styles.content}>
          <img className={styles.img} src={fsLogo} alt="" />
          <Link className={styles.link} to="/">
            <h2 className={styles.title}>First Step Pharma</h2>
          </Link>
        </div>
        {dimensions.device === "desktop" ? (
          navigation
        ) : (
          <FontAwesomeIcon
            onClick={() => {
              setIsOpen(true);
            }}
            icon={faBars}
            className={`${styles.faBars} ${styles.content}`}
          />
        )}
      </div>
      {dimensions.device !== "desktop" && (
        <div className={sideBarStyles}>
          <div className={styles.header}>
            <div className={`${styles.cont} container`}>
              <div className={styles.content}>
                <img className={styles.img} src={fsLogo} alt="" />
                <h2 className={styles.title}>First Step Pharma</h2>
              </div>
              <FontAwesomeIcon
                onClick={() => {
                  setIsOpen(false);
                }}
                icon={faTimes}
                className={`${styles.faBars} ${styles.content}`}
              />
            </div>
          </div>
          {navigation}
        </div>
      )}
    </header>
  );
};

export default Header;
