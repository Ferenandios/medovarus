import { type FC, type JSX } from "react";
import Title from "./Title/Title";
import type { Advertisement } from "../../../../../types/types";
import Price from "./Price/Price";
import List from "./List/List";
import styles from "./Text.module.css";

const Text: FC<{ ad: Advertisement }> = ({ ad }): JSX.Element => {
  return (
    <>
      <div className={styles.inner}>
        <Title ad={ad} />
        <Price ad={ad} />
        <List ad={ad} />
      </div>
    </>
  );
};

export default Text;
