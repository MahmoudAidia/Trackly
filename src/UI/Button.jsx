import { Link } from "react-router";

import "./Button.scss";
function Button({ children, handleClick, type }) {
  return (
    <button
      className="btn"
      type={type}
      onClick={() => handleClick((prev) => !prev)}
    >
      {children}
    </button>
  );
}

export default Button;
