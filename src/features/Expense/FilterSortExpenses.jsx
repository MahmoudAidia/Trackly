import { useDispatch } from "react-redux";
import { addSort } from "./filterSortExpensesSlice";
import "./FilterSortExpenses.scss";
import ExpenseTypes from "./ExpenseTypes";
function FilterSortExpenses() {
  const dispatch = useDispatch();
  return (
    <div className="filterContainer">
      <div className="sort">
        <h4>Sort by</h4>
        <div>
          <button onClick={() => dispatch(addSort("price"))}>Price</button>
          <button onClick={() => dispatch(addSort("amount"))}>Amount</button>
          <button onClick={() => dispatch(addSort("date"))}>Date</button>
        </div>
      </div>
      <div className="filter">
        <h4>Filter by type:</h4>
        <ExpenseTypes handleOnChange={dispatch} />
      </div>
    </div>
  );
}
export default FilterSortExpenses;
