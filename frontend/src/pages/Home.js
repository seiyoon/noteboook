import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";
import "../css/CategoryModal.css";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { GrayButton } from "../components/Button";
import FloatingButton from "../components/FloatingButton";
import { CategoryModal } from "../components/CategoryModal";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [showModal, setShowModal] = useState(false); // 모달창 열림 여부
  const [newCategory, setNewCategory] = useState(""); // 새로 추가할 카테고리 이름
  const [newColor, setNewColor] = useState("#8fc5ff"); // 새로 추가할 카테고리 색상

  const [modalOpen, setModalOpen] = useState(false);

  const handleClickGrayButton = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const handleNewCategoryChange = (e) => {
    setNewCategory(e.target.value);
  };

  const handleNewColorChange = (e) => {
    setNewColor(e.target.value);
  };

  const handleAddCategory = () => {
    // 새로운 카테고리 추가
    const newCategoryItem = { name: newCategory, color: newColor };
    setCategories((prevList) => [...prevList, newCategoryItem]);
    setShowModal(false);
    setNewCategory("");
    setNewColor("");
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setNewCategory("");
    setNewColor("");
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
        <CategoryModal
          open={modalOpen}
          close={closeModal}
          header="새로운 카테고리 추가"
        >
          <input
            className="categoryText"
            type="text"
            value={newCategory}
            onChange={handleNewCategoryChange}
            placeholder="카테고리 이름"
          />
          <p>색상</p>
          <input
            className="categoryColor"
            type="color"
            value={newColor}
            onChange={handleNewColorChange}
            placeholder="색상"
          />
          <button className="categoryAdd" onClick={handleAddCategory}>
            추가하기
          </button>
        </CategoryModal>

        <div className="subMain">
          <div className="category">
            {categories.map((item, index) => (
              <div
                className="cg"
                key={index}
                style={{ backgroundColor: item.color }}
              >
                {item.name}
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
