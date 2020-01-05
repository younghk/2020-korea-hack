import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

import { Link } from "react-router-dom";

const Toggle = props => {
  const [open, setOpen] = useState(false);
  const onToggle = () => setOpen(!open);
  return (
    <>
      {/* <Img src={require("../img/패스 293@2x.png")} />
      <ToggleDiv>
        <AllDiv>
          <HeadDiv>
            <HeadText>알림</HeadText>
          </HeadDiv>
          <BoxsDiv> */}
      {!open && (
        <BoxDiv>
          <LeftDiv>
            <PhotoImg src={require("../img/profile.jpg")}></PhotoImg>
          </LeftDiv>
          <RightDiv>
            <CancleDiv>
              <CancleButton onClick={onToggle} open={open}>
                <CancleImg src={require("../img/ic_close.png")} />
              </CancleButton>
            </CancleDiv>
            <NameDiv>
              <NameText>한지원</NameText>
            </NameDiv>
            <ContentDiv>
              <ContentText>친구가 좋아할만한 공연을 확인해보세요</ContentText>
            </ContentDiv>
          </RightDiv>
        </BoxDiv>
      )}
      {/* </BoxsDiv>
        </AllDiv>
      </ToggleDiv> */}
    </>
  );
};

const ToggleDiv = styled.div`
  position: absolute;
  left: 28.5px;
  top: 117px;
  width: 317.9px;
  height: 310px;
  // background-color: red;
`;
const Img = styled.img`
  position: absolute;
  display: fixed;
  right: 2px;
  top: 77px;
`;

const AllDiv = styled.div`
  position: absolute;
  left: 0;
  display: block;
  width: 317.9px;
  height: 300px;
  object-fit: contain;
  background-color: #ffffff;
`;

const HeadDiv = styled.div`
  width: 317.9px;
  height: 49.7px;
  object-fit: contain;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HeadText = styled.text`
  width: 40px;
  height: 24px;
  font-family: NotoSansCJKkr;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.75;
  letter-spacing: normal;
  text-align: center;
  color: #4d4f5c;
`;
const BoxsDiv = styled.div``;
const BoxDiv = styled.div`
  width: 317.8px;
  height: 60px;
  object-fit: contain;
  background-color: rgba(96, 195, 255, 0.13);
  display: flex;
`;
const LeftDiv = styled.div`
  width: 47px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PhotoImg = styled.img`
  width: 31px;
  height: 31px;
  border-radius: 50%;
`;
const RightDiv = styled.div`
  width: 270.8px;
  height: 60px;
  display: block;
  padding-top: 11px;
`;
const CancleDiv = styled.div`
  display: flex;
  justify-content: flex-end;

  top: 60px;
`;

const CancleButton = styled.button`
  background: none;
  border: none;
  width: 100%;
  height: 100%;
`;

const CancleImg = styled.img`
  position: absolute;
  right: 10px;
`;
const NameDiv = styled.div`
  position: absolute;
  left: 52px;
  padding-bottom: 3px;
`;
const NameText = styled.text`
  width: 275px;
  height: 167px;
  font-family: NotoSansCJKkr;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
  text-align: left;
  color: var(--slate);
`;
const ContentDiv = styled.div`
  position: absolute;
  left: 52px;
  padding-top: 22px;
`;
const ContentText = styled.text`
  width: 192px;
  height: 15px;
  opacity: 0.5;
  font-family: NotoSansCJKkr;
  font-size: 10px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.3;
  letter-spacing: normal;
  text-align: left;
  color: #43425d;
`;

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
  font-family: NotoSansCJKkr;
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
  font-family: NotoSansCJKkr;
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

export default Toggle;
