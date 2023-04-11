import React from "react";
import { Link } from "react-router-dom";
import "../css/Login.css";

import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { Footer } from "../components/Footer";

const Login = () => {
  return (
    <div className="loginMain">
      <div className="logo">
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
      <div className="loginInput">
        <h5>닉네임</h5>
        <InputBox />
        <h5>비밀번호</h5>
        <InputBox type="password" />
        <div className="loginButton">
          <Button>로그인</Button>
        </div>
        <div className="gotoSignup">
          <Link to="/signup">
            <button className="signup">회원가입 하기</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Login;
