import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { COLOR } from "../styles/color";
import styled from "styled-components";

import { Header } from "../components/Header";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { Footer } from "../components/Footer";

import { auth } from "../firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default function Login() {
  const navigate = useNavigate();

  // 이메일 + 비밀번호
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [newAccount, setNewAccount] = useState(true); // 새로운 유저인지 확인

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    setEmailError(!isValidEmail(e.target.value));
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 6) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  // 이메일 유효성 검사
  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  // 이메일 + 비밀번호 로그인
  const login = async () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // 구글 로그인
  const [userData, setUserData] = useState(null);

  function handleGoogleLogin() {
    const provider = new GoogleAuthProvider(); // provider를 구글로 설정
    signInWithPopup(auth, provider) // popup을 이용한 signup
      .then((data) => {
        setUserData(data.user); // user data 설정
        console.log(data); // console로 들어온 데이터 표시
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  }

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
          <InputBox onChange={handleChangeEmail} name="id" value={email} />
          {emailError && (
            <ErrorMessage>올바른 이메일 형식이 아닙니다</ErrorMessage>
          )}
          <h5>비밀번호</h5>
          <InputBox
            name="password"
            type="password"
            value={password}
            onChange={handleChangePassword}
          />
          {passwordError && (
            <ErrorMessage>비밀번호는 6자리 이상이어야 합니다</ErrorMessage>
          )}
          <LoginButton>
            <Button onClick={login}>로그인</Button>
          </LoginButton>
          <GoogleButton>
            <button className="google" onClick={handleGoogleLogin}>
              <img
                src={require("../assets/google.png")}
                className="google"
                alt="google"
              />
            </button>
          </GoogleButton>
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
const ErrorMessage = styled.div`
  margin-top: 5px;
  font-size: 14px;

  color: ${COLOR.RED};
`;
const LoginButton = styled.div`
  margin: 0;
  padding: 0;
  justify-content: center;
  margin-top: 50px;
`;
const GoogleButton = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 30px;
  margin-bottom: 65px;

  .google {
    width: 230px;
    border: none;
    margin-right: 20px;
    background-color: ${COLOR.WHITE};

    .google {
      width: 230px;
    }
  }
`;
