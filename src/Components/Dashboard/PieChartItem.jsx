import { Cell, Pie, PieChart, Tooltip } from "recharts";
import { RechartsDevtools } from "@recharts/devtools";
import ChartBullets from "./ChartBullets";
import "./PieChartItem.scss";
import { colors } from "../../helpers/constants";

function PieChartItem({ expenses }) {
  const chartData = Object.values(
    expenses.reduce((acc, item) => {
      acc[item.category] ??= { name: item.category, value: 0 };
      acc[item.category].value += item.value;
      return acc;
    }, {}),
  );

  return (
    <div className="pieChartItem">
      <PieChart width={200} height={200}>
        <Pie
          data={chartData}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={50}
          outerRadius={80}
        >
          {chartData.map((entry, index) => (
            <Cell key={index} fill={colors[entry.name] ?? "#ccc"} />
          ))}
        </Pie>
        <Tooltip formatter={(v) => `$${v}`} />
      </PieChart>

      <div className="text">
        {chartData.map((item, index) => (
          <ChartBullets
            key={index}
            title={item.name}
            price={item.value}
            color={colors[item.name]}
          />
        ))}
      </div>
    </div>
  );
}

export default PieChartItem;
