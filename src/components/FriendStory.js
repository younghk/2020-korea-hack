import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

const FriendStory = ({ name, img }) => {
  return (
    <>
      <StorysDiv>
        <StoryDiv>
          <ImgDiv>
            {/* <BorderDiv> */}
            <PhotoImg src={require("../img/yang.jpg")}></PhotoImg>
            {/* </BorderDiv> */}
          </ImgDiv>
          <NameDiv>
            <NameText>김민철</NameText>
          </NameDiv>
        </StoryDiv>
        <StoryDiv>
          <ImgDiv>
            {/* <BorderDiv> */}
            <PhotoImg src={require("../img/yang.jpg")}></PhotoImg>
            {/* </BorderDiv> */}
          </ImgDiv>
          <NameDiv>
            <NameText>김민철</NameText>
          </NameDiv>
        </StoryDiv>
        <StoryDiv>
          <ImgDiv>
            {/* <BorderDiv> */}
            <PhotoImg src={require("../img/yang.jpg")}></PhotoImg>
            {/* </BorderDiv> */}
          </ImgDiv>
          <NameDiv>
            <NameText>김민철</NameText>
          </NameDiv>
        </StoryDiv>
        <StoryDiv>
          <ImgDiv>
            {/* <BorderDiv> */}
            <PhotoImg src={require("../img/yang.jpg")}></PhotoImg>
            {/* </BorderDiv> */}
          </ImgDiv>
          <NameDiv>
            <NameText>김민철</NameText>
          </NameDiv>
        </StoryDiv>
        <StoryDiv>
          <ImgDiv>
            {/* <BorderDiv> */}
            <PhotoImg src={require("../img/yang.jpg")}></PhotoImg>
            {/* </BorderDiv> */}
          </ImgDiv>
          <NameDiv>
            <NameText>김민철</NameText>
          </NameDiv>
        </StoryDiv>
      </StorysDiv>
    </>
  );
};

const StorysDiv = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  padding-left: 30px;
`;
const StoryDiv = styled.div`
  display: block;
  height: 80px;
  width: 60px;
  justify-content: center;
  align-items: center;
  padding: 0 5px;
`;
const ImgDiv = styled.div`
  width: 54px;
  height: 54px;
  border-radius: 50%;
  //   background-color: #5574f7;
  border: solid 3px #5574f7;
  justify-content: center;
  align-items: center;
`;
// const BorderDiv = styled.div`
//   width: 52px;
//   height: 52px;
//   border-radius: 50%;
//   backgroudn-color: green;
// `;
const PhotoImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: solid 3px gray;
`;
const NameDiv = styled.div`
  width: 50px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NameText = styled.text`
  width: 100%;
  height: 100%;
  font-family: NotoSansCJKkr;
  font-size: 9px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.56;
  letter-spacing: 0.45px;
  text-align: center;
  color: #1b1c20;
`;

export default FriendStory;
