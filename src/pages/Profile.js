import React, { useState, useEffect } from "react";
import ToDo from "../components/ToDo";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import img from "../img/profile.jpg";
const Profile = () => {
  const [name, setName] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [profileImageFile, setProfileImageFile] = useState();
  const [sex, setSex] = useState("female");
  const [relation, setRelation] = useState("friend");
  const [birth, setBirth] = useState("2020-01-04");
  const [occupation, setOccupation] = useState("");
  const [location, setLocation] = useState("");
  const [hobby, setHobby] = useState("");
  const [period, setPeriod] = useState("");
  const [bornPlace, setBornPlace] = useState("");

  useEffect(() => {}, []);

  return (
    <>
      <AllDiv>
        <TopDiv>
          {/* 큰 프사 들어가는 곳! */}
          <BackImg src={require("../img/profile.jpg")} />
          <TextDiv>
            <NameText>존잘남</NameText>

            <DetailText>대학생, 서울시 성북구</DetailText>

            <StarImg src={require("../img/그룹 1581.png")} />
          </TextDiv>
        </TopDiv>

        <MiddleDiv>
          <ModifyDiv>
            <LinkDiv to="/profilemodify">
              <ModifyButton>
                <ModifyImg src={require("../img/btn_register.png")} />
              </ModifyButton>
            </LinkDiv>
          </ModifyDiv>
          {/* 작은 프사 들어가는 곳! */}
          <SmallImg src={require("../img/profile.jpg")} />
          <TabsDiv>
            <TabDiv>
              <TabOnText>정보</TabOnText>
            </TabDiv>
            <TabDiv>
              <LinkDiv to="/profiletodo">
                <TabOffText>To Do List</TabOffText>
              </LinkDiv>
            </TabDiv>
            <TabDiv>
              <LinkDiv to="/profileactive">
                <TabOffText>활동 측정</TabOffText>
              </LinkDiv>
            </TabDiv>
          </TabsDiv>
          <SelectedTab></SelectedTab>

          <CommentDiv>
            <CommentText>
              소중한 사람에 대해 기억하고,
              <br />더 알아보아요!
            </CommentText>
          </CommentDiv>
        </MiddleDiv>
        <BottomDiv>
          <BoxDiv>
            <TitleDiv>
              <TitleText>생일</TitleText>
            </TitleDiv>
            <ContentDiv>
              <ContentText>#1995.11.17</ContentText>
            </ContentDiv>
          </BoxDiv>
          <BoxDiv>
            <TitleDiv>
              <TitleText>취미</TitleText>
            </TitleDiv>
            <ContentDiv>
              <ContentText>#러닝</ContentText>
              <ContentText>#아웃도어</ContentText>
              <ContentText>#소설읽기</ContentText>
            </ContentDiv>
          </BoxDiv>
          <BoxDiv>
            <TitleDiv>
              <TitleText>서로 알고 지낸 지</TitleText>
            </TitleDiv>
            <ContentDiv>
              <ContentText>#2년째</ContentText>
            </ContentDiv>
          </BoxDiv>
          <BoxDiv>
            <TitleDiv>
              <TitleText>중요한 일정</TitleText>
            </TitleDiv>
            <ContentDiv>
              <ContentText>#결혼기념일_3월19일</ContentText>
            </ContentDiv>
          </BoxDiv>
        </BottomDiv>
      </AllDiv>
    </>
  );
};

const LinkDiv = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const AllDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;
const TopDiv = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  // background: url(${img}) no-repeat;
  background-color: blue;
  background-size: cover;
  height: 458px;
  width: 375px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
const BackImg = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 458px;
  width: 375px;
  object-fit: cover;
`;
const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  z-index: 10;
`;
const NameText = styled.div`
  height: 36px;
  font-family: Noto Sans KR;
  font-size: 24px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 28px;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
`;
const DetailText = styled.div`
  height: 24px;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 20px;
  letter-spacing: normal;
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
`;
const StarImg = styled.img`
  height: 52px;
`;

const SmallImg = styled.img`
  position: absolute;
  top: 475px;
  left: 20px;
  object-fit: cover;
  height: 66px;
  width: 66px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 10;
  box-sizing: border-box;
  border-radius: 10px;
  border: solid white 3px;
`;
const MiddleDiv = styled.div`
  //   background-color: blue;
  margin: 452px 0 0 0;
  padding: 0;
`;
const ModifyDiv = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
`;
const ModifyImg = styled.img`
  height: 50px;
  width: 375px;
  margin: 0;
  padding: 0;
`;
const ModifyButton = styled.button`
  background: none;
  border: none;
`;
const TabsDiv = styled.div`
  width: 375px;
  height: 38px;
  margin-top: 36px;
  flex-direction: row;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  border-bottom: solid 1px #e2e8ed;
`;
const TabDiv = styled.div``;
const TabOnText = styled.text`
  width: 65px;
  height: 20px;
  font-family: Noto Sans KR;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.14;
  letter-spacing: normal;
  text-align: center;
  color: #5887f9;
`;
const SelectedTab = styled.div`
  width: 65px;
  height: 3px;
  background-color: #5887f9;
  margin-left: 20px;
`;
const TabOffText = styled.text`
  width: 64px;
  height: 20px;
  font-family: Noto Sans KR;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.14;
  letter-spacing: normal;
  text-align: center;
  color: black;
`;
const CommentDiv = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  margin: 25.5px 0 23px 20px;
`;
const CommentText = styled.div`
  height: 54px;
  font-family: Noto Sans KR;
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #4c5264;
`;
const BottomDiv = styled.div`
  position: relative;
  left: -9px;
  width: 375px;
`;
const BoxDiv = styled.div`
  width: 375px;
  height: 126.3px;
  padding-left: 32px;
  border-top: solid 0.3px #bcc5d3;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const TitleDiv = styled.div`
  margin-bottom: 23px;
`;
const TitleText = styled.text`
  font-family: Noto Sans KR;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: normal;
  text-align: left;
  color: #5574f7;
`;
const ContentDiv = styled.div``;
const ContentText = styled.text`
  background-color: #5574f7;
  width: 26px;
  padding: 8px 11px 8px 11px;
  margin-right: 10px;
  border-radius: 6px;
  font-family: Noto Sans KR;
  font-size: 10px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
`;

export default Profile;
