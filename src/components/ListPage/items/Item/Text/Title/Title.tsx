import React, { type FC, type JSX } from "react";
import type { Advertisement } from "../../../../../../types/types";
import styles from "./Title.module.css";

const Title: FC<{ ad: Advertisement }> = ({ ad }): JSX.Element => {
  return (
    <>
      <div>
        <h4 className={styles.title}>{ad.title.split(":")[1]}</h4>
      </div>
    </>
  );
};

export default Title;
