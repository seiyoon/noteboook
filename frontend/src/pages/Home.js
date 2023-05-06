import React, { useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { COLOR } from "../styles/color";

import { Header2 } from "../components/Header2";
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

  const [isVisible, setIsVisible] = useState(true); // 카테고리 삭제할 때 쓰이는 변수
  const handleHideClick = () => {
    setIsVisible(false);
  };

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
    setNewColor("#8fc5ff");
  };
  function handleDeleteCategory(category) {
    setCategories(categories.filter((c) => c !== category));
  }

  const handleCloseModal = () => {
    setShowModal(false);
    setNewCategory("");
    setNewColor("");
  };

  const notes = new Array(10).fill("").map((_, index) => (
    <Notes>
      <h3>3주차</h3>
      <h4>객지분</h4>
      <h6>express 서버 사용</h6>
      <p>2023-05-05</p>
    </Notes>
  ));

  return (
    <StHome>
      <Header2 />
      <StContent>
        <ContentTitle>| 홈</ContentTitle>
        {modalOpen && (
          <>
            <div className="overlay"></div>
            <div className="modal">
              {/* 모달창 내용 */}

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
                <p>배경색 선택</p>
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
            </div>
          </>
        )}
        <ContentMain>
          <NoteCategory>
            {categories.map((item, index) => (
              <div
                className="cg"
                key={index}
                style={{ backgroundColor: item.color }}
              >
                {item.name}
                <XButton onClick={() => handleDeleteCategory(item)}>
                  <img
                    src={require("../assets/x.png")}
                    className="x"
                    alt="mainLogo"
                  />
                </XButton>
              </div>
            ))}
            <CategoryButton>
              <GrayButton onClick={handleClickGrayButton}>
                카테고리 추가
              </GrayButton>
            </CategoryButton>
          </NoteCategory>
          <NoteList>{notes}</NoteList>
        </ContentMain>
      </StContent>
      <Footer />
      <Link to="/home/write">
        <FloatingButton />
      </Link>
    </StHome>
  );
};

export default Home;

const StHome = styled.div``;
const StContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 130px;
  margin-left: 40px;
  margin-right: 40px;
  font-family: "SUITE-Regular";
  ${({ theme }) => theme.tablet`
    margin-left: 20px;
    margin-right: 20px;
`};
  .modal {
    display: block;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* 검정 불투명 색 */
  }
  p {
    font-size: 19px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .categoryText {
    margin-bottom: 20px;
    width: 200px;
    height: 35px;
    font-size: 15px;
    font-weight: 500;
    border-radius: 10px;
    border: 2px solid ${COLOR.MAIN};
    padding-left: 10px;
    :focus {
      outline: 0;
      border: 2px solid ${COLOR.MAIN_LIGHT};
      background-color: ${COLOR.MAIN_LIGHT};
    }
  }
  .categoryColor {
    margin-right: 30px;
    width: 60px;
    height: 35px;
    border-radius: 5px;
  }
  .categoryAdd {
    border-radius: 10px;
    border: none;
    width: 70px;
    height: 25px;
    background-color: ${COLOR.LIGHT_GRAY};
  }
`;
const ContentTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-left: 40px;
  margin-bottom: 50px;
  font-size: 25px;
  font-weight: 500;
`;
const ContentMain = styled.div`
  width: 100%;
  margin-bottom: 45px;
`;
const NoteCategory = styled.div`
  display: flex;
  flex-direction: column;
  float: left;
  align-items: center;
  padding: 5px;
  margin-right: 40px;
  width: 210px;
  height: 650px;
  border-radius: 10px;
  background-color: ${COLOR.MAIN_REAL_LIGHT};
  overflow: auto;
  ${({ theme }) => theme.tablet`
    margin-right: 20px;
`};

  .cg {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 180px;
    height: 55px;
    font-size: 20px;
    padding: 15px;
    padding-right: 40px;
    margin: 7px;
    background-color: #8fc5ff;
    border-radius: 10px;
  }
`;
const XButton = styled.button`
  position: absolute;
  margin-left: 145px;
  border: none;
  border-radius: 5px;
  padding: 4px 4px;
  .x {
    display: flex;
    align-items: center;
    width: 10px;
    height: 10px;
  }
`;
const CategoryButton = styled.div`
  display: block;
  justify-content: center;
  margin-top: 7px;
  margin-bottom: 7px;
`;
const NoteList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: auto;
  height: 650px;
  padding-top: 5px;
  padding-left: 5px;
  overflow: auto;
  }
`;
const Notes = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 200px;
  background-color: ${COLOR.WHITE};
  font-size: 2rem;
  margin-right: 3%;
  margin-bottom: 3%;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  ${({ theme }) => theme.tablet`
  margin-right: 20px;
  margin-bottom: 20px;
  `};
  h3 {
    width: 100%;
    text-align: left;
    margin-top: 20px;
    margin-left: 40px;
    font-weight: 700;
    font-size: 23px;
    letter-spacing: 1px;
    color: ${COLOR.MAIN};
  }
  h4 {
    padding-top: 20px;
    font-weight: 600;
    font-size: 22px;
    letter-spacing: 0.5px;
  }
  h6 {
    padding-top: 25px;
    font-weight: 500;
    font-size: 17px;
    color: ${COLOR.DARK_GRAY};
  }
  p {
    width: 100%;
    text-align: right;
    padding-top: 25px;
    padding-right: 20px;
    font-weight: 500;
    font-size: 15px;
  }
`;
