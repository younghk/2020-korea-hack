import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import TabSettings from "../components/TabSettings";

const AddInformation = () => {
  return (
    <ContainerDiv>
      <TopDiv>
        <text className="toptext">정보 추가/수정</text>
      </TopDiv>
      <LinkDiv to="/input">
        <ContentDiv>
          <CtimgDiv>
            <img src={require("../img/ic_pencil.png")} alt="img" />
          </CtimgDiv>
          <CttextDiv>마이페이지 수정</CttextDiv>
        </ContentDiv>
      </LinkDiv>
      <LinkDiv to="/input">
        <ContentDiv>
          <CtimgDiv>
            <img src={require("../img/ic_lock.png")} alt="img" />
          </CtimgDiv>
          <CttextDiv>비밀번호 수정</CttextDiv>
        </ContentDiv>
      </LinkDiv>
      <LinkDiv to="/input">
        <ContentDiv>
          <CtimgDiv>
            <img src={require("../img/ic_payment_card.png")} alt="img" />
          </CtimgDiv>
          <CttextDiv>결제 방법</CttextDiv>
        </ContentDiv>
      </LinkDiv>
      <LinkDiv to="/input">
        <ContentDiv>
          <CtimgDiv>
            <img src={require("../img/ic_sign_out.png")} alt="img" />
          </CtimgDiv>
          <CttextDiv>도움말</CttextDiv>
        </ContentDiv>
      </LinkDiv>
      <TabSettings />
    </ContainerDiv>
  );
};

const ContainerDiv = styled.div`
  flex: 1;
`;

const TopDiv = styled.div`
  width: 100%;
  height: 100px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LinkDiv = styled(Link)`
  text-decoration: none;
  color: black;
`;

const ContentDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 100%;
  height: 50px;
`;

const CtimgDiv = styled.div`
  padding-left: 50px;
  flex: 1;
  height: 100%;
`;

const CttextDiv = styled.div`
  flex: 5.5;
  width: 100%;
  height: 100%;
  font-family: Gibson;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: left;
`;

export default AddInformation;
