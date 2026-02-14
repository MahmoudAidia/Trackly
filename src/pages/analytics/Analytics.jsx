import "./Analytics.scss";
import { CalendarMonth, MovingOutlined } from "@mui/icons-material";
import TrendingDownOutlinedIcon from "@mui/icons-material/TrendingDownOutlined";
import Card from "./Card";
import { useAppContext } from "../../Context/AppContext";
import { useFetchData } from "../../hooks/useFetchData";
import Loader from "../../UI/Loader";
import LineChartItem from "../../Components/Analytics/LineChartItem";
import { createLineChartData } from "../../helpers/createLineChartData";
import SpendingChart from "../../Components/Analytics/SpendingChart";
import ChartBullets from "../../Components/Dashboard/ChartBullets";
import { categoriesIcons, colors } from "../../helpers/constants";
import { formatCurrency } from "../../helpers/formatCurrency";
import TwoBarChart from "../../Components/Analytics/TwoBarChart";

function Analytics() {
  const { userId } = useAppContext();
  const { data: expenses, isLoading: isLoadingExpenses } = useFetchData({
    collectionName: "expense",
    userId,
  });
  if (isLoadingExpenses)
    return (
      <div className="loaderBox">
        <Loader />
      </div>
    );
  let totalIncome = 0;
  let totalExpenses = 0;
  expenses?.forEach((item) => {
    if (item.type === "income") totalIncome += item.value;
    if (item.type === "expense") totalExpenses += item.value;
  });

  const lineChartData = createLineChartData(expenses);

  const expensePerCategory = {};
  let topSpending = { category: "", value: 0 };
  expenses
    ?.filter((item) => item.type === "expense")
    .forEach((item) => {
      if (expensePerCategory[item.category]) {
        expensePerCategory[item.category] += item.value;
      } else {
        expensePerCategory[item.category] = item.value;
      }
    });
  for (const item in expensePerCategory) {
    if (expensePerCategory[item] > topSpending.value) {
      topSpending.value = expensePerCategory[item];
      topSpending.category = item;
    }
  }

  let bullets = [];
  for (const item in expensePerCategory) {
    let temp = (
      <ChartBullets
        title={item}
        price={expensePerCategory[item]}
        color={colors[item]}
      />
    );
    bullets.push(temp);
  }

  return (
    <div className="analytics">
      <div className="header">
        <h4>Analytics</h4>
        <div>
          <button>Monthly</button>
          <button>Yearly</button>
        </div>
      </div>
      <div className="body">
        <div className="cardContainer">
          <Card
            value={totalIncome}
            title={"Income"}
            icon={<MovingOutlined />}
            bgc={"#22c55e"}
          />
          <Card
            value={totalExpenses}
            title={"Expenses"}
            icon={<TrendingDownOutlinedIcon />}
            bgc={"#ef4444"}
          />
          <Card
            value={totalIncome - totalExpenses}
            title={"Savings"}
            icon={"💰"}
            bgc={"#DBEAFE"}
          />
        </div>
        <LineChartItem data={lineChartData} />
        <div className="spendings">
          <div className="chartAndBullet">
            <SpendingChart data={expensePerCategory} />
            <div className="bulletBox">{bullets.map((item) => item)}</div>
          </div>
          <div className="topSpending">
            <h6>
              <CalendarMonth /> This Month
            </h6>
            <h4>Top Spending Category</h4>
            <div className="box">
              <span>{categoriesIcons[topSpending.category]}</span>
              <div>
                <h3>{topSpending.category}</h3>
                <h6>{formatCurrency(topSpending.value)} spent</h6>
              </div>
            </div>
          </div>
        </div>

        <TwoBarChart data={lineChartData} />
      </div>
    </div>
  );
}

export default Analytics;
