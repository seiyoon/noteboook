import React from "react";
import styled, { keyframes } from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { COLOR } from "../styles/color";

const First = () => {
  return (
    <StFirst>
      <Header />
      <StContent>
        <FirstBanner>
          <Banner1
            src={require("../assets/mainBanner.png")}
            className="banner1"
          />
        </FirstBanner>

        <SecondBanner>
          <h3>왜 noteboook 서비스를 기획했나요?</h3>
          <Graph src={require("../assets/graph.png")} className="graph" />
          <h6>
            대학생 33명을 대상으로 조사를 해본 결과, <br />
            학교에 갈 때 노트북을 들고 다니는 학생과 태블릿을 가지고 다니는
            학생은 22명으로 <br />
            많은 학생들이 각자의 사정으로 노트북과 태블릿 모두 챙겨다닌다는 것을
            알았습니다.
          </h6>
        </SecondBanner>
        <ThirdBanner>
          <h3>필기를 하기 위해 태블릿을 따로 챙겨요</h3>
          <h4>왜 태블릿으로 필기를 해야하나요? 노트북으로는 할 수 없나요?</h4>
          <h5>
            노트북으로도 간편하게 수업 내용을 필기할 수 있는 서비스가 있다면
            <br />
            굳이 태블릿을 챙기지 않아도 노트북만으로 모든 걸 해결할 수 있지
            않을까 라는 생각해서 나왔습니다
          </h5>
          <h1>우리의 가벼운 학교 생활을 위한 첫 걸음,</h1>
          <Logo
            src={require("../assets/noteboook_dark.png")}
            className="logo"
          />
          <Link to="/login">
            <StartButton>시작하기</StartButton>
          </Link>
        </ThirdBanner>
      </StContent>
      <Footer />
    </StFirst>
  );
};
export default First;

const StFirst = styled.div``;
const StContent = styled.div`
  margin-top: 180px;
  ${({ theme }) => theme.tablet`
  margin-top: 100px;
`};
`;
const FirstBanner = styled.div`
  width: 100%;
  height: 600px;
  .banner1 {
    width: 100%;
  }
  ${({ theme }) => theme.tablet`
  height: 300px;
`};
`;
const Banner1 = styled.img``;
const SecondBanner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 60px;
  padding-right: 60px;

  height: 880px;
  color: ${COLOR.BLACK};
  background-color: ${COLOR.WHITE};

  ${({ theme }) => theme.tablet`
    margin-top: 30px;
    height: 800px;
  `};

  h3 {
    margin-top: 70px;
    font-family: "SUITE-Regular";
    font-size: 35px;
    font-weight: 900;
    color: ${COLOR.MAIN_DARK};
    ${({ theme }) => theme.tablet`
    font-size: 28px;
`};
  }
  .graph {
    width: 60%;
    margin-top: 80px;
  }
  h6 {
    margin-top: 70px;
    font-family: "SUITE-Regular";
    font-size: 27px;
    font-weight: 600;
    line-height: 50px;
    ${({ theme }) => theme.tablet`
    font-size: 19px;
    line-height: 30px;
`};
  }
`;
const Graph = styled.img``;
const ThirdBanner = styled.div`
  width: 100%;
  height: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 60px;
  padding-right: 60px;
  background-color: ${COLOR.MAIN_LIGHT};
  font-family: "SUITE-Regular";
  h3 {
    font-size: 35px;
    font-weight: 700;
    color: ${COLOR.MAIN_DARK};
    ${({ theme }) => theme.tablet`
    font-size: 27px;
`};
  }
  h4 {
    margin-top: 70px;
    font-size: 30px;
    font-weight: 600;
    color: ${COLOR.WHITE};
    ${({ theme }) => theme.tablet`
    font-size: 22px;
`};
  }
  h5 {
    text-align: center;
    margin-top: 70px;
    font-size: 28px;
    font-weight: 600;
    color: ${COLOR.WHITE};
    line-height: 70px;
    ${({ theme }) => theme.tablet`
    line-height: 40px;
    font-size: 20px;
`};
  }
  h1 {
    font-family: "SDSamliphopangche_Outline";
    margin-top: 120px;
    font-size: 35px;
    font-weight: 500;
    color: ${COLOR.WHITE};
    ${({ theme }) => theme.tablet`
    font-size: 27px;
`};
  }
  .logo {
    margin-top: 40px;
    width: 20%;
    ${({ theme }) => theme.tablet`
    width: 30%;
  `};
    ${({ theme }) => theme.mobile`
    width: 50%;
  `};
  }
`;
const Logo = styled.img``;
const StartButton = styled.button`
  margin-top: 150px;
  width: 150px;
  height: 50px;
  border: none;
  border-radius: 20px;
  background-color: ${COLOR.MAIN};
  color: ${COLOR.WHITE};
  font-family: "SUITE-Regular";
  margin-top: 120px;
  font-size: 25px;
  font-weight: 700;
  :hover {
    background-color: ${COLOR.MAIN_HOVER};
  }
`;
