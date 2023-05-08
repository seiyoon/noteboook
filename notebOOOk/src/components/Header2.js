import React from "react";
import { Link, useNavigate } from "react-router-dom";

import styled from "styled-components";
import { COLOR } from "../styles/color";

export const Header2 = () => {
  return (
    <StHeader>
      <Logo>
        <Link to="/home">
          <img
            src={require("../assets/noteboook.png")}
            className="logo"
            alt="mainLogo"
          />
        </Link>
      </Logo>
      <User>
        <Link to="/profile">
          <img
            src={require("../assets/user.png")}
            className="user"
            alt="user"
          />
        </Link>
      </User>
    </StHeader>
  );
};

// star 는 로그인 해야만 보이게 바꾸기!!!

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
const User = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 60px;
  margin-top: -5px;
  .user {
    width: 40px;
  }
  ${({ theme }) => theme.tablet`
    right: 20px;
  `};
`;
