import { formatCurrency } from "../../helpers/formatCurrency";
import "./DangerMessage.scss";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";

function DangerMessage({ category, number }) {
  return (
    <p className="dangerMessage">
      <div>
        <ErrorOutlineOutlinedIcon className="icon" />
        <span>
          You have exceeded your budget for {category} by{" "}
          {formatCurrency(number)}
        </span>
      </div>
    </p>
  );
}

export default DangerMessage;
