import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
// import Input from "./pages/Input";
// import Settings from "./pages/Settings";

const TabHome = () => {
  return (
    <TabsDiv>
      <Link to="/">
        <TabDiv>
          <TabImg src={require("../img/ic_home_blue.png")} alt="img"></TabImg>
        </TabDiv>
      </Link>
      <Link to="/friends">
        <TabDiv>
          <TabImg src={require("../img/ic_friends.png")} alt="img"></TabImg>
        </TabDiv>
      </Link>
      <Link to="/message">
        <TabDiv>
          <TabImg src={require("../img/ic_chat.png")} alt="img"></TabImg>
        </TabDiv>
      </Link>
      <Link to="/settings">
        <TabDiv>
          <TabImg src={require("../img/ic_settings.png")} alt="img"></TabImg>
        </TabDiv>
      </Link>
    </TabsDiv>
  );
};

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
  background-color: white;
`;

const TabDiv = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TabImg = styled.img``;

export default TabHome;
