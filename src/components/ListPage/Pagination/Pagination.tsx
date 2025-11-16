import { type FC, type JSX } from "react";
import Total from "./Total/Total";
import Pages from "./Pages/Pages";

const Pagination: FC = (): JSX.Element => {
  return (
    <>
      <div className="my-[30px]">
        <Pages />
        <Total />
      </div>
    </>
  );
};

export default Pagination;
