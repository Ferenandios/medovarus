import { type FC, type JSX } from "react";
import CategoryBarChart from "./CategoryBarChart/CategoryBarChart";
import MiniPieChart from "./MiniPieChart/MiniPieChart";
import { useAppSelector } from "../../../hooks";

const Chart: FC = (): JSX.Element => {
  const { approvalRate } = useAppSelector(
    (state) => state.global.stats.statistics
  );
  const chartData = [10, 20, 18, 25, 15, 22, 12];
  const stats = [
    { name: "Одобрено", value: Math.round(approvalRate) },
    { name: "Отклонено", value: 100 - Math.round(approvalRate) },
  ];

  //   const items: { title: string; value: string | number }[] = [
  //     { title: "Проверено", value: totalReviewed },
  //     { title: "Одобрено", value: `${Math.round(approvalRate)}%` },
  //     { title: "Отклонено", value: `${100 - Math.round(approvalRate)}%` },
  //     { title: "Ср. время", value: formatReviewTime(averageReviewTime) },
  //   ]
  return (
    <>
      <div className="px-[30px] mt-[15px]">
        <div className="w-full h-[80px] border rounded-2xl overflow-hidden">
          <CategoryBarChart data={chartData} height={80} />
        </div>
        <div className="w-full h-[160px] border rounded-2xl overflow-hidden mt-[15px]">
          <MiniPieChart height={160} data={stats} />
        </div>
      </div>
    </>
  );
};

export default Chart;
