import { useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { COLOR } from "../styles/color";

export const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <StHeader toggleMenu={toggleMenu}>
      <Logo>
        <Link to="/">
          <img
            src={require("../assets/noteboook.png")}
            className="logo"
            alt="mainLogo"
          />
        </Link>
      </Logo>
      <HeaderText toggleMenu={toggleMenu}>
        <Link to="/login">
          <LoginText>로그인</LoginText>
        </Link>
      </HeaderText>
      <ToggleBtn onClick={toggleNav}>
        <span></span>
        <span></span>
        <span></span>
      </ToggleBtn>
    </StHeader>
  );
};

const StHeader = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 70px;
  padding: 24px 60px;
  background-color: ${COLOR.WHITE};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);

  ${({ theme }) => theme.tablet`
  height: ${(props) => (props.toggleMenu ? "auto" : "60px")};
  padding: 20px 0;
`};
`;
const Logo = styled.div`
  margin: 0 auto;
  text-align: center;

  .logo {
    width: 180px;
  }

  ${({ theme }) => theme.tablet`
    .logo {
        width: 150px;
    }     
  `};
`;
const HeaderText = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 20px;
  margin-top: -3px;

  ${({ theme }) => theme.tablet`
      display: ${(props) => (props.toggleMenu ? "flex" : "none")};
      flex-direction: column;
      right: 0;
      margin-top: 40px;
  `};
`;
const LoginText = styled.div`
  margin-right: 30px;
  font-size: 20px;
  font-weight: 700;
  color: ${COLOR.WHITE};
  background-color: ${COLOR.MAIN};
  padding: 7px 13px;
  border-radius: 20px;
  :hover {
    background-color: ${COLOR.MAIN_HOVER};
  }
  ${({ theme }) => theme.tablet`
      margin-right: ${(props) => (props.toggleMenu ? "0px" : "0px")};
      right: 0;
  `};
`;
const ToggleBtn = styled.div`
  display: none;
  cursor: pointer;

  span {
    display: block;
    width: 20px;
    height: 3px;
    margin-bottom: 4px;
    border-radius: 10px;
    background-color: ${COLOR.MAIN};
    transition: all 0.2s ease-in;
    &:nth-of-type(3) {
      margin-bottom: 0px;
    }
  }

  ${({ theme }) => theme.tablet`
    display: block;
    position: absolute;
    top: 20px;
    right: 30px;
  `};
  ${({ theme }) => theme.mobile`
    right: 20px;
  `};
`;
