import "./WelcomeComponent.scss";
function WelcomeComponent({ icon, title, text, counter }) {
  return (
    <div className="container">
      <div className="WelcomeComponent">
        {icon}
        <h2>{title}</h2>
        <p>{text}</p>
        <div className="dots">
          <span className={`${counter === 0 ? "active" : ""}`}></span>
          <span className={`${counter === 1 ? "active" : ""}`}></span>
          <span className={`${counter === 2 ? "active" : ""}`}></span>
          <span className={`${counter === 3 ? "active" : ""}`}></span>
        </div>
      </div>
    </div>
  );
}

export default WelcomeComponent;
