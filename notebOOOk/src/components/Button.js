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
    color: ${COLOR.WHITE};
    border: 2.5px solid ${COLOR.MAIN};
    background-color: ${COLOR.MAIN};
    border-radius: 10px;
  }
  .buttonbox:hover {
    outline: none;
    color: ${COLOR.WHITE};
    border: 2.5px solid ${COLOR.MAIN_HOVER};
    background-color: ${COLOR.MAIN_HOVER};
  }

  .buttonbox2 {
    width: 400px;
    height: 48px;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 3px;
    color: ${COLOR.WHITE};
    border: 0.25px solid ${COLOR.MEDIUM_GRAY};
    background-color: ${COLOR.MEDIUM_GRAY};
    border-radius: 10px;
  }
`;
const StGrayButton = styled.div`
  .graybuttonbox {
    width: 180px;
    height: 48px;
    font-size: 17px;
    font-weight: 600;
    letter-spacing: 1.5px;
    color: ${COLOR.WHITE};
    border: 2.5px solid ${COLOR.DARK_GRAY};
    background-color: ${COLOR.DARK_GRAY};
    border-radius: 10px;
  }
  .graybuttonbox:hover {
    outline: none;
    color: ${COLOR.WHITE};
    border: 2.5px solid ${COLOR.MEDIUM_GRAY};
    background-color: ${COLOR.MEDIUM_GRAY};
  }
`;
