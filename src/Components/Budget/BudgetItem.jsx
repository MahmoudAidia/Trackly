import { categoriesIcons } from "../../helpers/constants";
import GrothBar from "./GrothBar";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import { formatCurrency } from "../../helpers/formatCurrency";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import "./BudgetItem.scss";
import DangerMessage from "./DangerMessage";

function BudgetItem({ category, limit, expenses }) {
  const totalExpenses = expenses?.reduce((acc, item) => item + acc, 0) || 0;
  const percent = Math.ceil((totalExpenses / limit) * 100);
  const balance = totalExpenses - limit;
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
        {percent < 80 ? (
          <CheckCircleOutlinedIcon className="iconNormal" />
        ) : (
          <ErrorOutlineOutlinedIcon className="iconDanger" />
        )}
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
