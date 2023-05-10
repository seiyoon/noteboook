import React, { useState, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";

import styled from "styled-components";
import { COLOR } from "../styles/color";

import { Header2 } from "../components/Header2";
import { Footer } from "../components/Footer";
import { Button, DisableButton } from "../components/Button";
import {
  InputLine1,
  InputLine2,
  InputLine3,
  InputLine4,
} from "../components/InputBox";
import { GoBackButton } from "../components/GoBackButton";
import { firestore } from "../firebase";

const Write = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [subject, setSubject] = useState("");
  const [week, setWeek] = useState("");

  const onWeekHandler = (e) => {
    setWeek(e.target.value);
  };
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

  const canSubmit = useCallback(() => {
    return subject !== "" && content !== "" && title !== "";
  }, [subject, title, content]);

  const handleClickSubmit = () => {
    const bucket = firestore.collection("notebook");
    bucket
      .add({
        title: title,
        content: content,
        subject: subject,
        week: week,
      })
      .then((docRef) => {
        console.log(docRef.id);
      });
  };

  return (
    <StWrite>
      <Header2 />
      <StContent>
        <ContentTitle>
          <GoBack>
            <GoBackButton />
          </GoBack>
          | 필기 작성
        </ContentTitle>
        <ContentMain>
          <Weeks>
            <InputLine4 placeholder="몇" onChange={onWeekHandler} />
            <h4>주차</h4>
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
                <Link to="/home">
                  <Button
                    onClick={handleClickSubmit}
                    className="success-button"
                  >
                    등록하기
                  </Button>
                </Link>
              ) : (
                <DisableButton className="disable-button">
                  등록하기
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
  align-items: center;
  width: 100%;
  font-size: 25px;
  font-weight: 600;
`;
const GoBack = styled.div`
  display: inline;
  margin-left: 20px;
  margin-right: 20px;
`;
const ContentMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 20px;
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
