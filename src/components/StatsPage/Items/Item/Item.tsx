import React, { type FC, type JSX } from "react";

const Item: FC<{ title: string; value: string | number }> = ({
  title,
  value,
}): JSX.Element => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-[48%] h-[60px] border rounded-2xl mt-[15px]">
        <h4>{title}</h4>
        <p className="text-[14px] font-bold">{value}</p>
      </div>
    </>
  );
};

export default Item;
