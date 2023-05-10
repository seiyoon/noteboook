import styled from "styled-components";
import { COLOR } from "../styles/color";
import { useNavigate } from "react-router-dom";

import { dbService } from "../firebase";

export const NoteCard = ({ postObj }) => {
  const navigate = useNavigate();
  const handlePageChange = () => {
    navigate(`/home/${postObj.id}`);
  };

  const handleDelete = async () => {
    const ok = window.confirm("삭제하시겠습니까?");
    console.log(ok);
    if (ok) {
      await dbService.doc(`notebook/${postObj.id}`).delete();
    }
  };

  return (
    <Notes>
      <div onClick={handlePageChange}>
        <h3>{postObj.week}주차</h3>
        <h4>{postObj.title}</h4>
        <h6>{postObj.subject}</h6>
      </div>
      <img
        src={require("../assets/trash.png")}
        className="trash"
        onClick={handleDelete}
      />
    </Notes>
  );
};

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
  margin-right: 30px;
  margin-bottom: 30px;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  h3 {
    margin-top: 20px;
    margin-right: 190px;
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
    color: ${COLOR.BLACK};
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
    color: ${COLOR.BLACK};
  }
  .trash {
    padding-top: 20px;
    margin-left: 220px;
    width: 25px;
  }
`;
