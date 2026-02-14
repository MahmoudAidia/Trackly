import { format } from "date-fns";
const monthOrder = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function createLineChartData(expenses) {
  const months = {};
  expenses?.forEach((item) => {
    const date =
      typeof item.date?.toDate === "function"
        ? item.date.toDate()
        : new Date(item.date);

    const month = format(date, "MMMM");

    if (!months[month]) {
      months[month] = { month, Expenses: 0, Income: 0 };
    }

    if (item.type === "expense") {
      months[month].Expenses += item.value;
    } else if (item.type === "income") {
      months[month].Income += item.value;
    }
  });

  const result = Object.values(months);
  console.log(result);
  result.sort(
    (a, b) => monthOrder.indexOf(a.month) - monthOrder.indexOf(b.month),
  );

  return result;
}
