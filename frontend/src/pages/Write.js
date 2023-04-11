import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Write.css";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/Button";
import { InputLine1, InputLine2, InputLine3 } from "../components/InputBox";
import { GoBackButton } from "../components/GoBackButton";

const Home = () => {
  const navigate = useNavigate();
  const [selectedWeek, setSelectedWeek] = useState(null);

  const handleClickSubmit = () => {
    navigate("/home");
  };

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
            <InputLine1 placeholder="제목" />
            <InputLine2 placeholder="과목" />
          </div>
          <div className="writeSecond">
            <InputLine3 placeholder="내용" />
          </div>
          <div className="writeButton">
            <Button onClick={handleClickSubmit}>등록하기</Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Home;
