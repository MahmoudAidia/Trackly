import { useSelector } from "react-redux";
import { selectAllExpenses } from "./expensesSlice";
import { selectFilterType, selectSortType } from "./filterSortExpensesSlice";
import FilterSortExpenses from "./FilterSortExpenses";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.scss";
import ListHeader from "./ListHeader";

function ExpensesList() {
  const expenses = useSelector(selectAllExpenses);
  const sort = useSelector(selectSortType);
  const type = useSelector(selectFilterType);

  let expensesCopy = [...expenses];
  if (type !== "")
    expensesCopy = expensesCopy.filter((item) => item.type === type);

  if (expensesCopy.length !== 0) {
    if (sort === "price") expensesCopy.sort((a, b) => b.price - a.price);
    else if (sort === "amount")
      expensesCopy.sort((a, b) => b.amount - a.amount);
    else if (sort === "date") expensesCopy.sort((a, b) => b.date - a.date);
  }

  return (
    <div className="list">
      <h2>Expenses List</h2>
      <FilterSortExpenses />
      <ListHeader />
      {expensesCopy.length === 0 ? (
        <p className="filterMessage">
          There is no items that match this filter type
        </p>
      ) : (
        <ul>
          {expensesCopy.map((item) => (
            <ExpenseItem key={item.id} item={item} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ExpensesList;
