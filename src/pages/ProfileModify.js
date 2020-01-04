import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import TabFriends from "../components/TabFriends";

import axios from 'axios'

const ProfileModify = () => {

  const [name, setName] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [profileImageFile, setProfileImageFile] = useState();
  const [sex, setSex] = useState('female');
  const [relation, setRelation] = useState('friend');
  const [birth, setBirth] = useState('2020-01-04');
  const [occupation, setOccupation] = useState('');
  const [location, setLocation] = useState('');
  const [hobby, setHobby] = useState('');
  const [period, setPeriod] = useState('');
  const [bornPlace, setBornPlace] = useState('');

  useEffect(() => {
    const apiURL = 'http://localhost:3001/api/friends/'
  })

  const handleChange = (event) => {
    setName(event.target.value)
  }

  const handleChangeSex = (event) => {
    setSex({sex: event.target.value})
  }

  const handleFileInput = (event) => {
    setProfileImageFile(event.target.files[0])
  }

  const handlePost = () => {
    var formData = new FormData();
    formData.append('file', profileImageFile);

    return axios.post("http://localhost:3001/api/test/file", formData).then(res => {
      alert(res)
    }).catch(err => {
      alert(err)
    })
  }

  const handleChangeRelation = (event) => {
    setRelation(event.target.value)
  }

  const handleChangeBirth = (event) => {
    setBirth(event.target.value)
  }

  const handleChangeOccupation = (event) => {
    setOccupation(event.target.value)
  }

  const handleChangeLocation = (event) => {
    setLocation(event.target.value)
  }

  const handleChangeHobby = (event) => {
    setHobby(event.target.value)
  }

  const handleChangeBornPlace = (event) => {
    setBornPlace(event.target.value)
  }
  
  const handleChangePeriod = (event) => {
    setPeriod(event.target.value)
  }


  return (
    <>
      <AllDiv>
        <TopDiv>
          <TopText>정보 추가/수정</TopText>
        </TopDiv>
        <InformationsDiv>
          <InformationDiv>
            <TitleText>이름</TitleText>
            <br />
            <Textarea value={name} onChange={handleChange}></Textarea>
          </InformationDiv>
          <InformationDiv>
            <TitleText>성별</TitleText>
            <br />
            <ContentText>여자</ContentText>
          </InformationDiv>
          <InformationDiv>
            <TitleText>관계</TitleText>
            <br />
            <ContentText>친구</ContentText>
          </InformationDiv>
          <InformationDiv>
            <TitleText>직업</TitleText>
            <br />
            <ContentText>대학생</ContentText>
          </InformationDiv>
          <InformationDiv>
            <TitleText>거주지역</TitleText>
            <br />
            <ContentText>서울시 성북구</ContentText>
          </InformationDiv>
          <InformationDiv>
            <TitleText>취미</TitleText>
            <br />
            <ContentText>러닝</ContentText>
          </InformationDiv>
          <InformationDiv>
            <TitleText>출신</TitleText>
            <br />
            <ContentText>경기도 고양시</ContentText>
          </InformationDiv>
          <InformationDiv>
            <TitleText>서로 알고 지낸 시간</TitleText>
            <br />
            <ContentText>2년</ContentText>
          </InformationDiv>
        </InformationsDiv>
        <SaveButton>
          <SaveImg src={require("../img/btn_save.png")} />
        </SaveButton>
        <TabFriends />
      </AllDiv>
    </>
  );
};

const AllDiv = styled.div`
  left: 0;
  position: absolute;
  width: 375px;
  height: 100%;
  display: block;
  display-flex: row;
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

const TopDiv = styled.div`
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

const TopText = styled.text`
  width: 200px;
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

const InformationsDiv = styled.div`
  display: block;
  width: 100%;
  height: 530px;
  margin-top: 100px;
  margin-bottom: 10px;
`;
const InformationDiv = styled.div`
  display: block;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 300px;
  height: 50px;
  margin-left: 30px;
  margin-bottom: 10px;
  border-bottom: solid 0.3px #bcc5d3;
`;
const TitleText = styled.text`
  width: 43px;
  height: 18px;
  font-family: NotoSansCJKkr;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: left;
  color: #bcc5d3;
`;
const ContentText = styled.text`
  width: 125px;
  height: 24px;
  font-family: NotoSansCJKkr;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: left;
  color: var(--slate);
`;
const SaveButton = styled.button`
  background: none;
  border: none;
  width: 375px;
`;
const SaveImg = styled.img`
  width: 375px;
  position: absolute;
  left: 0;
`;

const Textarea = styled.textarea`
  width: 255px;
  height: 18px;
  margin-top: 5.5px;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom: 1.3px solid #e4e4e4;
  font-family: NotoSansCJKkr;
  font-size: 12px;
  line-height: 18px;
  color: black;
  ::placeholder {
    color: #ededed;
  }
  resize: none;
  outline: none;
`

export default ProfileModify;
