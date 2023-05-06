import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLOR } from "../styles/color";

export const Footer = () => {
  return (
    <StFooter>
      <FooterImg>
        <FooterLogo>
          <img
            src={require("../assets/notebook.png")}
            className="logoIcon"
            alt="logo"
          />
        </FooterLogo>
        <FooterTextLogo>
          <img
            src={require("../assets/noteboook-gray.png")}
            className="mainLogoIcon"
            alt="mainLogo"
          />
        </FooterTextLogo>
      </FooterImg>
      <FooterText>
        <FooterGithub>
          <Link to="https://github.com/seiyoon" target="_blank">
            <img
              src={require("../assets/github.png")}
              className="github"
              alt="github"
            ></img>
          </Link>
        </FooterGithub>
      </FooterText>
    </StFooter>
  );
};

const StFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 250px;
  background-color: ${COLOR.GRAY};
  bottom: 0;
  padding-left: 3rem;
  padding-right: 3rem;
`;
const FooterImg = styled.div`
  display: flex;
  align-items: center;
`;
const FooterLogo = styled.div`
  .logoIcon {
    margin-left: 40px;
    width: 60px;
    ${({ theme }) => theme.mobile`
      margin-left: 20px;
      width: 50px;
    `};
  }
`;
const FooterTextLogo = styled.div`
  .mainLogoIcon {
    margin-left: 25px;
    width: 150px;
    ${({ theme }) => theme.mobile`
      margin-left: 15px;
      width: 120px;
    `};
  }
`;
const FooterText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FooterGithub = styled.div`
  margin-right: 40px;
  .github {
    width: 45px;
    ${({ theme }) => theme.mobile`
      margin-left: 20px;
    `};
  }
`;
