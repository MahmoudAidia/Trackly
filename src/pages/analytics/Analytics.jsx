import "./Analytics.scss";
import { MovingOutlined } from "@mui/icons-material";
import TrendingDownOutlinedIcon from "@mui/icons-material/TrendingDownOutlined";
import Card from "./Card";
import { useAppContext } from "../../Context/AppContext";
import { useFetchData } from "../../hooks/useFetchData";
import Loader from "../../UI/Loader";
import LineChartItem from "../../Components/Analytics/LineChartItem";
import { createLineChartData } from "../../helpers/createLineChartData";

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
          {/* <Card /> */}
        </div>
      </div>
      <LineChartItem data={lineChartData} />
    </div>
  );
}

export default Analytics;
