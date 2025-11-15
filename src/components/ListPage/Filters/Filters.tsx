import { type FC, type JSX } from "react";
import Text from "./Text/Text";
import List from "./List/List";
import styles from "./Filters.module.css";

const Filters: FC = (): JSX.Element => {
  return (
    <>
      <div className={styles.ansoc}>
        <div className={styles.inner}>
          <Text />
          <List />
        </div>
      </div>
    </>
  );
};

export default Filters;
