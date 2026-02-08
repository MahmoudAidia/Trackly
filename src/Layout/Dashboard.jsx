import Overview from "../Components/Dashboard/Overview";
import { auth } from "../Firebase/firebase";
import "./Dashboard.scss";

function Dashboard() {
  console.log(auth?.currentUser);
  return (
    <div className="dashboard">
      <div className="overviewBox">
        <Overview />
      </div>
      <div className="chartBox"></div>
      <div className="barBox"></div>
      <div className="recentTransBox"></div>
    </div>
  );
}

export default Dashboard;
