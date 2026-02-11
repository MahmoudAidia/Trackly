import "./ExpenseItem.scss";
import { Timestamp } from "firebase/firestore";

function ExpenseItem({ category, desc, value, date, payment, icon }) {
  const jsDate = date instanceof Timestamp ? date.toDate() : new Date(date);

  return (
    <li className="expenseItem">
      <div>
        {icon}
        <div>
          <span>{category}</span>
          <span className="desc">{desc}</span>
        </div>
      </div>

      <div className="price">
        <span>${value}</span>
        <span className="payment">{date}</span>
      </div>
    </li>
  );
}

export default ExpenseItem;
