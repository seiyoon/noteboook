import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

import styled from "styled-components";
import { COLOR } from "../styles/color";

export const GoBackButton = () => {
  const navigate = useNavigate();
  const handleClickBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);
  return (
    <StGoBackButton>
      <button className="goback" onClick={handleClickBack}>
        <img
          src={require("../assets/goback.png")}
          className="gobackIcon"
          alt="goback"
        />
      </button>
    </StGoBackButton>
  );
};

const StGoBackButton = styled.div`
  .goback {
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 10px;
    background-color: ${COLOR.LIGHT_GRAY};
    border: 3px solid ${COLOR.MEDIUM_GRAY};
  }
  .gobackIcon {
    width: 27px;
    height: 27px;
  }
`;
