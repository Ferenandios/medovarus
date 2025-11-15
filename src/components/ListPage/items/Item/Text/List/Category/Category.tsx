import React, { type FC, type JSX } from "react";
import type { Advertisement } from "../../../../../../../types/types";

const Category: FC<{ ad: Advertisement }> = ({ ad }): JSX.Element => {
  return (
    <>
      <li>{ad.category}</li>
    </>
  );
};

export default Category;
