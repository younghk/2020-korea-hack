import React, { useState } from "react";
import ToDo from "../components/ToDo";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import img from "../img/profile.jpg";
const Profile = () => {
  return (
    <>
      <AllDiv>
        <TopDiv>
          <TextDiv>
            <NameText>존잘남</NameText>
            <br />
            <DetailText>대학생, 서울시 성북구</DetailText>
            <br />
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
          <ComentDiv>
            <ComentText>소중한 사람에 대해 기억하고,</ComentText>
            <br />
            <ComentText>더 알아보아요!</ComentText>
          </ComentDiv>
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
              <TitleText>생일</TitleText>
            </TitleDiv>
            <ContentDiv>
              <ContentText>#1995.11.17</ContentText>
            </ContentDiv>
          </BoxDiv>
          <BoxDiv>
            <TitleDiv>
              <TitleText>생일</TitleText>
            </TitleDiv>
            <ContentDiv>
              <ContentText>#1995.11.17</ContentText>
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
  display: block;
  width: 100%;
  height: 850px;
  //   background-color: red;
  margin: 0;
  padding: 0;
  justify-content: center;
`;
const TopDiv = styled.div`
  background: url(${img}) no-repeat;
  background-size: 100%;
  width: 100%;
  height: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TextDiv = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
`;
const NameText = styled.text`
  width: 66px;
  height: 36px;
  font-family: NotoSansCJKkr;
  font-size: 24px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
`;
const DetailText = styled.text`
  width: 144px;
  height: 24px;
  font-family: NotoSansCJKkr;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
`;
const StarImg = styled.img``;
const MiddleDiv = styled.div`
  height: 178px;
  width: 100%;
  //   background-color: blue;
  margin: 0;
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
  width: 100%;
  margin: 0;
  padding: 0;
`;
const ModifyButton = styled.button`
  background: none;
  border: none;
`;
const TabsDiv = styled.div`
  width: 375px;
  height: 74px;
  background-color: #ffffff;
  flex-direction: row;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const TabDiv = styled.div``;
const TabOnText = styled.text`
  width: 64px;
  height: 20px;
  font-family: NotoSansCJKkr;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.14;
  letter-spacing: normal;
  text-align: center;
  color: #5887f9;
`;
const TabOffText = styled.text`
  width: 64px;
  height: 20px;
  font-family: NotoSansCJKkr;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.14;
  letter-spacing: normal;
  text-align: center;
  color: black;
`;
const ComentDiv = styled.div`
  width: 375px;
  height: 111px;
  display: block;
  justify-content: center;
  align-items: center;
`;
const ComentText = styled.text`
  width: 375px;
  height: 111px;
  font-family: NotoSansCJKkr;
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: var(--slate);
`;
const BottomDiv = styled.div`
  height: 50%;
  width: 100%;
`;
const BoxDiv = styled.div`
  width: 375px;
  height: 126.3px;
  border: solid 0.3px #bcc5d3;
  background-color: #ffffff;
  padding-left: 32px;
  border: solid 0.3px #bcc5d3;
  display: flex
  flex-direction: column;
  align-items: space-around;
`;
const TitleDiv = styled.div``;
const TitleText = styled.text`
  width: 26px;
  height: 20px;
  font-family: NotoSansCJKkr;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: normal;
  text-align: left;
  color: #5574f7;
`;
const ContentDiv = styled.div`
  width: 75px;
  height: 30px;
  object-fit: contain;
`;
const ContentText = styled.text`
  width: 26px;
  height: 15px;
  font-family: NotoSansCJKkr;
  font-size: 10px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  background-color: #5574f7;
`;

export default Profile;
