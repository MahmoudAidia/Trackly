import "./ChartBullets.scss";
import { formatCurrency } from "../../helpers/formatCurrency";
function ChartBullets({ title, price, color }) {
  return (
    <div className="chartBullets">
      <div className="title">
        <span style={{ backgroundColor: color }}></span>
        <h4>{title}</h4>
      </div>
      <span className="money">{formatCurrency(price)}</span>
    </div>
  );
}

export default ChartBullets;
