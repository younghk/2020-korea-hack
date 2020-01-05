import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

import axios from "axios";

const FriendStory = ({ name, img }) => {
  const [users, setUsers] = useState([]);
  const [profile, setProfile] = useState();
  const [profileImageName, setProfileImageName] = useState([]);

  useEffect(() => {
    const apiURL = "http://localhost:3001/api/home";
    const fetchData = async () => {
      const response = await axios.get(apiURL);

      console.log(response.data.users);
      setUsers(response.data.users);
      const images = [];
      for (var i = 0; i < response.data.users.length; i++) {
        images.push(response.data.users[i].friendProfileImage);
      }
      console.log("images:", images);
      setProfileImageName(images);
    };

    fetchData();
  }, []);

  const apiBaseURL = 'http://localhost:3001/api/friends/profileimage/'

  return (
    <>
      <StorysDiv>
        {users.map((user, index) => {
          return [
            <StoryDiv>
              <ImgDiv>
                {/* <BorderDiv> */}
                <PhotoImg src={apiBaseURL + profileImageName[index]}></PhotoImg>
                {/* </BorderDiv> */}
              </ImgDiv>
              <NameDiv>
                <NameText>{user.friendName}</NameText>
              </NameDiv>
            </StoryDiv>
          ];
        })}
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
  font-family: Noto Sans KR;
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
