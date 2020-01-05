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
  //const [phoneNumber, setPhoneNumber] = useState(props.name);
  //const [status, setSex] = useState(props.name);
  const [selectedImage, setSelectedImage] = useState();
  
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
    setSelectedImage(require('../img/img-gallery.png'));
  }, []);

  const handleChange = (event) => {
    setName(event.target.value)
  }

  const handleChangeSex = (event) => {
    setSex({sex: event.target.value})
  }

  const handleFileInput = (event) => {
    setProfileImageFile(event.target.files[0])

    let reader = new FileReader();
     
    reader.onloadend = () => {
      setSelectedImage(reader.result)
    }
 
    reader.readAsDataURL(event.target.files[0])
    console.log(event.target.files[0])
    setProfileImage(event.target.files[0].name)
  }

  const handlePost = () => {
    var formData = new FormData();
    formData.append('file', profileImageFile);

    axios.post("http://localhost:3001/api/test/file", formData).then(res => {
      alert(res)
    }).catch(err => {
      alert(err)
    })

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
      { headers: { 'Content-Type': 'application/json' } }
    ).then(res => {
      console.log(res);
      console.log(res.data);
    }).catch(err => {
      console.log(err)
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

  const Input1 = (
    <ContainerDiv>
      {/* { users } */}
      <InputDiv>
        <BoxDiv>
          <TotalImg
            src={selectedImage}
            alt="img"
          ></TotalImg>
          <InputText1>친구 사진 등록</InputText1>
          <InputText12>
            친구를 쉽게 등록할 수 있는
            <br />
            사진을 등록하세요.
          </InputText12>
          <label for="upload">
            <InputFile type="file" name="file" onChange={(e) => handleFileInput(e)} />
          </label>
          
        </BoxDiv>
      </InputDiv>
      <DotDiv>
        <DotImg src={require("../img/ecllipses.png")} alt="img"></DotImg>
      </DotDiv>
    </ContainerDiv>
  );
  const Input2 = (
    <ContainerDiv>
      <InputDiv>
        <BoxDiv>
          <TitleDiv2>
            <InputText2>친구의 이름을 입력하세요.</InputText2>
          </TitleDiv2>
          <Textarea2 placeholder="이름을 입력하세요." value={name} onChange={handleChange}></Textarea2>
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
        <BoxDiv3>
          <TitleDiv3>
            <IconImage src={require("../img/ic_user.png")} alt="img" />
            <InputText3>성별</InputText3>
          </TitleDiv3>
          <Select placeholder="선택" onChange={(e) => setSex(e.target.value)} value={sex}>
            <Option value="female" label="여"></Option>
            <Option value="male">남</Option>
          </Select>
        </BoxDiv3>
        <BoxDiv3>
          <TitleDiv3>
            <IconImage src={require("../img/ic_user.png")} alt="img" />
            <InputText3>관계</InputText3>
          </TitleDiv3>
        <Select onChange={(e) => setRelation(e.target.value)} value={relation}>
            <Option value="friend">친구</Option>
            <Option value="family">가족</Option>
            <Option value="lover">애인</Option>
          </Select>
        </BoxDiv3>
        <BoxDiv3>
          <TitleDiv3>
            <IconImage src={require("../img/ic_user.png")} alt="img" />
            <InputText3>생일</InputText3>
          </TitleDiv3>
          <SelectBox>
            <Dateselecter value={birth} onChange={(e) => console.log(e)}/>
          </SelectBox>
        </BoxDiv3>
      </InputDiv>
      <DotDiv>
        <DotImg src={require("../img/eclipses.png")} alt="img"></DotImg>
      </DotDiv>
    </ContainerDiv>
  );

  const Input4 = (
    <ContainerDiv>
      <InputDiv>
        <CommentText>*필수 응답 설문입니다</CommentText>
        <BoxDiv4>
          <TitleDiv4>
            <InputText4>직업</InputText4>
            <InputText4blue>*</InputText4blue>
          </TitleDiv4>
          <Textarea4 placeholder="대학생" value={occupation} onChange={handleChangeOccupation}></Textarea4>
        </BoxDiv4>
        <BoxDiv4>
          <TitleDiv4>
            <InputText4>거주 지역</InputText4>
            <InputText4blue>*</InputText4blue>
          </TitleDiv4>
          <Textarea4 placeholder="서울시 성북구" value={location} onChange={handleChangeLocation}></Textarea4>
        </BoxDiv4>
        <BoxDiv4>
          <TitleDiv4>
            <InputText4>취미</InputText4>
            <InputText4blue>*</InputText4blue>
          </TitleDiv4>
          <Textarea4 placeholder="러닝, 아웃도어, 독서, 영화" value={hobby} onChange={handleChangeHobby}></Textarea4>
        </BoxDiv4>
      </InputDiv>
      <DotDiv>
        <DotImg src={require("../img/ecllipses3.png")} alt="img"></DotImg>
      </DotDiv>
    </ContainerDiv>
  );

  const Input5 = (
    <ContainerDiv>
      <InputDiv>
        <CommentText5>
          *선택 응답 설문입니다. 더 나은 서비스를 위해 응답을 권장합니다.
        </CommentText5>
        <BoxDiv4>
          <TitleDiv4>
            <InputText4>출신</InputText4>
            <InputText5blue>*</InputText5blue>
          </TitleDiv4>
          <Textarea4 placeholder="경기도 고양시" value={bornPlace} onChange={handleChangeBornPlace}></Textarea4>
        </BoxDiv4>
        <BoxDiv4>
          <TitleDiv4>
            <InputText4>서로 알고 지낸 기간</InputText4>
            <InputText5blue>*</InputText5blue>
          </TitleDiv4>
          <Textarea4 placeholder="10년" value={period} onChange={handleChangePeriod}></Textarea4>
        </BoxDiv4>
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
        handlePost();
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
  display: flex;
  height: 812px;
  flex-direction: column;
  align-item: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  // background-color: green;
`;

const TopDiv = styled.div`
  display: flex;
  height: 700px;
  justify-content: center;
  align-items: center;
`;
const BottomDiv = styled.div`
  display: flex;
  height: 92px;
  // background-color: blue;
  justify-content: center;
`;
const ContainerDiv = styled.div`
  // position: absolute;
  margin-top: 82px;
  display: flex;
  height: 640px;
  width: 375px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  float: center;
  // background-color: red;
  box-sizing: border-box;
`;

const InputDiv = styled.div`
  width: 295px;
  height: 550px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 40px 20px 0px 20px;
  border-radius: 10px;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.06);
`;

const TotalDiv = styled.div`
  width: 295px;
  height: 550px;

  display: flex;
  justify-content: center;
  background-color: blue;
`;

const PhotoButton = styled.button`
  width: 255px;
  height: 500px;
  border: none;
  background-color: green;
  display: flex;
  justify-content: center;
`;

const TotalImg = styled.img`
  margin-top: 78px;
  width: 164px;
  height: 164px;
  alignself: center;
`;

const InputText1 = styled.text`
  margin-top: 50px;
  font-family: NotoSansCJKkr;
  font-size: 38px;
  font-weight: 700;
  text-align: center;
`;
const InputText12 = styled.text`
  margin-top: 15px;
  font-family: NotoSansCJKkr;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  color: #4c5264;
`;

const BoxDiv = styled.div`
  display: flex;

  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
`;
const TitleDiv2 = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const BoxDiv3 = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  align-items: flex-start;
`;
const TitleDiv3 = styled.div`
  display: flex;
  alignself: flex-start;
  align-items: center;
  margin-bottom: 23px;
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
const InputText4 = styled.text`
  font-family: NotoSansCJKkr;
  font-size: 14px;
  font-weight: bold;
  line-height: 20px;
  text-align: left;
  color: #4c5264;
`;
const InputText4blue = styled.text`
  font-family: NotoSansCJKkr;
  font-size: 14px;
  font-weight: bold;
  line-height: 20px;
  text-align: left;
  color: #665eff;
`;
const InputText5blue = styled.text`
  font-family: NotoSansCJKkr;
  font-size: 14px;
  font-weight: bold;
  line-height: 20px;
  text-align: left;
  color: #60c3ff;
`;
const Textarea4 = styled.textarea`
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
`;
const CommentText = styled.text`
  margin-bottom: 20px;
  font-family: NotoSansCJKkr;
  font-size: 8px;
  font-weight: normal;
  text-align: right;
  color: #665eff;
  justify-content: flex-end;
`;
const CommentText5 = styled.text`
  margin-bottom: 20px;
  font-family: NotoSansCJKkr;
  font-size: 8px;
  font-weight: normal;
  text-align: right;
  color: #60c3ff;
  justify-content: flex-end;
`;
const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  background-color: green;
`;
const Image = styled.img`
  margin-right: 20px;
`;

const IconImage = styled.img`
  height: 15px;
  width: 15px;
`;

const InputText3 = styled.text`
  margin-left: 16px;
  font-family: NotoSansCJKkr;
  font-size: 14px;
  font-weight: bold;
  line-height: 20px;
  text-align: left;
  color: #4c5264;
`;

// input2의 '친구의 이름을 입력하세요'
const InputText2 = styled.text`
  font-family: NotoSansCJKkr;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  color: #4c5264;
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
  color: #4c5264;
`;

const Select = styled.select`
  padding-left: 16px;
  margin-bottom: 41px;
  width: 255px;
  height: 48px;
  border: solid 1px #e2e8ed;
  background-color: #ffffff;
  border-radius: 0px;
  font-size: 14px;
  resize: none;
  outline: none;
`;

const SelectBox = styled.div`
  display: flex;
  padding-left: 16px;
  margin-bottom: 41px;
  width: 255px;
  height: 48px;
  border: solid 1px #e2e8ed;
  background-color: #ffffff;
  border-radius: 0px;
  font-size: 14px;
  align-items: center;
  resize: none;
  outline: none;
`;

const Option = styled.option`
  // padding-left: 16px;
  // width: 255px;
  // height: 48px;
  // border: solid 1px #e2e8ed;
  background-color: #ffffff;
`;

// input2의 text 인풋 칸
const Textarea2 = styled.textarea`
  width: 255px;
  height: 35px;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom: 2px solid #e4e4e4;
  // background-color: #ffffff;
  font-family: NotoSansCJKkr;
  font-size: 23px;
  font-weight: 700;
  line-height: 1.5;
  text-align: center;
  text-vertical-align: center;
  color: #5887f9;
  ::placeholder {
    color: #ededed;
  }
  resize: none;
  outline: none;
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

const InputFile = styled.input`
  width: 255px;
  height: 100px;
  border: none;
  background: none;
  display: flex;
  justify-content: center;
  opacity: 0;
`

export default Input;
