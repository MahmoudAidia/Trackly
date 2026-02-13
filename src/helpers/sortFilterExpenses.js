// data shape
/*
[
  {
    "date": "February 6, 2026",
    "expenses": [
      { "id": "doc1", "category": "Food", "amount": 50, "dateObj": "2026-02-06T00:00:00", "dateString": "February 6, 2026" },
      { "id": "doc2", "category": "Transport", "amount": 20, "dateObj": "2026-02-06T00:00:00", "dateString": "February 6, 2026" }
    ]
  },
  {
    "date": "February 7, 2026",
    "expenses": [
      { "id": "doc3", "category": "Shopping", "amount": 100, "dateObj": "2026-02-07T00:00:00", "dateString": "February 7, 2026" }
    ]
  }
]
*/

export function createArrayofExpenses(data) {
  let expenses = [];
  data?.forEach((item) => {
    expenses.push(...item.expenses);
  });

  // Derived State
  let totalExpensesValue = 0;
  let totalIncomeValue = 0;
  expenses?.filter((item) => {
    if (item.type === "expense") totalExpensesValue += item.value;
    else totalIncomeValue += item.value;
  });
  return { expenses, totalExpensesValue, totalIncomeValue };
}

export function sortFilterExpenses(data, activeFilter, query) {
  let { expenses, totalExpensesValue, totalIncomeValue } =
    createArrayofExpenses(data);

  if (activeFilter.active !== "all") {
    expenses = expenses?.filter((item) => item.type === activeFilter.active);
  }
  if (activeFilter.category !== "All") {
    expenses = expenses?.filter(
      (item) => item.category === activeFilter.category,
    );
  }
  if (query) {
    expenses = expenses?.filter((item) => {
      if (
        item.category.toLowerCase().includes(query.toLowerCase()) ||
        // item.value === Number(query)
        `${item.value}`.includes(query.toLowerCase())
      )
        return item;
    });
  }
  return { expenses, totalExpensesValue, totalIncomeValue };
}
