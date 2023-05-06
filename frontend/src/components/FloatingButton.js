import styled from "styled-components";
import { COLOR } from "../styles/color";

const FloatingButton = ({ onClick }) => {
  return (
    <StFloatingButton onClick={onClick}>
      <img
        src={require("../assets/pencil.png")}
        className="logo"
        alt="mainLogo"
      />
    </StFloatingButton>
  );
};

export default FloatingButton;

const StFloatingButton = styled.button`
  position: fixed;
  bottom: 70px;
  right: 100px;
  width: 100px;
  height: 100px;
  background-color: ${COLOR.MAIN_HOVER};
  border-radius: 200px;
  border: none;
  padding-left: 10px;
  box-shadow: 1px 5px 5px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  :hover {
    background-color: ${COLOR.MAIN_LIGHT};
  }
  ${({ theme }) => theme.tablet`
    right: 50px;
  `};
`;
