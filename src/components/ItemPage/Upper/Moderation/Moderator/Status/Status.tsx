import { type FC, type JSX } from "react";
import type { ModerationHistory } from "../../../../../../types/types";

const Status: FC<{ moderator: ModerationHistory }> = ({
  moderator,
}): JSX.Element => {
  const text: string =
    moderator.action === "approved"
      ? "✔ Одобрено"
      : moderator.action === "rejected"
      ? "✖ Отклонено"
      : "↩ Доработка";
  return (
    <>
      <span className="block">{text}</span>
    </>
  );
};

export default Status;
