import { type FC, type JSX } from "react";
import type { Advertisement } from "../../../../../types/types";
import styles from "./Image.module.css";

const Image: FC<{ ad: Advertisement }> = ({ ad }): JSX.Element => {
  return (
    <>
      <div>
        <div
          style={{ backgroundImage: `url(${ad.images[0]})` }}
          className={styles.image}
        ></div>
      </div>
    </>
  );
};

export default Image;
