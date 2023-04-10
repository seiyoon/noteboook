import "../css/InputBox.css";

export const InputBox = ({ type, placeholder, onChange }) => {
  return (
    <div className="input">
      <input
        className="inputbox"
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export const InputLine = ({ type, placeholder, onChange }) => {
  return (
    <div className="input">
      <input
        className="inputline"
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};
