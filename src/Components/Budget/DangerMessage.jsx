import { formatCurrency } from "../../helpers/formatCurrency";
import "./DangerMessage.scss";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";

function DangerMessage({ category, number }) {
  return (
    <p className="dangerMessage">
      <ErrorOutlineOutlinedIcon className="icon" />
      <span>You have exceeded your budget for {category} by </span>
      <span className="balance"> {formatCurrency(number)}</span>
    </p>
  );
}

export default DangerMessage;
