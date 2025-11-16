import { type FC, type JSX } from "react";
import { clearPage, getAds } from "../../../../../features/global.slice";
import { useAppDispatch } from "../../../../../hooks";

const Page: FC<{ value: number; isActive: boolean }> = ({
  value,
  isActive,
}): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(clearPage());
    dispatch(getAds(value));
  };

  return (
    <li>
      <button
        onClick={handleClick}
        className={`px-2 py-1 rounded 
        ${isActive ? "bg-blue-500 text-white" : "bg-transparent"}`}
      >
        {value}
      </button>
    </li>
  );
};

export default Page;
