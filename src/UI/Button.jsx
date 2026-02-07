import React from "react";
import "./Button.scss";
function Button({ children }) {
  return <button className="btn">{children}</button>;
}

export default Button;
