import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

import { Link } from "react-router-dom";

const Title = ({ name }) => {
  return (
    <>
      <TitleDiv>
        <TextDiv>
          <TitleText>{name}</TitleText>
        </TextDiv>
        <ButtonDiv>
          <LinkDiv to="/notice">
            <Button>
              <ButtonImg src={require("../img/ic_bell.png")} alt="img" />
            </Button>
          </LinkDiv>
        </ButtonDiv>
      </TitleDiv>
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

const TitleDiv = styled.div`
  position: absolute;
  width: 375px;
  height: 100px;
  display: flex;
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
  border: none;
  top: 0;
  margin: 0;
  padding: 0;
`;

const TextDiv = styled.div`
  position: absolute;
  width: 150px;
  height: 29px;
  font-family: Noto Sans KR;
  font-size: 20px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.3;
  letter-spacing: normal;
  text-align: center;
  color: #5887f9;
`;

const TitleText = styled.text`
  width: 84px;
  height: 29px;
  font-family: Noto Sans KR;
  font-size: 20px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.3;
  letter-spacing: normal;
  text-align: center;
  color: #5887f9;
`;

const ButtonDiv = styled.div`
  width: 30px;
  height: 30px;
  display: float;
  padding-left: 300px;
  background: none;
`;
const Button = styled.button`
  width: 35px;
  height: 35px;
  background: none;
  border: none;
`;

const ButtonImg = styled.img``;

export default Title;
