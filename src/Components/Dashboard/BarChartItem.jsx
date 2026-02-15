import { formatCurrency } from "../../helpers/formatCurrency";
import "./BarChartItem.scss";
import { BarChart, Bar, XAxis, ResponsiveContainer, Tooltip } from "recharts";

const BAR_COLOR = "#4f46e5";

const buildBarChartData = (expenses) => {
  const result = {};

  expenses?.forEach((item) => {
    const day = new Date(item.date).toLocaleDateString("en-US", {
      weekday: "short",
    });

    if (!result[day]) {
      result[day] = {
        day,
        amount: 0,
      };
    }

    result[day].amount += item.value;
  });

  return Object.values(result);
};

function BarChartItem({ expenses }) {
  const data = buildBarChartData(expenses);

  return (
    <div className="barChartItem">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis
            dataKey="day"
            tick={{ fill: "#6b7280", fontSize: 12 }}
            tickLine={false}
            axisLine={false}
          />

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

          <Bar dataKey="amount" fill={BAR_COLOR} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarChartItem;
