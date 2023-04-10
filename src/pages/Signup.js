import { Header } from "../components/Header";

const Signup = () => {
  return (
    <div className="container">
      <div className="header">
        <Header />
      </div>
      <div className="main">
        <div className="logo">
          <h3>회원가입</h3>
        </div>
        <div className="loginInput">
          <h5>닉네임</h5>
          <input />
          <h5>비밀번호</h5>
          <input />
          <h5>비밀번호 확인</h5>
          <input />
        </div>
        <div className="loginButton">
          <button>시작하기</button>
        </div>
      </div>
    </div>
  );
};
export default Signup;
