import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const First = () => {
  return (
    <StFirst>
      <Header />
      <StContent>
        <FirstBanner>
          <Banner1
            src={require("../assets/n_banner.png")}
            className="banner1"
          />
        </FirstBanner>
        <SecondBanner></SecondBanner>
      </StContent>
      <Footer />
    </StFirst>
  );
};
export default First;

const StFirst = styled.div``;
const StContent = styled.div`
  margin-top: 70px;
`;
const FirstBanner = styled.div`
  .banner1 {
    width: 100%;
  }
`;
const Banner1 = styled.img``;
const SecondBanner = styled.div``;
