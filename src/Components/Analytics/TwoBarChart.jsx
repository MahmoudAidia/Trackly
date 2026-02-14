import {
  BarChart,
  Legend,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Bar,
} from "recharts";
import { RechartsDevtools } from "@recharts/devtools";
import "./TwoBarChart.scss";
import { colors } from "../../helpers/constants";
import { formatCurrency } from "../../helpers/formatCurrency";

function TwoBarChart({ data }) {
  return (
    <div className="twoBarChart">
      <BarChartBox data={data} />
    </div>
  );
}

export default TwoBarChart;

const data = [
  {
    name: "page",
    uv: 4000,
    pv: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
  },
];

const BarChartBox = ({ isAnimationActive = true, data }) => (
  <BarChart
    style={{
      width: "100%",
      height: "100%",
      minWidth: "250px",
      aspectRatio: 1.618,
    }}
    responsive
    data={data}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="month" />
    <YAxis width="auto" />
    <Legend verticalAlign="top" align="center" layout="horizontal" />
    <Tooltip
      contentStyle={{
        background: "linear-gradient(to bottom right, #5238f6, #9515fa)",
        borderRadius: 10,
        border: "none",
      }}
      itemStyle={{ color: "#fff", fontWeight: "bold" }}
      labelStyle={{ color: "#ddd" }}
      formatter={(value, name) => {
        return [formatCurrency(value), name];
      }}
      verticalAlign="top"
      align="center"
    />
    <Bar
      dataKey="Expenses"
      fill="#EF4444"
      isAnimationActive={isAnimationActive}
    />
    <Bar
      dataKey="Income"
      fill="#22C55E"
      isAnimationActive={isAnimationActive}
    />
    <RechartsDevtools />
  </BarChart>
);

export { BarChartBox };
