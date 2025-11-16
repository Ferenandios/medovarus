import { type FC, type JSX } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { getItem } from "../../../features/global.slice";

const Pagination: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { id } = useAppSelector((state) => state.global.currentItem);
  const handleClick = (id: number) => {
    dispatch(getItem(id));
  };
  return (
    <>
      <div className="flex justify-between mt-[10px] px-[30px] mb-[50px]">
        <Link to="/list">← К списку</Link>
        <div>
          <Link onClick={() => handleClick(id - 1)} to={`/item/${id - 1}`}>
            ◀ Пред
          </Link>
          <span>|</span>
          <Link onClick={() => handleClick(id + 1)} to={`/item/${id + 1}`}>
            След ▶
          </Link>
        </div>
      </div>
    </>
  );
};

export default Pagination;
