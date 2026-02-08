import BarChartItem from "../Components/Dashboard/BarChartItem";
import Overview from "../Components/Dashboard/Overview";
import PieChartItem from "../Components/Dashboard/PieChartItem";
import RecentTransactions from "../Components/Dashboard/RecentTransactions";
import { getData } from "../hooks/getData";
import "./Dashboard.scss";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="overviewBox">
        <Overview />
      </div>
      <div className="chartBox">
        <PieChartItem />
      </div>
      <div className="barBox">
        <BarChartItem />
      </div>
      <div className="recentTransBox">
        <RecentTransactions />
      </div>
    </div>
  );
}

export default Dashboard;
