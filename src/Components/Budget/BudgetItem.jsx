import { categoriesIcons } from "../../helpers/constants";
import { formatCurrency } from "../../helpers/formatCurrency";
import { useDeleteItem } from "../../hooks/useDeleteItem";
import { useAppContext } from "../../Context/AppContext";
import GrothBar from "./GrothBar";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import DangerMessage from "./DangerMessage";
import DeleteBtn from "../../UI/DeleteBtn";
import "./BudgetItem.scss";

function BudgetItem({ category, limit, expenses, id }) {
  const { userId } = useAppContext();
  const totalExpenses = expenses?.reduce((acc, item) => item + acc, 0) || 0;
  const percent = Math.ceil((totalExpenses / limit) * 100);
  const balance = totalExpenses - limit;
  const {
    mutateAsync: deleteBudgetItem,
    isPending,
    isError,
    isSuccess,
  } = useDeleteItem({
    collectionName: "budget",
    userId,
    dataId: id,
  });

  return (
    <div className="budgetItem">
      <div className="text">
        <div className="textBlock">
          <span>{categoriesIcons[category]}</span>
          <div>
            <h6>{category}</h6>
            <p>
              {formatCurrency(totalExpenses)} of {formatCurrency(limit)}
            </p>
          </div>
        </div>
        <div className="deleteBox">
          <span>
            {percent < 80 ? (
              <CheckCircleOutlinedIcon className="iconNormal" />
            ) : (
              <ErrorOutlineOutlinedIcon className="iconDanger" />
            )}
          </span>
          <DeleteBtn isLoading={isPending} deleteFn={deleteBudgetItem} />
        </div>
      </div>
      <GrothBar percent={percent} />
      <p className="stats">
        <span className="percent">{percent}% used</span>
        <span> {formatCurrency(limit - totalExpenses)} left</span>
      </p>
      {percent > 100 && <DangerMessage category={category} number={balance} />}
    </div>
  );
}

export default BudgetItem;
