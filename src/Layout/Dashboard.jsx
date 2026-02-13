import BarChartItem from "../Components/Dashboard/BarChartItem";
import Overview from "../Components/Dashboard/Overview";
import PieChartItem from "../Components/Dashboard/PieChartItem";
import RecentTransactions from "../Components/Dashboard/RecentTransactions";
import { useAppContext } from "../Context/AppContext";
import Loader from "../UI/Loader";
import { getData } from "../api/getData";
import { useFetchData } from "../hooks/useFetchData";

import "./Dashboard.scss";

function Dashboard() {
  const { userId } = useAppContext();
  let { data: expenses, isLoading } = useFetchData({
    collectionName: "expense",
    userId,
  });
  if (isLoading)
    return (
      <div className="loaderBox">
        <Loader />
      </div>
    );

  let totalIncome = 0,
    totalExpenses = 0;
  expenses?.filter((item) => {
    if (item.type === "income") totalIncome += item.value;
    else if (item.type === "expense") totalExpenses += item.value;
  });
  const totalBalance = totalIncome - totalExpenses;

  return (
    <div className="dashboard">
      <div className="overviewBox">
        <Overview
          totalBalance={totalBalance}
          totalExpenses={totalExpenses}
          totalIncome={totalIncome}
        />
      </div>
      <div className="chartBox">
        <PieChartItem expenses={expenses} />
      </div>
      <div className="barBox">
        <BarChartItem expenses={expenses} />
      </div>
      <div className="recentTransBox">
        <RecentTransactions expenses={expenses} />
      </div>
    </div>
  );
}

export default Dashboard;
