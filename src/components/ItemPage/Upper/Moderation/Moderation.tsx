import { type FC, type JSX } from "react";
import { useAppSelector } from "../../../../hooks";
import Moderator from "./Moderator/Moderator";
import Title from "./Title/Title";

const Moderation: FC = (): JSX.Element => {
  const { moderationHistory } = useAppSelector(
    (state) => state.global.currentItem
  );
  return (
    <div className="bg-[#FFF4D6] w-[50%] h-[128px] border rounded-2xl overflow-scroll p-[3px]">
      <Title />
      <ul>
        {moderationHistory.map((moderator) => (
          <Moderator key={moderator.id} moderator={moderator} />
        ))}
      </ul>
    </div>
  );
};

export default Moderation;
