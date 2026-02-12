import { useState } from "react";
import { useAppContext } from "../../Context/AppContext";
import { useFetchDataByDate } from "../../hooks/useFetchDataByDate";
import { MovingOutlined } from "@mui/icons-material";
import { formatCurrency } from "../../helpers/formatCurrency";
import ExpenseItem from "../../Components/ExpenseItem/ExpenseItem";
import Search from "../../Components/Search/Search";
import Filter from "../../Components/Filter/Filter";
import TrendingDownOutlinedIcon from "@mui/icons-material/TrendingDownOutlined";
import "./Transaction.scss";
import ExpenseBlock from "../../Components/AddExpense/ExpenseBlock";

function Transaction() {
  const { userId } = useAppContext();
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState({
    active: "all",
    category: "All",
  });

  let { data: expenses, isLoading } = useFetchDataByDate({
    collectionName: "expense",
    userId,
  });

  console.log(expenses);
  if (activeFilter.active !== "all") {
    expenses = expenses?.filter(
      (item) => item.expenses.type === activeFilter.active,
    );
  }
  if (activeFilter.category !== "All") {
    expenses = expenses?.filter(
      (item) => item.expenses.category === activeFilter.category,
    );
  }
  if (query) {
    expenses = expenses?.filter((item) => {
      if (
        item.expenses.category.toLowerCase().includes(query.toLowerCase()) ||
        item.expenses.date.toLowerCase().includes(query.toLowerCase()) ||
        item.expenses.desc.toLowerCase().includes(query.toLowerCase()) ||
        item.expenses.payment.toLowerCase().includes(query.toLowerCase()) ||
        item.expenses.value === query
      )
        return item;
    });
  }
  // Derived State
  let totalExpensesValue = 0;
  let totalIncomeValue = 0;
  // expenses?.filter((item) => {
  //   if (item.expenses.type === "expense")
  //     totalExpensesValue += item.expenses.reduce((acc, item) => item + acc, 0);
  //   else totalIncomeValue += item.expenses.reduce((acc, item) => item + acc, 0);
  // });

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
            <ExpenseBlock dateTitle={item.date} expenses={item.expenses} />
          ))
        )}
      </ul>
    </div>
  );
}

export default Transaction;
