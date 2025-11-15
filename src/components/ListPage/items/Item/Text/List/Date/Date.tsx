import React, { type FC, type JSX } from "react";
import type { Advertisement } from "../../../../../../../types/types";

const Date: FC<{ ad: Advertisement }> = ({ ad }): JSX.Element => {
  const formatDateToDayMonth = (iso: string): string => {
    const [datePart] = iso.split("T");
    const parts = datePart.split("-");

    const month = parts[1];
    const day = parts[2];

    const months: Record<string, string> = {
      "01": "января",
      "02": "февраля",
      "03": "марта",
      "04": "апреля",
      "05": "мая",
      "06": "июня",
      "07": "июля",
      "08": "августа",
      "09": "сентября",
      "10": "октября",
      "11": "ноября",
      "12": "декабря",
    };

    const monthName = months[month];
    if (!monthName) return "";

    return `${parseInt(day)} ${monthName}`;
  };
  return (
    <>
      <li>{formatDateToDayMonth(ad.createdAt)}</li>
    </>
  );
};

export default Date;
