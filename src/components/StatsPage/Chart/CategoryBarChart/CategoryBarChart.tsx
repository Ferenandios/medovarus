import { type FC } from "react";
import { Bar, BarChart, Cell, ResponsiveContainer, Tooltip } from "recharts";

interface MiniBarChartProps {
  data: number[];
  height?: number;
  barColor?: string;
}

const MiniBarChart: FC<MiniBarChartProps> = ({
  data,
  height = 60,
  barColor = "#4CAF50",
}) => {
  const formatted = data.map((value, index) => ({ value, index }));

  return (
    <div style={{ width: "100%", height }} className="outline-none">
      <ResponsiveContainer width="100%" height="100%" className="outline-none">
        <BarChart
          data={formatted}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          className="outline-none"
        >
          <Tooltip cursor={false} />

          <Bar
            dataKey="value"
            barSize={14} // ширина столбцов (узкие)
            radius={[2, 2, 2, 2]} // скругления
            className="outline-none"
          >
            {formatted.map((_, i) => (
              <Cell key={i} fill={barColor} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MiniBarChart;
