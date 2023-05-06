import { useRef } from "react";
import "../css/InputBox.css";

export const InputBox = ({ type, placeholder, onChange, value, name }) => {
  return (
    <div className="input">
      <input
        className="inputbox"
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export const InputLine1 = ({ type, placeholder, onChange }) => {
  return (
    <div className="input">
      <input
        className="inputline1"
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};
export const InputLine2 = ({ type, placeholder, onChange }) => {
  return (
    <div className="input">
      <input
        className="inputline2"
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};
export const InputLine3 = ({ type, placeholder, onChange }) => {

    const handleResizeText = (e) => {
        const element = e.target;
        element.style.height = "1px";
        element.style.height = `${12 + element.scrollHeight}px`;
    };


  return (
    <div className="input">
      <textarea
        className="inputline3"
        placeholder={placeholder}
        onKeyDown={handleResizeText}
        onKeyUp={handleResizeText}
        rows={1}
        onChange={onChange}
      />
    </div>
  );
};
