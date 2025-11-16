import { type FC, type JSX } from "react";
import type { ModerationHistory } from "../../../../../../types/types";

const Reason: FC<{ moderator: ModerationHistory }> = ({
  moderator,
}): JSX.Element => {
  return (
    <>
      <span className="block">
        {moderator.reason}. {moderator.comment}
      </span>
    </>
  );
};

export default Reason;
