import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Add = () =>{
const [form, setform] = useState({
  userName: '',
});

const [title, setTitle] = useState({
  userTitle: '',
});

const [detail, setDetail] = useState({
  userDetail: '',
});

const [name, setName] = useState("");

const onChange = e =>{
  setform(e.target.value);
  console.log(e.target.value);
}

const onTitle = e =>{
  setTitle(e.target.value);
  console.log(e.target.value);
}

const onDetail = e =>{
  setDetail(e.target.value);
  console.log(e.target.value);
}

const nav = useNavigate();

  const handleClick = () => {
    if(form.userName !== "" && title.userTitle !== "" && detail.userDetail !== ""){
      nav('/',{state:{name}});
    }
  }

  return(
    <Body>
      <Main>
        <Header>게시판</Header>
          <Name>
            <legend>
              이름
              <NameInput 
              type="text"
              name="userName"
              value={form.userName}
              placeholder="이름을 입력하세요"
              onChange={onChange}
              required
              >
              </NameInput>
            </legend>
          </Name>
          <Title>
            제목
            <legend>
              <TitleInput
              type="text"
              name="userTitle"
              value={title.userTitle}
              placeholder="제목을 입력하세요"
              onChange={onTitle}
              required
              >
              </TitleInput>
            </legend>
          </Title>
          <Detail>
            내용
            <Legend>
              <DetailInput
              type="text"
              name="userDetail"
              value={detail.userDetail}
              placeholder="내용을 입력하세요"
              onChange={onDetail}
              required
              >
              </DetailInput>
            </Legend>
          </Detail>
          <Button>
            <ButtonC onClick={handleClick}><ButtonFont>작성</ButtonFont></ButtonC>
          </Button>
      </Main>
    </Body>
  );
}

export default Add;

const Body = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f7f8f9;
`;

const Main = styled.div`
  width: 80%;
  height: 80%;
  border-radius: 15px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `;

const Header = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight:bold;
  font-size: 30px;
  border-radius: 15px 15px 0 0;
`;

const Name = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  font-weight:bold;
  font-size: 15px;
`;

const NameInput  = styled.input`
  margin-left: 20px;
  height: 20px;
  border-radius: 8px;
  border: 1px solid #ccc;
  outline: none;
  box-shadow: 0px 8px 6px -6px #666
`;

const Title = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  font-weight:bold;
  font-size: 15px;
  margin-top: 5px;
`;

const TitleInput = styled.input`
  margin-left: 20px;
  border-radius: 8px;
  border: 1px solid #ccc;
  outline: none;
  height: 20px;
  box-shadow: 0px 8px 6px -6px #666
`;

const Detail = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  border-radius: 0 0 15px 15px;
  font-weight:bold;
  font-size: 15px;
  margin-top: 5px;
`;

const DetailInput = styled.input`
  margin-left: 20px;
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  border: 1px solid #ccc;
  outline: none;
  box-shadow: 0px 8px 6px -6px #f3e8e8
`;

const Legend = styled.legend`
  height: 100%;
  width: 80%;
`;

const Button = styled.div`
  width: 100%;
  height: 60px;
  border-radius: 5px;
  display: flex;
  justify-content: end;
  align-items: center;
`;

const ButtonC = styled.button`
  height: 30px;
  margin-right: 13px;
  background-color: #f52020;
  border: 0;
  border-radius: 5px;
  box-shadow: 0px 8px 6px -6px #f3e8e8
`;

const ButtonFont = styled.div`
  color: #fff;
`;