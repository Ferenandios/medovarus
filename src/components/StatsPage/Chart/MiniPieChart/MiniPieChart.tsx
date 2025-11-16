import { FC } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

interface PieProps {
  data: { name: string; value: number }[];
  colors?: string[];
  height?: number;
}

const MiniPieChart: FC<PieProps> = ({
  data,
  colors = ["#4CAF50", "#81C784", "#A5D6A7", "#C8E6C9"],
  height = 200,
}) => {
  return (
    <div style={{ width: "100%", height }}>
      <ResponsiveContainer>
        <PieChart>
          <Tooltip />

          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={70}
            innerRadius={40}
            paddingAngle={1}
            stroke="none" // ← убирает границы
          >
            {data.map((_, i) => (
              <Cell
                key={i}
                fill={colors[i % colors.length]}
                stroke="none" // ← дополнительно убирает обводку ячеек
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MiniPieChart;
