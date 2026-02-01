import { createSlice } from "@reduxjs/toolkit";
import { expensesData } from "../../data/ExpensesDate";

const initialState = expensesData;

const expensesSlice = createSlice({
  initialState,
  name: "expenses",
  reducers: {
    addExpense(state, action) {
      state.push(action.payload);
    },
    deleteExpense(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    reset() {
      return [];
    },
  },
});

export const selectAllExpenses = (state) => state.expenses;
export const { addExpense, deleteExpense } = expensesSlice.actions;
export default expensesSlice.reducer;
