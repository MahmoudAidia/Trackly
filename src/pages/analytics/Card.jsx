import { formatCurrency } from "../../helpers/formatCurrency";
import "./Card.scss";
function Card({ icon, title, value, bgc }) {
  const color = title === "Savings" && "#00A63E";
  return (
    <div className="card">
      <div>
        <span className="icon" style={{ backgroundColor: bgc }}>
          {icon}
        </span>
        <span>{title}</span>
      </div>
      <p style={{ color: color }}>{formatCurrency(value)}</p>
    </div>
  );
}

export default Card;
