import styled from "styled-components";
import { COLOR } from "../styles/color";

import { Header2 } from "../components/Header2";
import { Footer } from "../components/Footer";
import { GoBackButton } from "../components/GoBackButton";

const Post = () => {
  return (
    <StPilgi>
      <Header2 />
      <StContent>
        <ContentTitle>
          <GoBack>
            <GoBackButton />
          </GoBack>
          | 필기 조회
        </ContentTitle>
        <ContentMain>
          <Week>3주차</Week>
          <Subject>웹클라이언트</Subject>
          <Title>express 서버 만들어보기</Title>
          <Content>어쩌구저쩌구 샬라샬라 부앙</Content>
        </ContentMain>
      </StContent>
      <Footer />
    </StPilgi>
  );
};
export default Post;

const StPilgi = styled.div``;
const StContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: center;
  margin-top: 130px;
  font-family: "SUITE-Regular";
`;
const ContentTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  font-size: 25px;
  font-weight: 600;
`;
const GoBack = styled.div`
  display: inline;
  margin-left: 60px;
  margin-right: 20px;
  display: flex;
`;
const ContentMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 1000px;
  margin-top: 50px;
  margin-bottom: 160px;
  background-color: ${COLOR.MAIN_REAL_LIGHT};
  padding: 30px;
  ${({ theme }) => theme.tablet`
    width: 720px;
  `};
  ${({ theme }) => theme.mobile`
    width: 450px;
  `};
`;
const Week = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 38px;
  color: ${COLOR.WHITE};
  background-color: ${COLOR.MAIN};
  border-radius: 10px;
  font-size: 20px;
  font-weight: 800;
  letter-spacing: 1.5px;
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 38px;
  margin-top: 30px;
  color: ${COLOR.DARK_GRAY};
  font-size: 20px;
  font-weight: 700;
`;
const Subject = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 38px;
  margin-top: 30px;
  color: ${COLOR.BLACK};
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 1px;
`;
const Content = styled.div`
  display: flex;
  width: 900px;
  margin-top: 30px;
  padding: 20px;
  background-color: ${COLOR.MAIN_LIGHT};
  border-radius: 10px;
  color: ${COLOR.BLACK};
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 1px;
  overflow: auto;
  ${({ theme }) => theme.tablet`
    width:620px;
  `};
  ${({ theme }) => theme.mobile`
    width: 350px;
  `};
`;
