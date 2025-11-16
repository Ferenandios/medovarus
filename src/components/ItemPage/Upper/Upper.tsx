import { type FC, type JSX } from "react";
import Gallery from "./Gallery/Gallery";
import Moderation from "./Moderation/Moderation";

const Upper: FC = (): JSX.Element => {
  return (
    <>
      <div className="flex justify-between px-[30px] mt-[15px]">
        <Gallery />
        <Moderation />
      </div>
    </>
  );
};

export default Upper;
