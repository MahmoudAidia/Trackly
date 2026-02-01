import AddExpense from "../features/Expense/AddExpense";
import ExpensesList from "../features/Expense/ExpensesList";
import FilterSortExpenses from "../features/Expense/FilterSortExpenses";
function Expenses() {
  return (
    <div>
      <AddExpense />
      <ExpensesList />
    </div>
  );
}

export default Expenses;
