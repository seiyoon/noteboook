import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Signup.css";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/Button";
import { InputBox } from "../components/InputBox";

const Signup = () => {
  const navigate = useNavigate();

  const handleChange = () => {};

  const handleSubmit = () => {};

  return (
    <div className="container">
      <Header />

      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="signupMain">
          <h3>회원가입</h3>
          <div className="signupInput">
            <h5>이메일</h5>
            <InputBox name="email" variant="outlined" onChange={handleChange} />

            <h5>닉네임</h5>
            <InputBox
              name="nickname"
              variant="outlined"
              onChange={handleChange}
            />

            <h5>비밀번호</h5>
            <InputBox
              name="password"
              variant="outlined"
              type="password"
              onChange={handleChange}
            />

            <h5>비밀번호 확인</h5>
            <InputBox
              name="password2"
              variant="outlined"
              type="password"
              onChange={handleChange}
            />
          </div>
          <div className="signupButton">
            <Button type="submit">시작하기</Button>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
};
export default Signup;
