import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { COLOR } from "../styles/color";
import styled from "styled-components";

import { Header } from "../components/Header";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { Footer } from "../components/Footer";

// 로그인 성공하면 서버에서 jwt 토큰 받음.
// 토큰을 redux store에 저장하고 redux-persist 모듈을 사용해
// local storage나 session storage에도 저장함
const Login = () => {
  const navigate = useNavigate();

  const handleChange = () => {};

  const handleSubmit = () => {};

  return (
    <StLogin>
      <Header />
      <StContent>
        <LoginLogo>
          <img
            src={require("../assets/mainLogo.png")}
            className="logoImg1"
            alt="logo"
          />
        </LoginLogo>
        <LoginInput>
          <h5>이메일</h5>
          <InputBox name="email" variant="outlined" onChange={handleChange} />

          <h5>비밀번호</h5>
          <InputBox
            name="password"
            type="password"
            variant="outlined"
            onChange={handleChange}
          />

          <LoginButton>
            <Link to="/home">
              <Button type="submit">로그인</Button>
            </Link>
          </LoginButton>
          <GotoSignup>
            <Link to="/signup">
              <button className="signup">회원가입 하기</button>
            </Link>
          </GotoSignup>
        </LoginInput>
      </StContent>
      <Footer className="footer" />
    </StLogin>
  );
};
export default Login;

const StLogin = styled.div``;
const StContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  font-family: "SUITE-Regular";
`;
const LoginLogo = styled.div`
  margin-top: 40px;
  .logoImg1 {
    width: 15rem;
  }
`;
const LoginInput = styled.div`
  margin-top: 30px;
  padding: 0;
  justify-content: center;

  h5 {
    margin-top: 25px;
    margin-bottom: 0.5rem;
    font-size: 2rem;
    font-weight: 600;
    color: ${COLOR.BLACK};
  }
`;
const LoginButton = styled.div`
  margin: 0;
  padding: 0;
  justify-content: center;
  margin-top: 50px;
`;
const GotoSignup = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 10px;
  margin-bottom: 65px;

  .signup {
    border: none;
    background: none;
    font-size: 20px;
    font-weight: 700;
    font-family: "SUITE-Regular";
    color: ${COLOR.MAIN};
  }
  .signup:hover {
    border: none;
    background: none;
    font-size: 20px;
    font-weight: 700;
    color: ${COLOR.MAIN_HOVER};
  }
`;
