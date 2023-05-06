import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { COLOR } from "../styles/color";

import "react-toastify/dist/ReactToastify.css";

import { Header2 } from "../components/Header2";
import { Footer } from "../components/Footer";
import { Button, DisableButton } from "../components/Button";
import { InputLine1, InputLine2, InputLine3 } from "../components/InputBox";
import { GoBackButton } from "../components/GoBackButton";

const Write = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [subject, setSubject] = useState("");

  const onTitleHandler = (e) => {
    setTitle(e.target.value);
  };
  const onContentHandler = (e) => {
    setContent(e.target.value);
  };
  const onSubjectHandler = (e) => {
    setSubject(e.target.value);
  };

  const navigate = useNavigate();
  const [selectedWeek, setSelectedWeek] = useState(null);

  const canSubmit = useCallback(() => {
    return subject !== "" && content !== "" && title !== "";
  }, [subject, title, content]);

  const handleClickSubmit = () => {};

  const weeks = new Array(16).fill("").map((_, index) => (
    <button
      className={`week ${selectedWeek === index + 1 ? "selected" : ""}`}
      key={index}
      onClick={() => setSelectedWeek(index + 1)}
    >
      {index + 1}
    </button>
  ));

  return (
    <StWrite>
      <Header2 />
      <StContent>
        <ContentTitle>| 필기 작성</ContentTitle>
        <ContentTop>
          <GoBack>
            <GoBackButton />
          </GoBack>
        </ContentTop>
        <ContentMain>
          <Weeks>
            <h4>주차</h4>
            <div className="weeksbtn">{weeks}</div>
            <div className="weeksButton"></div>
          </Weeks>
          <WriteForm>
            <WriteFirst>
              <InputLine1 placeholder="제목" onChange={onTitleHandler} />
              <div className="blank" />
              <InputLine2 placeholder="과목" onChange={onSubjectHandler} />
            </WriteFirst>
            <WriteSecond>
              <InputLine3 placeholder="내용" onChange={onContentHandler} />
            </WriteSecond>
            <WriteButton>
              {canSubmit() ? (
                <Button onClick={handleClickSubmit} className="success-button">
                  등록하기
                </Button>
              ) : (
                <DisableButton className="disable-button">
                  입력 칸을 모두 채워주세요🥹
                </DisableButton>
              )}
            </WriteButton>
          </WriteForm>
        </ContentMain>
      </StContent>
      <Footer />
    </StWrite>
  );
};
export default Write;

const StWrite = styled.div``;
const StContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 130px;
  margin-left: 40px;
  margin-right: 40px;
  font-family: "SUITE-Regular";
`;
const ContentTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-left: 40px;
  font-size: 25px;
  font-weight: 500;
`;
const ContentTop = styled.div`
  width: 100%;
  display: inline;
  margin-right: 40px;
  ${({ theme }) => theme.tablet`
    margin-right: 0px;
`};
`;
const GoBack = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
const ContentMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 5px;
  margin-bottom: 100px;
`;
const Weeks = styled.div`
  display: flex;
  align-items: center;
  padding: 13px;
  background-color: ${COLOR.LIGHT_GRAY};
  border-radius: 10px;
  .weeksbtn {
    display: flex;
  }
  h4 {
    margin-top: 5px;
    margin-bottom: 5px;
    margin-right: 15px;
    font-size: 20px;
    font-weight: 700;
    color: ${COLOR.BLACK};
  }
  .week {
    color: ${COLOR.WHITE};
    font-size: 16px;
    font-weight: 600;
    border: none;
    border-radius: 5px;
    padding: 7px 12px;
    cursor: pointer;
    margin-right: 10px;
  }
  .week {
    background-color: ${COLOR.MEDIUM_GRAY};
  }
  .week.selected {
    background-color: ${COLOR.DARK_GRAY};
    color: ${COLOR.WHITE};
  }
`;
const WriteForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 30px;
`;
const WriteFirst = styled.div`
  display: flex;
  ${({ theme }) => theme.tablet`
    display: flex;
    flex-direction: column;
    align-items: center;
  `};
  .blank {
    width: 245px;
  }
`;
const WriteSecond = styled.div`
  margin-top: 40px;
`;
const WriteButton = styled.div``;
