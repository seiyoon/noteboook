import React, { useState } from "react";
import "../css/Home.css";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { GrayButton } from "../components/Button";
import FloatingButton from "../components/FloatingButton";
import { Link } from "react-router-dom";

const Home = () => {
  const [categories, setCategories] = useState([]);

  const handleClickGrayButton = () => {
    setCategories((prevList) => [...prevList, "카테고리 추가"]);
  };

  const notes = new Array(10).fill("").map((_, index) => (
    <div className="notes" key={index}>
      Item {index + 1}
    </div>
  ));

  return (
    <div className="container">
      <Header />
      <div className="homeMain">
        <h3>sese의 전체 필기</h3>
        <div className="line"></div>
        <div className="homeButton">
          <GrayButton onClick={handleClickGrayButton}>카테고리 추가</GrayButton>
        </div>
        <div className="subMain">
          <div className="category">
            {categories.map((item, index) => (
              <div className="cg" key={index}>
                {item}
              </div>
            ))}
          </div>
          <div className="list">{notes}</div>
        </div>
      </div>
      <Footer />
      <Link to="/home/write">
        <FloatingButton />
      </Link>
    </div>
  );
};
export default Home;
