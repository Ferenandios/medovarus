import { type FC, type JSX } from "react";
import Title from "./Title/Title";
import Period from "./Period/Period";
import Items from "./Items/Items";
import Chart from "./Chart/Chart";

const StatsPage: FC = (): JSX.Element => {
  return (
    <>
      <main>
        <Title />
        <Period />
        <Items />
        <Chart />
      </main>
    </>
  );
};

export default StatsPage;
