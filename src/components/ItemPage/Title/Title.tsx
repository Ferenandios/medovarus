import { type FC, type JSX } from "react";
import styles from "./Title.module.css";
import { useAppSelector } from "../../../hooks";

const Title: FC = (): JSX.Element => {
  const { id } = useAppSelector((state) => state.global.currentItem);
  return (
    <>
      <div className={styles.ansoc}>
        <h1 className={styles.title}>Объявление {id}</h1>
      </div>
    </>
  );
};

export default Title;
