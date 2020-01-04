import React, { useState } from "react";
import styled, { css } from "styled-components";
import Dateselecter2 from "./Dateselecter2";

function Add() {
  const [open, setOpen] = useState(false);

  const onToggle = () => setOpen(!open);

  return (
    <>
      <BoxDiv4>
        <TitleDiv4>
          <InputText4>중요한 일정</InputText4>
          <InputText5blue>*</InputText5blue>
        </TitleDiv4>
        <DiaryDiv>
          <Textarea2 placeholder="결혼기념일"></Textarea2>
          <Dateselecter2 />
        </DiaryDiv>
        {!open && (
          <DotImg
            onClick={onToggle}
            open={open}
            src={require("../img/ic_plus_date.png")}
            alt="img"
          ></DotImg>
        )}
        {open && (
          <DiaryDiv>
            <Textarea2 placeholder="결혼기념일"></Textarea2>
            <Dateselecter2 />
          </DiaryDiv>
        )}

        {/* <AddButton>
              <Image src={require("../img/ic_plus_date@2x.png")} alt="img" />
            </AddButton> */}
      </BoxDiv4>
    </>
  );
}

const DotImg = styled.img`
  margin-left: 228px;
`;

const Textarea2 = styled.textarea`
  width: 64px;
  height: 20px;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom: 1.3px solid #e4e4e4;
  background-color: #ffffff;
  font-family: Noto Sans KR;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color: black;
  ::placeholder {
    color: #ededed;
  }
  resize: none;
  outline: none;
`;

const DiaryDiv = styled.div`
  width: 255px;
  height: 48px;
  margin-top: 12px;
  padding-left: 12px;
  border: solid 1px #e2e8ed;
  display: flex;
  align-items: center;
  box-sizing: border-box;
`;

const BoxDiv4 = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 41.5px;
`;
const TitleDiv4 = styled.div`
  display: flex;
  alignself: flex-start;
  align-items: center;
`;
const Image = styled.img`
  margin-right: 20px;
`;
const InputText4 = styled.text`
  font-family: Noto Sans KR;
  font-size: 14px;
  font-weight: bold;
  line-height: 20px;
  text-align: left;
  color: #4c5264;
`;
const InputText5blue = styled.text`
  font-family: Noto Sans KR;
  font-size: 14px;
  font-weight: bold;
  line-height: 20px;
  text-align: left;
  color: #60c3ff;
`;
// const AddDiv = styled.div`
//   width: 255px;
//   height: 48px;
//   display: flex;
//   justify-content: center;
//   padding-top: 20px;
// `;

// const InsertDiary = styled.div`
//   width: 255px;
//   height: 48px;
//   border: solid 1px #e2e8ed;
//   display: block;
//   align-items: flex-start;
// `;

// const NewDiv = styled.div`
//   display: block;
// `;

export default Add;
