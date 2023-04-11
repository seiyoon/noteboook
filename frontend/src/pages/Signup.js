import React from "react";
import "../css/Signup.css";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/Button";
import { InputBox } from "../components/InputBox";

const Signup = () => {
  return (
    <div className="container">
      <Header />
      <div className="signupMain">
        <h3>회원가입</h3>
        <div className="signupInput">
          <h5>닉네임</h5>
          <InputBox />
          <h5>비밀번호</h5>
          <InputBox />
          <h5>비밀번호 확인</h5>
          <InputBox />
        </div>
        <div className="signupButton">
          <Button>시작하기</Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Signup;
