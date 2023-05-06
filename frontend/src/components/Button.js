import styled from "styled-components";
import { COLOR } from "../styles/color";

export const Button = ({ children, onClick, type }) => {
  return (
    <StButton>
      <button className="buttonbox" onClick={onClick} type={type}>
        {children}
      </button>
    </StButton>
  );
};

export const DisableButton = ({ children, onClick, type }) => {
  return (
    <StButton>
      <button className="buttonbox2" onClick={onClick} type={type}>
        {children}
      </button>
    </StButton>
  );
};

export const GrayButton = ({ children, onClick }) => {
  return (
    <StGrayButton>
      <button className="graybuttonbox" onClick={onClick}>
        {children}
      </button>
    </StGrayButton>
  );
};

const StButton = styled.div`
  .buttonbox {
    width: 400px;
    height: 48px;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 03px;
    color: white;
    border: 2.5px solid ${COLOR.MAIN};
    background-color: ${COLOR.MAIN};
    border-radius: 10px;
  }
  .buttonbox:hover {
    outline: none;
    color: white;
    border: 2.5px solid ${COLOR.MAIN_HOVER};
    background-color: ${COLOR.MAIN_HOVER};
  }

  .buttonbox2 {
    width: 400px;
    height: 48px;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 3px;
    color: #363636;
    border: 0.25px solid #b9b9b9;
    background-color: #b9b9b9;
    border-radius: 10px;
  }
`;
const StGrayButton = styled.div`
  .graybuttonbox {
    width: 180px;
    height: 48px;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 2px;
    color: white;
    border: 2.5px solid #bbbbbb;
    background-color: #bbbbbb;
    border-radius: 10px;
  }
  .graybuttonbox:hover {
    outline: none;
    color: white;
    border: 2.5px solid #898989;
    background-color: #898989;
  }
`;
