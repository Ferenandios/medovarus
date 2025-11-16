import { useEffect, type FC, type JSX } from "react";
import { useParams } from "react-router-dom";
import { getItem } from "../../features/global.slice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import Title from "./Title/Title";
import Upper from "./Upper/Upper";
import Info from "./Info/Info";
import Buttons from "./Buttons/Buttons";
import Pagination from "./Pagination/Pagination";

const ItemPage: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { currentItem } = useAppSelector((state) => state.global);
  const { id } = useParams();
  useEffect(() => {
    if (currentItem.id === -1) {
      dispatch(getItem(Number(id)));
    }
  });
  return (
    <>
      <main>
        <Title />
        <Upper />
        <Info />
        <Buttons />
        <Pagination />
      </main>
    </>
  );
};

export default ItemPage;
