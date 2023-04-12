import React from "react";
import "../css/Button.css";

export const Button = ({ children, onClick, type }) => {
  return (
    <div className="button">
      <button className="buttonbox" onClick={onClick} type={type}>
        {children}
      </button>
    </div>
  );
};

export const GrayButton = ({ children, onClick }) => {
  return (
    <div className="graybutton">
      <button className="graybuttonbox" onClick={onClick}>
        {children}
      </button>
    </div>
  );
};
