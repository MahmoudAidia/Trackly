import { format } from "date-fns";
import { categoriesIcons, colors } from "../../helpers/constants.jsx";
import "./ExpenseItem.scss";
import { Timestamp } from "firebase/firestore";
import DeleteBtn from "../../UI/DeleteBtn.jsx";
import { useAppContext } from "../../Context/AppContext.jsx";
import { useDeleteItem } from "../../hooks/useDeleteItem.js";

function ExpenseItem({ category, desc, value, date, payment, icon, id }) {
  const { userId } = useAppContext();

  const jsDate = date instanceof Timestamp ? date.toDate() : new Date(date);
  const style = {
    backgroundColor: colors[category],
    opacity: ".8",
    padding: "10px 15px",
    borderRadius: "10px",
    fontSize: "20px",
  };

  const { mutateAsync: deleteTrans, isPending } = useDeleteItem({
    collectionName: "expense",
    userId,
    dataId: id,
  });

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
        <div className="box">
          <span className="value">${value}</span>
          <DeleteBtn deleteFn={deleteTrans} isLoading={isPending} />
        </div>
        <span className="payment">{payment}</span>
      </div>
    </li>
  );
}

export default ExpenseItem;
