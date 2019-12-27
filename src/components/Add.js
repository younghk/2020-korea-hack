import React, { useState } from "react";
import styled, { css } from "styled-components";
import Dateselecter2 from "./Dateselecter2";

const DotImg = styled.img`
  display: block;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 200px;
  left: 40%;
`;

const Textarea2 = styled.textarea`
  width: 64px;
  height: 20px;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  background-color: #ffffff;
  font-family: NotoSansCJKkr;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color: #e2e8ed;
`;

const DiaryDiv = styled.div`
  width: 255px;
  height: 48px;
  border: solid 1px #e2e8ed;
  display: flex;
  align-items: center;
`;

const BoxDiv = styled.div`
  padding: 20px;
  display: block;
  justify-content: center;
`;
const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const Image = styled.img`
  margin-right: 20px;
`;
const InputText = styled.text`
  width: 200px;
  height: 23px;
  font-family: NotoSansCJKkr;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
`;
const AddDiv = styled.div`
  width: 255px;
  height: 48px;
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;

const InsertDiary = styled.div`
  width: 255px;
  height: 48px;
  border: solid 1px #e2e8ed;
  display: block;
  align-items: flex-start;
`;

const NewDiv = styled.div`
  display: block;
`;

function Add() {
  const [open, setOpen] = useState(false);

  const onToggle = () => setOpen(!open);

  return (
    <>
      <BoxDiv>
        <TitleDiv>
          <Image src={require("../img/ic_user.png")} alt="img" />
          <InputText>중요한 일정*</InputText>
        </TitleDiv>
        <DiaryDiv>
          <Textarea2 placeholder="결혼기념일"></Textarea2>
          <Dateselecter2 />
        </DiaryDiv>
        <AddDiv>
          <NewDiv>
            {open && (
              <InsertDiary>
                <DiaryDiv>
                  <Textarea2 placeholder="결혼기념일"></Textarea2>
                  <Dateselecter2 />
                </DiaryDiv>
              </InsertDiary>
            )}

            {/* <AddButton>
              <Image src={require("../img/ic_plus_date@2x.png")} alt="img" />
            </AddButton> */}
          </NewDiv>
        </AddDiv>
        <DotImg
          onClick={onToggle}
          open={open}
          src={require("../img/ic_plus_date@2x.png")}
          alt="img"
        ></DotImg>
      </BoxDiv>
    </>
  );
}

export default Add;
