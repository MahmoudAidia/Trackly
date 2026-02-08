import { Pie, PieChart, Tooltip } from "recharts";
import { RechartsDevtools } from "@recharts/devtools";
import ChartBullets from "./ChartBullets";
import "./PieChartItem.scss";

const data = [
  { name: "Food", value: 400, fill: "#0088FE" },
  { name: "Rent", value: 300, fill: "#00C49F" },
  { name: "Transport", value: 300, fill: "#FFBB28" },
  { name: "Entertainment", value: 200, fill: "#FF8042" },
  { name: "Health", value: 150, fill: "#AF19FF" },
];
function PieChartItem() {
  return (
    <div className="pieChartItem">
      <CustomActiveShapePieChart className="pieChart" />
      <div className="text">
        {data.map((item, index) => (
          <ChartBullets
            key={index}
            title={item.name}
            price={item.value}
            color={item.fill}
          />
        ))}
      </div>
    </div>
  );
}

export default PieChartItem;

function CustomActiveShapePieChart({
  isAnimationActive = true,
  defaultIndex = undefined,
}) {
  return (
    <PieChart
      style={{
        width: "100%",
        maxWidth: "200px",
        maxHeight: "80vh",
        aspectRatio: 1,
      }}
      margin={{ bottom: 0 }}
      responsive
    >
      <Pie
        data={data}
        width="100%"
        cx="50%"
        cy="50%"
        innerRadius="60%"
        outerRadius="80%"
        fill="#8884d8"
        dataKey="value"
        isAnimationActive={isAnimationActive}
      />
      <Tooltip
        formatter={(value) => `$${value}`}
        cursor={{ fill: "transparent" }}
      />
      <RechartsDevtools />
    </PieChart>
  );
}
