import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { COLOR } from "../styles/color";
import styled from "styled-components";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/Button";
import { InputBox } from "../components/InputBox";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function Signup() {
  const [authInfo, setAuthInfo] = useState({});
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    setEmailError(!isValidEmail(e.target.value));
  };
  const handleChangeName = (e) => {
    if (e.target.value.length > 5 || e.target.value.length === 0) {
      setNameError(true);
    } else {
      setNameError(false);
    }
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 6) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };
  const handleChangePassword2 = (e) => {
    setPassword2(e.target.value);
  };

  // 이메일 유효성 검사
  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const signup = async () => {
    try {
      const auth = getAuth();
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const { stsTokenManager, uid } = user;
      setAuthInfo({ uid, email, authToken: stsTokenManager, name });
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <StSignup>
      <Header />
      <StContent>
        <h3>회원가입</h3>
        <SignupInput>
          <h5>이메일</h5>
          <InputBox onChange={handleChangeEmail} name="email" />
          {emailError && (
            <ErrorMessage>올바른 이메일 형식이 아닙니다</ErrorMessage>
          )}
          <h5>닉네임</h5>
          <InputBox onChange={handleChangeName} name="name" />
          {nameError && (
            <ErrorMessage>이름은 1글자~5글자 이어야 합니다</ErrorMessage>
          )}
          <h5>비밀번호</h5>
          <InputBox
            name="password"
            type="password"
            onChange={handleChangePassword}
          />
          {passwordError && (
            <ErrorMessage>비밀번호는 6자리 이상이어야 합니다</ErrorMessage>
          )}
          <h5>비밀번호 확인</h5>
          <InputBox
            name="password2"
            type="password"
            onChange={handleChangePassword2}
          />
          {passwordError && (
            <ErrorMessage>비밀번호는 6자리 이상이어야 합니다</ErrorMessage>
          )}
        </SignupInput>
        <SignupButton>
          <Button onClick={signup}>시작하기</Button>
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
const ErrorMessage = styled.div`
  margin-top: 5px;
  font-size: 14px;

  color: ${COLOR.RED};
`;
const SignupButton = styled.div`
  margin-top: 50px;
  margin-bottom: 65px;
`;
