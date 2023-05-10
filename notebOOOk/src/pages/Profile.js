import styled from "styled-components";
import { COLOR } from "../styles/color";

import { Header2 } from "../components/Header2";
import { Footer } from "../components/Footer";
import { GoBackButton } from "../components/GoBackButton";

const Profile = () => {
  return (
    <StProfile>
      <Header2 />
      <StContent>
        <ContentTitle>
          <GoBack>
            <GoBackButton />
          </GoBack>
          | 프로필
        </ContentTitle>
        <ContentMain>
          <ProfileList>
            <Boxes>
              <h3>내 정보</h3>
            </Boxes>
            <Boxes>
              <h3>요금제</h3>
              <h4>무료 요금제 사용중</h4>
              <p>
                요금제를 바꾸시려면
                <br /> 이 곳을 클릭하세요
              </p>
            </Boxes>
            <Boxes>
              <h3>설정</h3>
              <h4>다크모드</h4>
            </Boxes>
          </ProfileList>
        </ContentMain>
      </StContent>
      <Footer />
    </StProfile>
  );
};
export default Profile;

const StProfile = styled.div``;
const StContent = styled.div`
  display: flex;
  flex-direction: column;
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
  width: 100%;
  margin-top: 60px;
  margin-bottom: 45px;
`;
const ProfileList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: auto;
  height: 430px;
  padding-top: 5px;
  padding-left: 5px;
  ${({ theme }) => theme.tablet`
  height: 830px;
  `};
  ${({ theme }) => theme.mobile`
  height: 1250px;
  `};
`;
const Boxes = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  width: 300px;
  height: 400px;
  background-color: ${COLOR.WHITE};
  font-size: 2rem;
  padding: 20px;
  margin-right: 50px;
  margin-bottom: 30px;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  h3 {
    text-align: center;
    margin-top: 80px;
    font-weight: 700;
    font-size: 25px;
    letter-spacing: 0.8px;
    color: ${COLOR.MAIN};
  }
  h4 {
    margin-top: 50px;
    padding-top: 20px;
    font-weight: 600;
    font-size: 22px;
    color: ${COLOR.BLACK};
  }
  h5 {
    margin-top: 20px;
    padding-top: 20px;
    font-weight: 600;
    font-size: 22px;
    color: ${COLOR.BLACK};
  }
  p {
    margin-top: 50px;
    font-weight: 500;
    font-size: 17px;
    line-height: 30px;
    color: ${COLOR.BLACK};
  }
`;
