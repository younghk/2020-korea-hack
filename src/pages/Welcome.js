import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const ContainerDiv = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  display: block;
  justify-content: center;
`;
const TopDiv = styled.div`
  width: 100%;
  height: 530px;
  margin: 0;
  padding: 0;
`;
const BottomDiv = styled.div`
  width: 100%;
  height: 300px;
  display: block;
  background-color: red;
  jutify-content: center;
  align-items: center;
`;

const MainDiv = styled.div`
  width: 178.8px;
  height: 32.5px;
  jutify-content: center;
  align-items: center;
`;
const MainText = styled.text`
  width: 178.8px;
  height: 32.5px;
  display: block;
`;
const SubDiv = styled.div`
  width: 272px;
  height: 24px;
  display: flex;
  jutify-content: center;
  align-items: center;
`;
const SubText = styled.text`
  width: 272px;
  height: 24px;
  font-family: NotoSansCJKkr;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: -0.16px;
  text-align: center;
  color: #000000;
`;
const Button = styled.button`
  width: 315px;
  height: 50px;
  border: none;
  background: none;
`;

const Welcome = () => {
  return (
    <ContainerDiv>
      <TopDiv>
        <img src={require("../img/img.png")} alt="img" />
      </TopDiv>
      <BottomDiv>
        <MainDiv>
          <MainText>Welcome</MainText>
        </MainDiv>
        <SubDiv>
          <SubText>당신은 친구에 대해 얼마나 알고 계신가요?</SubText>
        </SubDiv>

        <Link to="/input/1">
          <Button>
            <img src={require("../img/button.png")} alt="img" />
          </Button>
        </Link>
      </BottomDiv>
    </ContainerDiv>
  );
};

export default Welcome;
