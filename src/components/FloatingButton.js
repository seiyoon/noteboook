import React from "react";
import "../css/FloatingButton.css";

const FloatingButton = ({ onClick }) => {
  return (
    <button className="floatingButton" onClick={onClick}>
      +
    </button>
  );
};

export default FloatingButton;
