import { type FC, type JSX } from "react";
import styles from "./Button.module.css";

const Button: FC = (): JSX.Element => {
  return (
    <>
      <div className={styles.inner}>
        <button className={styles.button}>Открыть →</button>
      </div>
    </>
  );
};

export default Button;
