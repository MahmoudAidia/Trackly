import RecentItem from "./RecentItem";
import "./RecentTransactions.scss";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
const expenses = [
  {
    id: 1,
    name: "Groceries",
    date: "6 Feb",
    price: 85,
    payment: "Credit Card",
    icon: <LunchDiningIcon />,
  },
  {
    id: 2,
    name: "Pharmacy",
    date: "7 Feb",
    price: 40,
    payment: "Cash",
    icon: <LunchDiningIcon />,
  },
  {
    id: 3,
    name: "Gasoline",
    date: "8 Feb",
    price: 120,
    payment: "Credit Card",

    icon: <LunchDiningIcon />,
  },
  {
    id: 4,
    name: "Subscriptions",
    date: "9 Feb",
    price: 15,
    payment: "Debit Card",
    icon: <LunchDiningIcon />,
  },
  {
    id: 5,
    name: "Dining Out",
    date: "10 Feb",
    price: 65,
    payment: "Cash",
    icon: <LunchDiningIcon />,
  },
];
function RecentTransactions() {
  return (
    <div className="recentTrans">
      <h2>Recent Transactions</h2>
      <ul>
        {expenses.map((item) => (
          <RecentItem
            key={item.id}
            name={item.name}
            price={item.price}
            payment={item.payment}
            date={item.date}
          >
            {item.icon}
          </RecentItem>
        ))}
      </ul>
    </div>
  );
}

export default RecentTransactions;
