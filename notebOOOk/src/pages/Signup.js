import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { COLOR } from "../styles/color";
import styled from "styled-components";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/Button";
import { InputBox } from "../components/InputBox";

export default function Signup() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const handleChangeId = (e) => {
    setId(e.target.value);
  };
  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleChangePassword2 = (e) => {
    setPassword2(e.target.value);
  };

  const handleSubmit = () => {};

  return (
    <StSignup>
      <Header />
      <StContent>
        <h3>회원가입</h3>
        <SignupInput>
          <h5>이메일</h5>
          <InputBox onChange={handleChangeId} name="id" />

          <h5>닉네임</h5>
          <InputBox onChange={handleChangeName} name="id" />

          <h5>비밀번호</h5>
          <InputBox
            name="password"
            type="password"
            onChange={handleChangePassword}
          />

          <h5>비밀번호 확인</h5>
          <InputBox
            name="password2"
            type="password"
            onChange={handleChangePassword2}
          />
        </SignupInput>
        <SignupButton>
          <Button onClick={handleSubmit}>시작하기</Button>
        </SignupButton>
      </StContent>
      <Footer />
    </StSignup>
  );
}

const StSignup = styled.div``;
const StContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 130px;
  font-family: "SUITE-Regular";
  h3 {
    margin-bottom: 20px;
    font-size: 25px;
    font-weight: 900;
    color: ${COLOR.MAIN};
    letter-spacing: 1.5px;
  }
  .signupInput {
    margin: 0;
    padding: 0;
    margin-bottom: 70px;
  }
`;
const SignupInput = styled.div`
  margin-top: 30px;
  h5 {
    margin-top: 30px;
    margin-bottom: 5px;
    font-size: 20px;
    font-weight: 600;
    color: ${COLOR.BLACK};
  }
`;
const SignupButton = styled.div`
  margin-top: 50px;
  margin-bottom: 65px;
`;
