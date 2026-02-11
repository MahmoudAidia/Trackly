import RecentItem from "./RecentItem";
import "./RecentTransactions.scss";
import LunchDiningIcon from "@mui/icons-material/LunchDining";

function RecentTransactions({ expenses }) {
  return (
    <div className="recentTrans">
      <h2>Recent Transactions</h2>
      <ul>
        {expenses.map((item) => (
          <RecentItem
            key={item.id}
            date={item.date}
            category={item.category}
            desc={item.desc}
            payment={item.payment}
            value={item.value}
            icon={item.icon}
          >
            {item.icon}
          </RecentItem>
        ))}
      </ul>
    </div>
  );
}

export default RecentTransactions;
