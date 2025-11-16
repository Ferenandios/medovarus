import { type FC, type JSX } from "react";
import styles from "./Button.module.css";
import type { Advertisement } from "../../../../../types/types";
import { Link } from "react-router-dom";

const Button: FC<{ ad: Advertisement }> = ({ ad }): JSX.Element => {
  return (
    <>
      <div className={styles.inner}>
        <Link to={`/item/${ad.id}`} className={styles.button}>
          Открыть →
        </Link>
      </div>
    </>
  );
};

export default Button;
