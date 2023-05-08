import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { COLOR } from "../styles/color";
import styled from "styled-components";

import { Header } from "../components/Header";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { Footer } from "../components/Footer";

export default function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeId = (e) => {
    setId(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    const post = {
      id: id,
      pw: password,
    };

    fetch("http://localhost:3001/login", {
      method: "post", // 통신방법
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((json) => {
        setId(json.text);
        setPassword(json.text);
      });
  };

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
          <h5>아이디</h5>
          <InputBox onChange={handleChangeId} name="id" />

          <h5>비밀번호</h5>
          <InputBox
            name="password"
            type="password"
            onChange={handleChangePassword}
          />

          <LoginButton>
            <Button onClick={handleSubmit}>로그인</Button>
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
}
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
