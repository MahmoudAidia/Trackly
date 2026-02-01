import { useState } from "react";
import "./AddExpense.scss";
import { useDispatch } from "react-redux";
import { addExpense } from "./expensesSlice";
import ExpenseInput from "./ExpenseInput";
import { nanoid } from "@reduxjs/toolkit";
import ExpenseTypes from "./ExpenseTypes";

const types = [
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

function AddExpense() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(1);
  const [amount, setAmount] = useState(1);
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("");

  function handleAddExpense() {
    const expense = {
      title,
      price,
      amount,
      description,
      date,
      type,
      id: nanoid(),
    };
    dispatch(addExpense(expense));
    setTitle("");
    setDescription("");
    setAmount(0);
    setDate("");
    setPrice(0);
    setType("Electricity");
  }
  return (
    <form className="addExpense">
      <h3>Add a new Expense</h3>
      <div className="grid">
        <ExpenseInput
          fieldName="Title"
          fieldType="text"
          handleOnChange={setTitle}
          value={title}
        />
        <ExpenseInput
          fieldName="Amount"
          fieldType="number"
          handleOnChange={setAmount}
          value={amount}
        />
        <ExpenseInput
          fieldName="Description"
          fieldType="text"
          handleOnChange={setDescription}
          value={description}
        />
        <ExpenseInput
          fieldName="Price"
          fieldType="number"
          handleOnChange={setPrice}
          value={price}
        />
        <ExpenseInput
          fieldName="Date"
          fieldType="date"
          handleOnChange={setDate}
          value={date}
        />
        <ExpenseTypes handleOnChange={setType} value={type} />
      </div>
      <button type="button" onClick={handleAddExpense}>
        Add Expense
      </button>
    </form>
  );
}

export default AddExpense;
