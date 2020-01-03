import React from "react";
import TabHome from "../components/TabHome";
import Title from "../components/Title";
import FriendStory from "../components/FriendStory";
import ToDo from "../components/ToDo";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <HomeDiv>
        <Title name="Hot Five" />
        <AllDiv>
          <BoxDiv>
            <TextDiv>
              <LinkDiv to="/friends">
                <TitleText>Your Friends</TitleText>
              </LinkDiv>
            </TextDiv>
            <ContentDiv>
              <FriendStory />
            </ContentDiv>
          </BoxDiv>
          <BoxDiv>
            <TextDiv>
              <TitleText>To Do List</TitleText>
              <LinkDiv to="/todolist">
                <SubText>전체보기</SubText>
              </LinkDiv>
            </TextDiv>
            <ContentDiv>
              <ToDo />
            </ContentDiv>
          </BoxDiv>
        </AllDiv>
        <TabHome />
      </HomeDiv>
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

const HomeDiv = styled.div`
  display: flex;
  width: 100%;
  height: 850px;
  // background-color: red;
  margin: 0;
  padding: 0;
`;
const AllDiv = styled.div`
  margin-top: 100px;
  width: 100%;
  background-color: #f4f4f4;
  padding: 0;
`;
const BoxDiv = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
`;
const TextDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 47px;
  padding-left: 30px;
  // background-color: blue;
`;
const TitleText = styled.text`
  top: 30px;
  // padding-left: 30px;
  // padding-top: 20px;
  width: 100%;
  height: 100%;
  font-family: NotoSansCJKkr;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.94;
  letter-spacing: normal;
  text-align: left;
  color: #5574f7;
  margin: 0;
`;
const SubText = styled.text`
  // top: 30px;
  padding-right: 30px;
  padding-top: 20px;
  width: 100%;
  height: 100%;
  font-family: NotoSansCJKkr;
  font-size: 9px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.94;
  letter-spacing: normal;
  text-align: right;
  color: #5887f9;
  margin: 0;
`;
const ContentDiv = styled.div`
  width: 100%;
  height: 85px;
`;
export default Home;
