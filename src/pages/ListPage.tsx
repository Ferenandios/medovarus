import { useEffect, type FC, type JSX } from "react";
import { useAppDispatch } from "../hooks";
import { getAds } from "../features/global.slice";
import Title from "../components/ListPage/Title/Title";
import Filters from "../components/ListPage/Filters/Filters";
import Items from "../components/ListPage/items/Items";

const ListPage: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAds(1));
  }, [dispatch]);
  return (
    <main>
      <Title />
      <Filters />
      <Items />
    </main>
  );
};

export default ListPage;
