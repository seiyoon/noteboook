import React from "react";
import "../css/Button.css";

export const Button = ({ children, onClick }) => {
  return (
    <div className="button">
      <button className="buttonbox" onClick={onClick}>
        {children}
      </button>
    </div>
  );
};
