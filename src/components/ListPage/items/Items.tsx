import React, { type FC, type JSX } from "react";
import { useAppSelector } from "../../../hooks";
import Item from "./Item/Item";
import styles from "./Items.module.css";

const Items: FC = (): JSX.Element => {
  const { ads } = useAppSelector((state) => state.global);
  return (
    <>
      <div className={styles.ansoc}>
        <div className={styles.inner}>
          {ads.map((ad) => (
            <Item key={ad.id} ad={ad} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Items;
