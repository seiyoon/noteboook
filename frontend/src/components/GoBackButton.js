import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

import "../css/GoBackButton.css";

export const GoBackButton = () => {
  const navigate = useNavigate();
  const handleClickBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);
  return (
    <div>
      <button className="goback" onClick={handleClickBack}>
        <img
          src={require("../assets/goback.png")}
          className="gobackIcon"
          alt="goback"
        />
      </button>
    </div>
  );
};
