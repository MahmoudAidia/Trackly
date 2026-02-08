import { nanoid } from "@reduxjs/toolkit";
import "./BarChartItem.scss";
import { BarChart, Bar, XAxis, ResponsiveContainer, Tooltip } from "recharts";

function BarChartItem() {
  return (
    <div className="barChartItem">
      <TinyBarChart />
    </div>
  );
}

export default BarChartItem;

const data = [
  { day: "Mon", amount: 400 },
  { day: "Tue", amount: 300 },
  { day: "Wed", amount: 500 },
  { day: "Thu", amount: 200 },
  { day: "Fri", amount: 700 },
  { day: "Sat", amount: 100 },
  { day: "Sun", amount: 1000 },
];

const TinyBarChart = () => {
  return (
    <BarChart data={data} width="100%" height="100%">
      <XAxis
        dataKey="day"
        tick={{ fill: "#6b7280", fontSize: 12 }}
        tickLine={false}
        axisLine={false}
      />
      <Tooltip
        formatter={(value) => `$${value}`}
        cursor={{ fill: "transparent" }}
      />
      <Bar
        name="Total Spend: "
        dataKey="amount"
        fill="#4f46e5"
        radius={[4, 4, 0, 0]}
      />
    </BarChart>
  );
};
