import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const Tab = () => {
  return (
    <AllDiv>
      <TabOnDiv>
        <TabText>정보</TabOnText>
      </TabOnDiv>
      <TabDiv>
        <TabText>To Do List</TabText>
      </TabDiv>
      <TabDiv>
        <TabText>활동 측정</TabText>
      </TabDiv>
    </AllDiv>
  );
};

const AllDiv = styled.div`
  width: 375px;
  height: 74px;
  background-color: #ffffff;
`;
const TabDiv = styled.div``;
const TabText = styled.text``;
export default Tab;
