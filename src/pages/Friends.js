import React, { useState } from "react";
import TabFriends from "../components/TabFriends";
import Title from "../components/Title";
import FriendStory from "../components/FriendStory";
import ToDo from "../components/ToDo";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const Friends = () => {
  const [open, setOpen] = useState(false);

  const onToggle = () => setOpen(!open);
  return (
    <>
      <HomeDiv>
        <Title name="친구목록" />
        <AllDiv>
          <FriendsDiv>
            <FriendDiv>
              <LeftDiv>
                <PhotoImg src={require("../img/yang.jpg")} />
              </LeftDiv>
              <CenterDiv>
                <NameText>김민철</NameText>
                <br />
                <RelationText>친구</RelationText>
                <br />
                <DayText>연락한지 2일째</DayText>
                <br />
              </CenterDiv>
              <RightDiv>
                <LinkDiv to="/profile">
                  <Button>
                    <img src={require("../img/ic_right.png")} />
                  </Button>
                </LinkDiv>
              </RightDiv>
            </FriendDiv>
            <FriendDiv>
              <LeftDiv>
                <PhotoImg src={require("../img/yang.jpg")} />
              </LeftDiv>
              <CenterDiv>
                <NameText>김민철</NameText>
                <br />
                <RelationText>친구</RelationText>
                <br />
                <DayText>연락한지 2일째</DayText>
                <br />
              </CenterDiv>
              <RightDiv>
                <LinkDiv to="/friend">
                  <Button>
                    <img src={require("../img/ic_right.png")} />
                  </Button>
                </LinkDiv>
              </RightDiv>
            </FriendDiv>

            <FriendDiv>
              <NewDiv>
                <LinkDiv to="/input/1">
                  <ButtonDIv>
                    <AddButton>
                      <PhotoImg src={require("../img/img_addfriend.png")} />
                    </AddButton>
                  </ButtonDIv>
                </LinkDiv>
                <TextDiv>
                  <AddText>친구를 등록하세요.</AddText>
                </TextDiv>
              </NewDiv>
            </FriendDiv>
            <FriendDiv>
              <NewDiv>
                <LinkDiv to="/input/1">
                  <ButtonDIv>
                    <AddButton>
                      <PhotoImg src={require("../img/img_addfriend.png")} />
                    </AddButton>
                  </ButtonDIv>
                </LinkDiv>
                <TextDiv>
                  <AddText>친구를 등록하세요.</AddText>
                </TextDiv>
              </NewDiv>
            </FriendDiv>
            <FriendDiv>
              <NewDiv>
                <LinkDiv to="/input/1">
                  <ButtonDIv>
                    <AddButton>
                      <PhotoImg src={require("../img/img_addfriend.png")} />
                    </AddButton>
                  </ButtonDIv>
                </LinkDiv>
                <TextDiv>
                  <AddText>친구를 등록하세요.</AddText>
                </TextDiv>
              </NewDiv>
            </FriendDiv>
          </FriendsDiv>
        </AllDiv>
        <TabFriends />
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

const FriendsDiv = styled.div`
  display: block;
  justify-content: center;
  margin-top: 10px;
  margin-left: 20px;
`;
const FriendDiv = styled.div`
  width: 315px;
  height: 99px;
  flex:1
  object-fit: contain;
  box-shadow: 0 5px 10px 0 rgba(80, 92, 98, 0.13);
  background-color: #ffffff;
  margin-bottom: 10px;
  display: flex;
  border-radius:10px;
`;
const LeftDiv = styled.div`
  width: 70px;
  height: 99px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PhotoImg = styled.img`
  width: 61.4px;
  height: 61.4px;
  border-radius: 50%;
`;
const CenterDiv = styled.div`
  width: 210px;
  height: 99px;
  display: block;
  padding-top: 15px;
  padding-left: 5px;
`;
const NameText = styled.text`
  width: 44px;
  height: 24px;
  font-family: NotoSansCJKkr;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.75;
  letter-spacing: -0.38px;
  text-align: center;
  color: #000000;
`;
const RelationText = styled.text`
  width: 26px;
  height: 20px;
  font-family: NotoSansCJKkr;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.86;
  letter-spacing: -0.34px;
  text-align: center;
  color: #000000;
`;
const DayText = styled.text`
  width: 90px;
  height: 20px;
  font-size: 16px;
  object-fit: contain;
  color: white;
  background-color: #5574f7;
  border-radius: 6px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
`;
const RightDiv = styled.div`
  width: 35px;
  height: 99px;
`;
const Button = styled.button`
  width: 35px;
  height: 99px;
  background: none;
  border: none;
`;

const NewDiv = styled.div`
width: 315px;
height: 99px;
flex:1
object-fit: contain;
box-shadow: 0 5px 10px 0 rgba(80, 92, 98, 0.13);
background-color: #ffffff;
margin-bottom: 10px;
display: flex;
border-radius:10px;`;
const ButtonDIv = styled.div`
  width: 70px;
  height: 99px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const AddButton = styled.button`
  width: 70px;
  height: 99px;
  background: none;
  border: none;
`;
const TextDiv = styled.div`
  width: 245px;
  height: 99px;
  display: flex;
  align-items: center;
  padding-left: 5px;
`;
const AddText = styled.text`
  width: 150px;
  height: 24px;
  font-family: NotoSansCJKkr;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.75;
  letter-spacing: -0.38px;
  text-align: center;
  color: #bcc5d3;
`;

export default Friends;
