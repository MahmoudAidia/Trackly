import { nanoid } from "@reduxjs/toolkit";

const types = [
  "Clothes",
  "Food",
  "Health",
  "Utilities",
  "Entertainment",
  "Education",
  "Personal",
  "Bills",
  "Transport",
];

export const expensesData = Array.from({ length: 100 }, (_, index) => {
  const randomType = types[Math.floor(Math.random() * types.length)];

  return {
    title: `Expense ${index + 1}`,
    price: Math.floor(Math.random() * 900) + 50, // من 50 لـ 950
    amount: Math.floor(Math.random() * 5) + 1, // من 1 لـ 5
    description: `Auto generated expense number ${index + 1}`,
    date: `2026-01-${String((index % 28) + 1).padStart(2, "0")}`,
    type: randomType,
    id: nanoid(),
  };
});
