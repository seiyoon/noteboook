import React from "react";
import { Link } from "react-router-dom";

import "../css/Header.css";

export const Header = () => {
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
        <Link to="/star">
          <img
            src={require("../assets/star.png")}
            className="starIcon"
            alt="star"
          />
        </Link>
      </div>
    </div>
  );
};

// star 는 로그인 해야만 보이게 바꾸기!!!
