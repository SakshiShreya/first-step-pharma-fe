import { faAddressCard, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import styles from "./Footer.module.scss";

interface FooterProps {}

interface IAddress {
  id: number;
  value: string;
}

const Footer: React.FunctionComponent<FooterProps> = () => {
  const phone = "+91 9876543210";
  const address: Array<IAddress> = [
    { id: 0, value: "sdfg sdfgh asdf" },
    { id: 1, value: "wert ertgh erty" },
    { id: 2, value: "asdfgh" },
  ];

  return (
    <div className={styles.footer}>
      <div className={`${styles.cont} container`}>
        <h2 className={styles.h2}>Contact:</h2>
        {phone && (
          <p className={styles.contact}>
            <FontAwesomeIcon icon={faPhone} className={styles.icon} />
            +91 9876543210
          </p>
        )}
        {address && (
          <div className={`${styles.address} ${styles.contact}`}>
            <FontAwesomeIcon icon={faAddressCard} className={styles.icon} />
            <div>
              {address.map((line, index) => (
                <p key={`line${line.id}`}>
                  {line.value}
                  {index !== address.length - 1 &&
                    line.value[line.value.length - 1] !== "," &&
                    ","}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Footer;
