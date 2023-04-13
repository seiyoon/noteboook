import React from "react";
import {useNavigate} from "react-router-dom";
import "../css/Signup.css";
import * as Yup from "yup";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Formik, ErrorMessage} from "formik";
import axios from "axios";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/Button";
import { InputBox } from "../components/InputBox";

const Signup = () => {
    const navigate = useNavigate();

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email("올바른 이메일 형식이 아닙니다!")
            .required("이메일을 입력하세요!"),
        nickname: Yup.string()
            .min(2, "닉네임은 최소 2글자 이상입니다!")
            .max(5, "닉네임은 최대 5글자입니다!")
            .matches(
                /[ㄱ-힣]/,
                "닉네임은 한글만 입력가능합니다!"
            )
            .required("닉네임을 입력하세요!"),
        password: Yup.string()
            .min(8, "비밀번호는 최소 8자리 이상입니다")
            .max(16, "비밀번호는 최대 16자리입니다!")
            .required("패스워드를 입력하세요!")
            .matches(
                /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[^\s]*$/,
                "알파벳, 숫자, 공백을 제외한 특수문자를 모두 포함해야 합니다!"
            ),
        password2: Yup.string()
            .oneOf([Yup.ref("password"), null], "비밀번호가 일치하지 않습니다!")
            .required("필수 입력 값입니다!"),
    });

    const submit = async (values) => {
        const {email, nickname, password} = values;
        try {
            await axios.post("/api/auth/signup", {
                email,
                nickname,
                password,
            });
            toast.success(<h3>회원가입이 완료되었습니다.<br/>로그인 하세요😎</h3>, {
                position: "top-center",
                autoClose: 2000
            });
            setTimeout(()=> {
                navigate("/");
            }, 2000);

        } catch (e) {
            // 서버에서 받은 에러 메시지 출력
            toast.error(e.response.data.message + "😭", {
                position: "top-center",
            });
        }

    };



    return (
        <Formik
            initialValues={{
                email: "",
                nickname: "",
                password: "",
                password2: "",
            }}
            validationSchema={validationSchema}
            onSubmit={submit}
            validateOnMount={true}
        >
            {({values, handleSubmit, handleChange, errors}) => (
                <div className="container">
                    <Header />
                    <ToastContainer />
                    <form onSubmit={handleSubmit} autoComplete="off">
                        <div className="signupMain">
                            <h3>회원가입</h3>
                            <div className="signupInput">
                                <h5>이메일</h5>
                                <InputBox value={values.email}
                                          name="email"
                                          variant="outlined"
                                          onChange={handleChange}/>
                                <div className="error-message">
                                    {errors.email}
                                </div>
                                <h5>닉네임</h5>
                                <InputBox value={values.nickname}
                                          name="nickname"
                                          variant="outlined"
                                          onChange={handleChange}/>
                                <div className="error-message">
                                    {errors.nickname}
                                </div>
                                <h5>비밀번호</h5>
                                <InputBox value={values.password}
                                          name="password"
                                          variant="outlined"
                                          type="password"
                                          onChange={handleChange}/>
                                <div className="error-message">
                                    {errors.password}
                                </div>
                                <h5>비밀번호 확인</h5>
                                <InputBox value={values.password2}
                                          name="password2"
                                          variant="outlined"
                                          type="password"
                                          onChange={handleChange}/>
                                <div className="error-message">
                                    {errors.email}
                                </div>
                            </div>
                            <div className="signupButton">
                                <Button type="submit">시작하기</Button>
                            </div>
                        </div>
                        <Footer />
                    </form>
                </div>


            )}
        </Formik>
  );
};
export default Signup;
