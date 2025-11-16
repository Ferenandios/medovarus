import { type FC, type JSX } from "react";
import { useAppSelector } from "../../../hooks";
import Item from "./Item/Item";

const Items: FC = (): JSX.Element => {
  const { totalReviewed, approvalRate, averageReviewTime } = useAppSelector(
    (state) => state.global.stats.statistics
  );
  const formatReviewTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;

    if (minutes > 0 && secs > 0) {
      return `${minutes} мин ${secs} сек`;
    }

    if (minutes > 0) {
      return `${minutes} мин`;
    }

    return `${secs} сек`;
  };
  const items: { title: string; value: string | number }[] = [
    { title: "Проверено", value: totalReviewed },
    { title: "Одобрено", value: `${Math.round(approvalRate)}%` },
    { title: "Отклонено", value: `${100 - Math.round(approvalRate)}%` },
    { title: "Ср. время", value: formatReviewTime(averageReviewTime) },
  ];

  return (
    <>
      <div className="flex justify-between flex-wrap px-[30px]">
        {items.map(({ title, value }) => (
          <Item title={title} value={value} />
        ))}
      </div>
    </>
  );
};

export default Items;
