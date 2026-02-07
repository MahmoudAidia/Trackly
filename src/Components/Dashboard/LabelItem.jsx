import "./LabelItem.scss";
function LabelItem({ item }) {
  return (
    <div className="labelItem">
      <div>
        <span style={{ backgroundColor: item.color }}></span>
        <h4>{item.name}</h4>
      </div>
      <h4>${item.value}</h4>
    </div>
  );
}

export default LabelItem;
