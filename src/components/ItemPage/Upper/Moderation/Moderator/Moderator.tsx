import { type FC, type JSX } from "react";
import type { ModerationHistory } from "../../../../../types/types";
import Date from "./Date/Date";
import Reason from "./Reason/Reason";
import Status from "./Status/Status";

const Moderator: FC<{ moderator: ModerationHistory }> = ({
  moderator,
}): JSX.Element => {
  return (
    <li>
      <span>&#x2022; Модератор: {moderator.moderatorName}</span>
      <Date moderator={moderator} />
      <Status moderator={moderator} />
      <Reason moderator={moderator} />
    </li>
  );
};

export default Moderator;
