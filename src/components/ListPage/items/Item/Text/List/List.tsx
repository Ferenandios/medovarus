import { type FC, type JSX } from "react";
import type { Advertisement } from "../../../../../../types/types";
import Category from "./Category/Category";
import Date from "./Date/Date";
import styles from "./List.module.css";

const List: FC<{ ad: Advertisement }> = ({ ad }): JSX.Element => {
  return (
    <>
      <ul className={styles.list}>
        <Category ad={ad} />
        <span className={styles.dot}>&#x2022;</span>
        <Date ad={ad} />
      </ul>
    </>
  );
};

export default List;
