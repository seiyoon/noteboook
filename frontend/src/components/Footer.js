import React from "react";
import { Link } from "react-router-dom";

import "../css/Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="img">
        <div className="logo">
          <img
            src={require("../assets/logo.png")}
            className="logoIcon"
            alt="logo"
          />
        </div>
        <div className="mainLogo">
          <img
            src={require("../assets/mainLogo.png")}
            className="mainLogoIcon"
            alt="mainLogo"
          />
        </div>
      </div>
      <div className="text">
        <div className="github">
          <Link to="https://github.com/seiyoon" target="_blank">
            <img
              src={require("../assets/github.png")}
              className="githubIcon"
              alt="github"
            ></img>
          </Link>
        </div>
        <div className="made">
          <p>by.seiyoon</p>
        </div>
      </div>
    </div>
  );
};
