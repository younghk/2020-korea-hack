import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

import axios from "axios";

const ToDo = () => {
  const [todos, setTodos] = useState([]);
  const [profileImageName, setProfileImageName] = useState([]);

  const [open, setOpen] = useState(false);

  const onToggle = () => setOpen(!open);
  useEffect(() => {
    const apiURL = "http://localhost:3001/api/home";
    const fetchData = async () => {
      const response = await axios.get(apiURL);

      console.log(response.data.todos);
      setTodos(response.data.todos);

      const images = [];
      for (var i = 0; i < response.data.todos.length; i++) {
        images.push(response.data.todos[i].friendProfileImage);
      }
      console.log("images:", images);
      setProfileImageName(images);
    };

    fetchData();
  }, []);

  const apiBaseURL = 'http://localhost:3001/api/friends/profileimage/'

  return (
    <>
      <TodosDiv>
        
          {todos.map((todo, index) => {
            return [
              <TodoDiv>
                <ContentDiv>
                  <LeftDiv>
                    <PhotoImg
                      src={apiBaseURL + profileImageName[index]}
                    ></PhotoImg>
                  </LeftDiv>
                  <RightDiv>
                    <MainDiv>
                      <MainText>
                        {todo.friendName} 님이 안부인사를 기다립니다
                      </MainText>
                    </MainDiv>
                    <SubDiv>
                      <DotImg />
                      <SubText>{todo.remainDays}일 남음</SubText>
                    </SubDiv>
                  </RightDiv>
                </ContentDiv>
                <ButtonDiv>
                  <Button onClick={onToggle} open={open}>
                    <img src={require("../img/ic_check.png")} />
                    <ButtonText>Clear</ButtonText>
                  </Button>
                </ButtonDiv>
              </TodoDiv>
            ];
          })}

      </TodosDiv>
    </>
  );
};

const TodosDiv = styled.div``;

const TodoDiv = styled.div`
  width: 338px;
  height: 168.4px;
  border-radius: 6px;
  box-shadow: 0 5px 10px 0 rgba(80, 92, 98, 0.13);
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;
const ContentDiv = styled.div`
  width: 338px;
  height: 111.5px;
  flex: 1;
  display: flex;
`;
const LeftDiv = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
`;
const PhotoImg = styled.img`
  width: 75px;
  height: 75px;
  border-radius: 50%;
`;
const RightDiv = styled.div`
  flex: 3;
  display: block;
  align-items: center;
  height: 100%;
  padding-left: 20px;
`;
const MainDiv = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding-top: 20px;
`;
const MainText = styled.text`
  font-family: Noto Sans KR;
  font-size: 14px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
  text-align: center;
  color: #334856;
`;
const SubDiv = styled.div`
  flex: 1;
  align-items: center;
  display: flex;
  padding-top: 20px;
`;
const SubText = styled.text`
  display: flex;
  font-family: Noto Sans KR;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: 0.24px;
  text-align: center;
  color: #000000;
`;
const DotImg = styled.div`
  margin: 0;
  padding: 0;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #ff1a48;
`;
const ButtonDiv = styled.div`
  border-top: 2px solid #f4f4f4;
  width: 338px;
  height: 56.9px;
`;
const Button = styled.button`
  background: none;
  border: none;
  width: 100%;
  height: 100%;
`;
const ButtonText = styled.text`
  width: 22px;
  height: 18px;
  font-family: Noto Sans KR;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 0.6px;
  text-align: center;
  color: #334856;
`;

export default ToDo;
