import { useDispatch } from "react-redux";
import "./ExpenseItem.scss";
import { deleteExpense } from "../../features/Expense/expensesSlice";

function ExpenseItem({ item }) {
  const dispatch = useDispatch();

  return (
    <li>
      <div>
        <h4>{item.title}</h4>
        <p>{item.description}</p>
      </div>
      <span>{item.type}</span>
      <span>{item.amount}</span>
      <span>{item.price}$</span>
      <span>{item.date}</span>
      <button type="button" onClick={() => dispatch(deleteExpense(item.id))}>
        Delete
      </button>
    </li>
  );
}

export default ExpenseItem;
