import { type FC, type JSX } from "react";
import { useAppSelector } from "../../../../hooks";

const Total: FC = (): JSX.Element => {
  const { totalItems } = useAppSelector((state) => state.global.pagination);
  return (
    <>
      <div className="flex justify-center mt-[15px]">
        <span>Всего: {totalItems} объявлений</span>
      </div>
    </>
  );
};

export default Total;
