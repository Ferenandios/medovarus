import { type FC, type JSX } from "react";
import type { ModerationHistory } from "../../../../../../types/types";

const Date: FC<{ moderator: ModerationHistory }> = ({
  moderator,
}): JSX.Element => {
  const formatDate = (iso: string): string => {
    // iso = "2025-11-15T09:25:27.643Z"
    const [datePart, timePart] = iso.split("T");

    const [year, month, day] = datePart.split("-");
    const [hours, minutes] = timePart.split(":");

    return `${day}.${month}.${year} ${
      minutes ? `${hours}:${minutes}` : ""
    }`.trim();
  };
  return (
    <>
      <span className="block">{formatDate(moderator.timestamp)}</span>
    </>
  );
};

export default Date;
