import { format } from "date-fns";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./ExpenseBlock.scss";
function ExpenseBlock({ dateTitle, expenses }) {
  return (
    <div className="expenseBlock">
      <header>{format(dateTitle, "MMMM d, yyyy")}</header>
      {expenses.map((item) => (
        <ExpenseItem
          key={item.id}
          date={item.date}
          category={item.category}
          desc={item.desc}
          payment={item.payment}
          value={item.value}
          icon={item.icon}
        />
      ))}
    </div>
  );
}

export default ExpenseBlock;
