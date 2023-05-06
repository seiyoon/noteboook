import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Write.css";

import "react-toastify/dist/ReactToastify.css";

import { Header } from "../components/Header";
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
    <div className="writeContainer">
      <Header />
      <div className="writeTop">
        <div className="writeGoback">
          <GoBackButton />
        </div>
      </div>
      <div className="writeMain">
        <div className="weeks">
          <h4>주차</h4>
          <div className="weeksbtn">{weeks}</div>
          <div className="weeksButton"></div>
        </div>
        <div className="writeSub">
          <div className="writeFirst">
            <InputLine1 placeholder="제목" onChange={onTitleHandler} />
            <InputLine2 placeholder="과목" onChange={onSubjectHandler} />
          </div>
          <div className="writeSecond">
            <InputLine3 placeholder="내용" onChange={onContentHandler} />
          </div>
          <div className="writeButton">
            {canSubmit() ? (
              <Button onClick={handleClickSubmit} className="success-button">
                등록하기
              </Button>
            ) : (
              <DisableButton className="disable-button">
                입력 칸을 모두 채워주세요🥹
              </DisableButton>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Write;
