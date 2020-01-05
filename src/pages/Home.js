import React, { useEffect, useState } from "react";
import TabHome from "../components/TabHome";
import Title from "../components/Title";
import FriendStory from "../components/FriendStory";
import ToDo from "../components/ToDo";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Home = () => {
  const [todos, setTodos] = useState();
  const [tips, setTips] = useState();

  return (
    <>
      <HomeDiv>
        <Title name="Home" />
        <AllDiv>
          <BoxDiv1>
            <TextDiv>
              <LinkDiv to="/friends">
                <TitleText>Your Friends</TitleText>
              </LinkDiv>
            </TextDiv>
            <ContentDiv>
              <FriendStory />
            </ContentDiv>
          </BoxDiv1>
          <BoxDiv2>
            <TextDiv>
              <TitleText>To Do List</TitleText>
              <LinkDiv to="/todolist">
                <SubText>전체보기</SubText>
              </LinkDiv>
            </TextDiv>
            <ContentDiv>
              <ToDo />
              <ToDo />
            </ContentDiv>
          </BoxDiv2>
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
  height: 812px;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`;
const AllDiv = styled.div`
  margin-top: 100px;
  width: 375px;
  background-color: #f4f4f4;
  padding: 0;
`;
const BoxDiv1 = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: white;
  border-bottom-left-radius: 30px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
`;
const BoxDiv2 = styled.div`
  width: 100%;
  height: 644px;
  margin: 8px 0 0 0;
  padding: 0;
  background-color: white;
  border-top-left-radius: 30px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
`;
const TextDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;

  height: 47px;

  // background-color: blue;
`;
const TitleText = styled.div`
  padding: 20px 0px 0px 30px;

  font-family: Noto Sans KR;
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
const SubText = styled.div`
  padding-left: 185px;
  margin-top: 42px;
  width: 44px;
  height: 42px;
  font-family: Noto Sans KR;
  font-size: 9px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.94;
  letter-spacing: normal;
  text-align: right;
  color: #5887f9;
`;
const ContentDiv = styled.div`
  width: 100%;
  height: 85px;
`;
export default Home;
