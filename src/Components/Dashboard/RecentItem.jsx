import { Padding } from "@mui/icons-material";
import { categoriesIcons, colors } from "../../helpers/constants";
import { getReadableColor } from "../../helpers/getReadableColor";
import { formatCurrency } from "../../helpers/formatCurrency";

function RecentItem({ value, date, desc, children, category }) {
  const style = {
    backgroundColor: colors[category],
    opacity: ".8",
    padding: "10px 15px",
    borderRadius: "10px",
    fontSize: "20px",
  };

  return (
    <li className="recentitem">
      <div>
        <span style={style}>{categoriesIcons[category]}</span>
        <div>
          <span>{category}</span>
          <span className="date">{desc}</span>
        </div>
      </div>

      <div className="price">
        <span>{formatCurrency(value)}</span>
        <span className="payment">{date}</span>
      </div>
    </li>
  );
}

export default RecentItem;
