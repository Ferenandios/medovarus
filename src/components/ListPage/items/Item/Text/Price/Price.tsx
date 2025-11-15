import { type FC, type JSX } from "react";
import type { Advertisement } from "../../../../../../types/types";
import styles from "./Price.module.css";

const Price: FC<{ ad: Advertisement }> = ({ ad }): JSX.Element => {
  return (
    <>
      <div className={styles.inner}>
        <span className={styles.price}>&#x1F4B0; {ad.price} ₽</span>
      </div>
    </>
  );
};

export default Price;
