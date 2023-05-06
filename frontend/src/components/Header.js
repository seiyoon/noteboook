import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { COLOR } from "../styles/color";

export const Header = () => {
  return (
    <StHeader>
      <Logo>
        <Link to="/">
          <img
            src={require("../assets/noteboook.png")}
            className="logo"
            alt="mainLogo"
          />
        </Link>
      </Logo>
      <HeaderText>
        <div className="login">
          <Link to="/login">로그인</Link>
        </div>
        <div className="signup">
          <Link to="/signup">회원가입</Link>
        </div>
      </HeaderText>
    </StHeader>
  );
};

const StHeader = styled.div`
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
  font-weight: 600;
  text-align: center;

  .logo {
    width: 200px;
  }

  ${({ theme }) => theme.tablet`
    padding-bottom: 20px;
    position: relative;
    border-bottom: 1px solid #eee;
  `};
`;
const HeaderText = styled.div``;
