import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

import Dateselecter from "../components/Dateselecter";
// import Dateselecter2 from "../components/Dateselecter2";
import Add from "../components/Add";

const Input = props => {
  const [pageNum, setPageNum] = useState(1);
  // const [users] = useState(' ')
  // added
  const [name, setName] = useState(props.name);
  const [profileImage, setProfileImage] = useState(props.name);
  const [profileImageFile, setProfileImageFile] = useState(props.name);
  const [sex, setSex] = useState(props.name);
  const [relation, setRelation] = useState(props.name);
  const [birth, setBirth] = useState(props.name);
  const [occupation, setOccupation] = useState(props.name);
  const [location, setLocation] = useState(props.name);
  const [hobby, setHobby] = useState(props.name);
  const [period, setPeriod] = useState(props.name);
  const [bornPlace, setBornPlace] = useState(props.name);
  //const [phoneNumber, setPhoneNumber] = useState(props.name);
  //const [status, setSex] = useState(props.name);
  
  useEffect(() => {
    setPageNum(Number(props.match.params.id));
    // const apiURL = 'http://localhost:3001/users/?userId=1'
    // axios.get(apiURL).then((data) => {
    //   console.log(data.data.users);
    //   this.setState({
    //     users: data.data.users,
    //   });
    // }).catch(error => console.log(error));
  }, [pageNum, props.match.params.id]);
  useEffect(() => {
    setSex('female')
  }, [sex, 'female']);

  useEffect(() => {
    setRelation('친구');
  }, [relation, '친구']);

  useEffect(() => {
    setBirth('2020-01-04');
  }, [birth, '2020-01-04']);

  const handleChange = (event) => {
    setName(event.target.value)
  }

  const handleChangeSex = (event) => {
    setSex(event.target.value)
  }

  const handleChangeProfileImageFile = (event) => {
    setProfileImageFile(event.target.file)
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

  const Input1 = (
    <ContainerDiv>
      {/* { users } */}
      <TotalDiv>
        <PhotoButton>
          <TotalImg
            src={require("../img/img_gallery.png")}
            alt="img"
          ></TotalImg>
        </PhotoButton>
      </TotalDiv>

      <DotDiv>
        <DotImg src={require("../img/ecllipses.png")} alt="img"></DotImg>
      </DotDiv>
    </ContainerDiv>
  );
  const Input2 = (
    <ContainerDiv>
      <InputDiv>
        <BoxDiv>
          <TitleDiv>
            <InputText>친구의 이름을 입력하세요.</InputText>
          </TitleDiv>
          <Textarea placeholder="이름을 입력하세요" value={name} onChange={handleChange}></Textarea>
        </BoxDiv>
      </InputDiv>
      <DotDiv>
        <DotImg src={require("../img/ecllipses.png")} alt="img"></DotImg>
      </DotDiv>
    </ContainerDiv>
  );

  const Input3 = (
    <ContainerDiv>
      <InputDiv>
        <BoxDiv>
          <TitleDiv>
            <Image src={require("../img/ic_user.png")} alt="img" />
            <InputText>성별</InputText>
          </TitleDiv>
          <Select value={sex} onChange={handleChangeSex}>
            <Option value="female">여</Option>
            <Option value="male">남</Option>
          </Select>
        </BoxDiv>
        <BoxDiv>
          <TitleDiv>
            <Image src={require("../img/ic_user.png")} alt="img" />
            <InputText>관계</InputText>
          </TitleDiv>
          <Select value={relation} onChange={handleChangeRelation}>
            <Option value="friend" selected>
              친구
            </Option>
            <Option value="family">가족</Option>
            <Option value="lover">애인</Option>
          </Select>
        </BoxDiv>
        <BoxDiv>
          <TitleDiv>
            <Image src={require("../img/ic_user.png")} alt="img" />
            <InputText>생일</InputText>
          </TitleDiv>
          <Dateselecter width="255px" height="48px" />
        </BoxDiv>
      </InputDiv>
      <DotDiv>
        <DotImg src={require("../img/eclipses.png")} alt="img"></DotImg>
      </DotDiv>
    </ContainerDiv>
  );

  const Input4 = (
    <ContainerDiv>
      <ComentText>*필수 응답 설문입니다</ComentText>
      <InputDiv>
        <BoxDiv>
          <TitleDiv>
            <Image src={require("../img/ic_user.png")} alt="img" />
            <InputText>직업*</InputText>
          </TitleDiv>
          <Textarea placeholder="대학생" value={occupation} onChange={handleChangeOccupation}></Textarea>
        </BoxDiv>
        <BoxDiv>
          <TitleDiv>
            <Image src={require("../img/ic_user.png")} alt="img" />
            <InputText>거주 지역*</InputText>
          </TitleDiv>
          <Textarea placeholder="서울시 성북구" value={location} onChange={handleChangeLocation}></Textarea>
        </BoxDiv>
        <BoxDiv>
          <TitleDiv>
            <Image src={require("../img/ic_user.png")} alt="img" />
            <InputText>취미*</InputText>
          </TitleDiv>
          <Textarea placeholder="러닝, 아웃도어, 독서, 영화" value={hobby} onChange={handleChangeHobby}></Textarea>
        </BoxDiv>
      </InputDiv>
      <DotDiv>
        <DotImg src={require("../img/ecllipses3.png")} alt="img"></DotImg>
      </DotDiv>
    </ContainerDiv>
  );

  const Input5 = (
    <ContainerDiv>
      <ComentText>
        *선택 응답 설문입니다. 더 나은 친구 관리 서비스를 위해 응답을
        권장합니다.
      </ComentText>
      <InputDiv>
        <BoxDiv>
          <TitleDiv>
            <Image src={require("../img/ic_user.png")} alt="img" />
            <InputText>출신*</InputText>
          </TitleDiv>
          <Textarea placeholder="경기도 고양시" value={bornPlace} onChange={handleChangeBornPlace}></Textarea>
        </BoxDiv>
        <BoxDiv>
          <TitleDiv>
            <Image src={require("../img/ic_user.png")} alt="img" />
            <InputText>서로 알고 지낸 기간*</InputText>
          </TitleDiv>
          <Textarea placeholder="10년" value={period} onChange={handleChangePeriod}></Textarea>
        </BoxDiv>
        <Add />
        {/* <BoxDiv>
          <TitleDiv>
            <Image src={require("../img/ic_user.png")} alt="img" />
            <InputText>중요한 일정*</InputText>
          </TitleDiv>
          <DiaryDiv>
            <Textarea2 placeholder="결혼기념일"></Textarea2>
            <Dateselecter2 />
          </DiaryDiv>
          <AddDiv>
            <Add />
            

            <AddButton>
              <Image src={require("../img/ic_plus_date@2x.png")} alt="img" />
            </AddButton>


          </AddDiv>
        </BoxDiv> */}
      </InputDiv>
      <DotDiv>
        <DotImg src={require("../img/그룹 1576.png")} alt="img"></DotImg>
      </DotDiv>
    </ContainerDiv>
  );

  let toggleInput = null;
  if (pageNum === 1) {
    toggleInput = Input1;
  } else if (pageNum === 2) {
    toggleInput = Input2;
  } else if (pageNum === 3) {
    toggleInput = Input3;
  } else if (pageNum === 4) {
    toggleInput = Input4;
  } else if (pageNum === 5) {
    toggleInput = Input5;
  }

  const buttonHandler = key => {
    if (!key) {
      props.history.push(`/input/${pageNum - 1}`);
      setPageNum(pageNum - 1);
    } else {
      // added
        console.log('friendName: ' + name)
        console.log('friendProfileImage: ' + profileImage)
        console.log('sex: ',sex)
        console.log('relation: ',relation)
        console.log('location: ',location)
        console.log('birth: ',birth)
        console.log('occupation: ',occupation)
        console.log('period: ',period)
        console.log('bornPlace: ',bornPlace)
        console.log('hobby: ',hobby)
      if(pageNum == 5){
        let apiUrl = 'http://localhost:3001/api/friends'
        axios.post(
          apiUrl,
          { friendName: name,
            friendProfileImage: profileImage,
            sex: sex,
            relation: relation,
            birth: birth,
            occupation: occupation,
            location: location,
            hobby: hobby,
            period: period },
          { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
        ).then(res => {
          console.log(res);
          console.log(res.data);
        }).catch(err => {
          console.log(err)
        })
        props.history.push(`/`);
      }
      else{
        props.history.push(`/input/${pageNum + 1}`);
        setPageNum(pageNum + 1);
      }
    }
  };

  return (
    <AllDiv>
      <TopDiv>{toggleInput}</TopDiv>

      <BottomDiv>
        <BackButton
          onClick={() => buttonHandler(false)}
          disabled={pageNum <= 1}
        >
          <img src={require("../img/btn-gray.png")} alt="img"></img>
          {/* <BackText>뒤로</BackText> */}
        </BackButton>
        <GoButton onClick={() => buttonHandler(true)}>
          <img src={require("../img/btn-blue.png")} alt="img"></img>
          {/* <GoText>완료</GoText> */}
        </GoButton>
      </BottomDiv>
    </AllDiv>
  );
};

const AllDiv = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  padding: 0;
  margin: 0;
`;

const TopDiv = styled.div`
  display:flex;
  width:100%
  height:630px;
  justify-content: center;
  align-items:center;
`;
const BottomDiv = styled.div`
  display: flex;
  width: 100%;
  height: 182px;
  justify-content: center;
  margin: 0;
  padding: 0;
`;
const ContainerDiv = styled.div`
  justify-content: center;
  align-items: center;
`;

const ComentText = styled.text`
  display: float;
  position: fixed;
  width: 295px;
  height: 12px;
  font-family: NotoSansCJKkr;
  font-size: 8px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;

  e-height: 1.5;
  letter-spacing: normal;
  text-align: right;
  color: var(--cornflower-two);
  justify-content: flex-end;
`;
const InputDiv = styled.div`
  width: 295px;
  height: 550px;
  padding-top: 100px;
`;

const TotalDiv = styled.div`
  width: 295px;
  height: 550px;
  padding-top: 50px;
  display: flex;
  justify-content: center;
`;

const PhotoButton = styled.button`
  width: 255px;
  height: 500px;
  border: none;
  background: none;
  display: flex;
  justify-content: center;
`;

const TotalImg = styled.img``;

const BoxDiv = styled.div`
  padding: 20px;
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

const Select = styled.select`
  padding-left: 16px;
  width: 255px;
  height: 48px;
  border: solid 1px #e2e8ed;
  background-color: #ffffff;
`;

const Option = styled.option`
  padding-left: 16px;
  width: 255px;
  height: 48px;
  border: solid 1px #e2e8ed;
  background-color: #ffffff;
`;

const Textarea = styled.textarea`
  width: 255px;
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

const AddDiv = styled.div`
  width: 255px;
  height: 48px;
  display: flex;
  justify-content: center;
  padding-top: 100px;
`;
// const AddButton = styled.button`
//   background-color: transparent;
//   border: transparent;
//   width: 80px;
//   height: 100px;
//   padding-left: 40px;
// `;
const DotDiv = styled.div`
  display: flex;
  width: 100%px;
  height: 100px;
  justify-content: center;
  align-items: center;
`;

const DotImg = styled.img``;

const BackButton = styled.button`
  width: 155px;
  height: 52px;
  border: none;
  background: none;
  display: flex;
  justify-content: center;
  margin-right: 5px;
`;
const GoButton = styled.button`
width: 155px;
  height: 52px;
  border: none;
  background: none;
  display:flex;
  justify-content:center;
  margin-left:5px;

  );
`;

const BackText = styled.text`
  width: 26px;
  height: 20px;
  font-family: NotoSansCJKkr;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
  text-align: center;
  color: #454f63;
`;
const GoText = styled.text`
  width: 26px;
  height: 20px;
  font-family: NotoSansCJKkr;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
`;

export default Input;
