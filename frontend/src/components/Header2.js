import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";

import "../css/Header.css";

export const Header = () => {
  const navigate = useNavigate();

  const [isAuth, setIsAuth] = useState(false);

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img
            src={require("../assets/mainLogoWhite.png")}
            className="logo"
            alt="mainLogo"
          />
        </Link>
      </div>
      <div className="star">
        {isAuth ? (
          <>
            <Link to="/profile">
              <img
                src={require("../assets/user.png")}
                className="starIcon"
                alt="star"
              />
            </Link>
            <Link to="#">로그아웃</Link>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

// star 는 로그인 해야만 보이게 바꾸기!!!
