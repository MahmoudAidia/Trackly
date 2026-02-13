import { categoriesIcons, colors } from "../../helpers/constants";
import { formatCurrency } from "../../helpers/formatCurrency";

function RecentItem({ value, date, desc, children, category, payment }) {
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
        <span className="payment">{payment}</span>
      </div>
    </li>
  );
}

export default RecentItem;
