import { type FC, type JSX } from "react";
import type { Advertisement } from "../../../../types/types";
import Button from "./Button/Button";
import Image from "./image/Image";
import styles from "./Item.module.css";
import Text from "./Text/Text";

const Item: FC<{ ad: Advertisement }> = ({ ad }): JSX.Element => {
  return (
    <>
      <div className={styles.ansoc}>
        <div className={styles.inner}>
          <Image ad={ad} />
          <Text ad={ad} />
        </div>
        <Button />
      </div>
    </>
  );
};

export default Item;
