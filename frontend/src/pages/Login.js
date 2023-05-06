import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/Login.css";

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
    <div className="loginMain">
      <Header />

      <div className="Llogo">
        <img
          src={require("../assets/logo.png")}
          className="logoImg1"
          alt="logo"
        />
        <img
          src={require("../assets/mainLogo.png")}
          className="logoImg2"
          alt="mainLogo"
        />
      </div>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="loginInput">
          <h5>이메일</h5>
          <InputBox name="email" variant="outlined" onChange={handleChange} />
          <div className="error-message"></div>
          <h5>비밀번호</h5>
          <InputBox
            name="password"
            type="password"
            variant="outlined"
            onChange={handleChange}
          />
          <div className="error-message"></div>
          <div className="loginButton">
            <Button type="submit">로그인</Button>
          </div>
          <div className="gotoSignup">
            <Link to="/signup">
              <button className="signup">회원가입 하기</button>
            </Link>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
};
export default Login;
