import { Cell, Pie, PieChart, Tooltip } from "recharts";
import { RechartsDevtools } from "@recharts/devtools";
import ChartBullets from "./ChartBullets";
import "./PieChartItem.scss";

const colors = {
  Food: "#0088FE",
  Transport: "#FFBB28",
  Bills: "#ffe066",
  Shopping: "#00C49F",
  Health: "#2f9e44",
  Education: "#1864ab",
  Entertainment: "#FF8042",
  Salary: "#66d9e8",
  Freelance: "#5f3dc4",
  Other: "#862e9c",
};
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
          innerRadius={60}
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
