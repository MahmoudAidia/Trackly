import "./ChartBullets.scss";

function ChartBullets({ title, price, color }) {
  return (
    <div className="chartBullets">
      <div className="title">
        <span style={{ backgroundColor: color }}></span>
        <h4>{title}</h4>
      </div>
      <span>{price}$</span>
    </div>
  );
}

export default ChartBullets;
