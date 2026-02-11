import BarChartItem from "../Components/Dashboard/BarChartItem";
import Overview from "../Components/Dashboard/Overview";
import PieChartItem from "../Components/Dashboard/PieChartItem";
import RecentTransactions from "../Components/Dashboard/RecentTransactions";
import { getData } from "../api/getData";
import { useFetchData } from "../hooks/useFetchData";

import "./Dashboard.scss";

function Dashboard() {
  let { data: expenses, isLoading, isError, error } = useFetchData("expense");
  const totalBalance = expenses?.reduce((acc, item) => item.value + acc, 0);
  let totalIncome = 0,
    totalExpenses = 0;
  expenses?.filter((item) => {
    if (item.type === "income") totalIncome += item.value;
    else if (item.type === "expense") totalExpenses += item.value;
  });

  if (isLoading) return <p>Loading</p>;

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
