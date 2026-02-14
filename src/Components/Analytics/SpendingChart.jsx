import "./SpendingChart.scss";
import { PieChart, Pie, ResponsiveContainer, Cell, Tooltip } from "recharts";
import { RechartsDevtools } from "@recharts/devtools";
import { colors } from "../../helpers/constants";
import { formatCurrency } from "../../helpers/formatCurrency";

function SpendingChart({ data }) {
  const pieData = [];

  for (const item in data) {
    let obj = { value: 0, name: "" };
    obj["name"] = item;
    obj["value"] = data[item];
    pieData.push(obj);
  }

  return (
    <div className="spendingChart">
      <h3>Spendings by Category</h3>
      <PieChartBox data={pieData} />
    </div>
  );
}

export default SpendingChart;

const data = [
  { name: "Food", value: 400 },
  { name: "Transport", value: 300 },
  { name: "Bills", value: 300 },
  { name: "Shopping", value: 200 },
];

export const PieChartBox = ({ isAnimationActive = true, data }) => {
  return (
    <div style={{ width: "100%", height: "100%", minWidth: "250px" }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            labelLine={false}
            isAnimationActive={isAnimationActive}
          >
            {data.map((item, index) => (
              <Cell key={`cell-${index}`} fill={colors[item.name]} />
            ))}
          </Pie>
          <RechartsDevtools />
          <Tooltip
            contentStyle={{
              background: "linear-gradient(to bottom right, #5238f6, #9515fa)",
              borderRadius: 10,
              border: "none",
            }}
            itemStyle={{ color: "#fff", fontWeight: "bold" }}
            labelStyle={{ color: "#aaa" }}
            formatter={(value, name) => {
              return [formatCurrency(value), name];
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
