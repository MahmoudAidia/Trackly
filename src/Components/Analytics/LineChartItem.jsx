import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
} from "recharts";
import { RechartsDevtools } from "@recharts/devtools";
import "./LineChartItem.scss";
function LineChartItem({ data }) {
  return (
    <div className="lineChartItem">
      <LineCharts data={data} />
    </div>
  );
}

export default LineChartItem;

const LineCharts = ({ isAnimationActive = true, data }) => {
  return (
    <LineChart
      style={{
        width: "100%",
        maxHeight: "70vh",
        aspectRatio: 1.618,
      }}
      responsive
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis width="auto" />
      <Tooltip />
      <Legend verticalAlign="top" align="center" />
      <Line
        strokeWidth={4}
        type="monotone"
        dataKey="Expenses"
        stroke="#EF4444"
        isAnimationActive={isAnimationActive}
      />
      <Line
        strokeWidth={4}
        type="monotone"
        dataKey="Income"
        stroke="#22C55E"
        isAnimationActive={isAnimationActive}
      />
      <RechartsDevtools />
    </LineChart>
  );
};
export { LineCharts };
