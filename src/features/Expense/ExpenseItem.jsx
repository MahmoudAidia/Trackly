import { useDispatch } from "react-redux";
import { deleteExpense } from "../../features/Expense/expensesSlice";
import "./ExpenseItem.scss";
import DeleteIcon from "@mui/icons-material/Delete";

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
        <DeleteIcon />
        <span>Delete</span>
      </button>
    </li>
  );
}

export default ExpenseItem;
