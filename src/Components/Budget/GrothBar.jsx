import "./GrothBar.scss";

function GrothBar({ percent }) {
  return (
    <div className="growthContainer">
      <div className="box">
        <div
          className={`growthBar ${percent > 80 ? "danger" : "normal"}`}
          style={{
            width: `${percent}%`,
          }}
        ></div>
      </div>
    </div>
  );
}

export default GrothBar;
