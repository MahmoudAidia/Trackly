import React from "react";
import "./Loader.scss";

const Loader = ({ size = "large" }) => {
  return (
    <div className="loader-container">
      <div className={`spinner ${size}`}></div>
    </div>
  );
};

export default Loader;
