import styled from "styled-components";
import { COLOR } from "../styles/color";

export const CategoryModal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <StModal className={open ? "openModal modal" : "modal"}>
      {open ? (
        <Modal>
          <header>{header}</header>
          <h5>{props.children}</h5>
          <button className="close" onClick={close}>
            닫기
          </button>
        </Modal>
      ) : null}
    </StModal>
  );
};

const StModal = styled.div``;
const Modal = styled.div`
  width: 300px;
  height: 350px;
  text-align: center;
  background-color: ${COLOR.WHITE};
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  padding: 32px 16px 16px 16px;
  font-size: 20px;
  font-weight: 500;
  h5 {
    margin-top: 20px;
  }
  .close {
    font-size: 15px;
    font-weight: 600;
    border-radius: 10px;
    border: none;
    width: 50px;
    height: 30px;
    margin-top: 50px;
    background-color: ${COLOR.MAIN_LIGHT};
    color: ${COLOR.BLACK};
  }
`;
