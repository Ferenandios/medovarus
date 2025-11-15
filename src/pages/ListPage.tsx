import { useEffect, type FC, type JSX } from "react";
import { useAppDispatch } from "../hooks";
import { getAds } from "../features/global.slice";

const ListPage: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAds());
  }, [dispatch]);
  return <div className="bg-lime-200">works!</div>;
};

export default ListPage;
