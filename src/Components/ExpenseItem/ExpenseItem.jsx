import { format } from "date-fns";
import { categoriesIcons, colors } from "../../helpers/constants.jsx";
import "./ExpenseItem.scss";
import { Timestamp } from "firebase/firestore";

function ExpenseItem({ category, desc, value, date, payment, icon }) {
  const jsDate = date instanceof Timestamp ? date.toDate() : new Date(date);
  const style = {
    backgroundColor: colors[category],
    opacity: ".8",
    padding: "10px 15px",
    borderRadius: "10px",
    fontSize: "20px",
  };

  return (
    <li className="expenseItem">
      <div>
        <span style={style}>{categoriesIcons[category]}</span>
        <div>
          <span>{category}</span>
          <span className="desc">{desc}</span>
        </div>
      </div>

      <div className="price">
        <span>${value}</span>
        <span className="payment">{format(date, "MMMM d, yyyy")}</span>
      </div>
    </li>
  );
}

export default ExpenseItem;
