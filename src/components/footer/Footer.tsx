import { faAddressCard, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import Loader from "../generic/loader/Loader";
import styles from "./Footer.module.scss";

interface FooterProps {}

interface IAddress {
  id: number;
  value: string;
}

const Footer: React.FunctionComponent<FooterProps> = () => {
  const phone = "0987654321";
  const address: Array<IAddress> = [
    { id: 0, value: "ABC DEF" },
    { id: 1, value: " GHI JKL" },
  ];

  return (
    <div className={styles.footer}>
      <div className={`${styles.cont} container`}>
        <h2 className={styles.h2}>Contact:</h2>
        <p className={styles.contact}>
          <FontAwesomeIcon icon={faPhone} className={styles.icon} />
          {phone || <Loader width={90} height={14} />}
        </p>

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

            {!address.length && (
              <>
                <p className={styles.margin_btm}>
                  <Loader width={100} height={14} />
                </p>
                <p>
                  <Loader width={90} height={14} />
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
