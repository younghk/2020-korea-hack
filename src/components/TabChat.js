import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const TabsDiv = styled.div`
  width: 100%;
  height: 85px;
  position: absolute;
  bottom: 0;
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: center;
`;

const TabDiv = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TabImg = styled.img``;

const TabChat = () => {
  return (
    <TabsDiv>
      <Link to="/Home">
        <TabDiv>
          <TabImg src={require("../img/ic_home.png")} alt="img"></TabImg>
        </TabDiv>
      </Link>
      <Link to="/input/1">
        <TabDiv>
          <TabImg src={require("../img/ic_friends.png")} alt="img"></TabImg>
        </TabDiv>
      </Link>
      <Link to="/input/2">
        <TabDiv>
          <TabImg src={require("../img/ic_chat_blue.png")} alt="img"></TabImg>
        </TabDiv>
      </Link>
      <Link to="/input/3">
        <TabDiv>
          <TabImg src={require("../img/ic_settings.png")} alt="img"></TabImg>
        </TabDiv>
      </Link>
    </TabsDiv>
  );
};

export default TabChat;
