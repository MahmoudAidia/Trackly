import "./Transaction.scss";
import { useFetchData } from "../../hooks/useFetchData";
import { MovingOutlined } from "@mui/icons-material";
import { useState } from "react";
import ExpenseItem from "../../Components/ExpenseItem/ExpenseItem";
import Search from "../../Components/Search/Search";
import Filter from "../../Components/Filter/Filter";
import TrendingDownOutlinedIcon from "@mui/icons-material/TrendingDownOutlined";
import { formatCurrency } from "../../helpers/formatCurrency";
import { useAppContext } from "../../Context/AppContext";

function Transaction() {
  const { userId } = useAppContext();
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState({
    active: "all",
    category: "All",
  });

  let { data: expenses, isLoading } = useFetchData({
    collectionName: "expense",
    userId,
  });

  if (activeFilter.active !== "all") {
    expenses = expenses?.filter((item) => item.type === activeFilter.active);
  }
  if (activeFilter.category !== "All") {
    expenses = expenses?.filter(
      (item) => item.category === activeFilter.category,
    );
  }
  if (query) {
    expenses = expenses?.filter((item) => {
      if (
        item.category.toLowerCase().includes(query.toLowerCase()) ||
        item.date.toLowerCase().includes(query.toLowerCase()) ||
        item.desc.toLowerCase().includes(query.toLowerCase()) ||
        item.payment.toLowerCase().includes(query.toLowerCase()) ||
        item.value === query
      )
        return item;
    });
  }

  // Derived State
  let totalExpensesValue = 0;
  let totalIncomeValue = 0;
  expenses?.filter((item) => {
    if (item.type === "expense") totalExpensesValue += item.value;
    else totalIncomeValue += item.value;
  });

  return (
    <div className="transaction">
      <div className="searchBox">
        <Search handleOnChange={setQuery} />
        <Filter activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

        <div className="incomeExpensesBox">
          <div className="incomeBox">
            <div>
              <MovingOutlined />
              <span>Income</span>
            </div>
            <span className="incomeMoney">
              {formatCurrency(totalIncomeValue)}
            </span>
          </div>
          <div className="expenseBox">
            <div>
              <TrendingDownOutlinedIcon />
              <span>Expenses</span>
            </div>
            <span className="expenseMoney">
              {formatCurrency(totalExpensesValue)}
            </span>
          </div>
        </div>
      </div>

      <ul className="transactionList">
        {isLoading ? (
          <p>Loading....</p>
        ) : (
          expenses?.map((item) => (
            <ExpenseItem
              key={item.id}
              date={item.date}
              category={item.category}
              desc={item.desc}
              payment={item.payment}
              value={item.value}
              icon={item.icon}
            />
          ))
        )}
      </ul>
    </div>
  );
}

export default Transaction;
