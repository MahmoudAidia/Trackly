import { configureStore } from "@reduxjs/toolkit";
import expensesReducer from "../features/Expense/expensesSlice";
import filterSortReducer from "../features/Expense/filterSortExpensesSlice";

const store = configureStore({
  reducer: {
    expenses: expensesReducer,
    filterSortExpenses: filterSortReducer,
  },
});

export default store;
