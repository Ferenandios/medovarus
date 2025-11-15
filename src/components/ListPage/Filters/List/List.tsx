import styles from "./List.module.css";
import { type FC, type JSX } from "react";

const List: FC = (): JSX.Element => {
  const list: string[] = ["Категория", "Цена", "Поиск"];
  const status: string = "множественный";
  return (
    <>
      <div>
        <ul className={styles.list1}>
          <li>
            <button>Статус (✔ {status})</button>
          </li>
          <ul className={styles.list2}>
            {list.map((text) => (
              <li className={styles.item}>
                <button>{text}</button>
              </li>
            ))}
          </ul>
        </ul>
      </div>
    </>
  );
};

export default List;
