import { nanoid } from "@reduxjs/toolkit";
import "./ExpenseTypes.scss";
import { useState } from "react";
import { addFilter } from "./filterSortExpensesSlice";

const types = [
  { type: "No Filter", id: nanoid() },
  { type: "Clothes", id: nanoid() },
  { type: "Food", id: nanoid() },
  { type: "Health", id: nanoid() },
  { type: "Utilities", id: nanoid() },
  { type: "Health", id: nanoid() },
  { type: "Entertainment", id: nanoid() },
  { type: "Education", id: nanoid() },
  { type: "Personal", id: nanoid() },
  { type: "Bills", id: nanoid() },
  { type: "Transport", id: nanoid() },
];
function ExpenseTypes({ handleOnChange, value }) {
  return (
    <select onChange={(e) => handleOnChange(e.target.value)}>
      {types.map((item) => (
        <option key={item.id} value={item.type}>
          {item.type}
        </option>
      ))}
    </select>
  );
}

export default ExpenseTypes;
