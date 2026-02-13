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
import {
  createArrayofExpenses,
  sortFilterExpenses,
} from "../../helpers/sortFilterExpenses";
import Loader from "../../UI/Loader";

function Transaction() {
  const { userId } = useAppContext();
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState({
    active: "all",
    category: "All",
  });

  let result;
  let totalIncome, totalExpense;

  let { data: expenses, isLoading } = useFetchDataByDate({
    collectionName: "expense",
    userId,
  });

  if (
    query !== "" ||
    activeFilter.active !== "all" ||
    activeFilter.category !== "All"
  ) {
    const {
      expenses: filteredExpenses,
      totalExpensesValue,
      totalIncomeValue,
    } = sortFilterExpenses(expenses, activeFilter, query);
    result = filteredExpenses.map((item) => (
      <ExpenseItem
        key={item.id}
        date={item.date}
        category={item.category}
        desc={item.desc}
        payment={item.payment}
        value={item.value}
        icon={item.icon}
      />
    ));

    totalExpense = totalExpensesValue;
    totalIncome = totalIncomeValue;
  } else {
    result = expenses?.map((item) => (
      <ExpenseBlock dateTitle={item.date} expenses={item.expenses} />
    ));
    let { totalExpensesValue, totalIncomeValue } =
      createArrayofExpenses(expenses);
    totalExpense = totalExpensesValue;
    totalIncome = totalIncomeValue;
  }

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
            <span className="incomeMoney">{formatCurrency(totalIncome)}</span>
          </div>
          <div className="expenseBox">
            <div>
              <TrendingDownOutlinedIcon />
              <span>Expenses</span>
            </div>
            <span className="expenseMoney">{formatCurrency(totalExpense)}</span>
          </div>
        </div>
      </div>

      <ul className="transactionList">
        {isLoading ? (
          <div className="loaderBox">
            <Loader />
          </div>
        ) : (
          result
        )}
      </ul>
    </div>
  );
}

export default Transaction;
