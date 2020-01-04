import React, { useState } from "react";
import TabFriends from "../components/TabFriends";
import Title from "../components/Title";
import FriendStory from "../components/FriendStory";
import ToDo from "../components/ToDo";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import TabChat from "../components/TabChat";

const Message = () => {
  return (
    <>
      <HomeDiv>
        {/* <Title name="Hot Five" />
        <AllDiv>
          <ToDo />
        </AllDiv> */}
        <img src={require("../img/채팅1.png")} />
        <TabChat />
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
  height: 715px;
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
export default Message;
