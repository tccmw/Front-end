import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

const Add = () =>{
const [form, setform] = useState({
  userName: '',
  userTitle:'',
  userDetail:'',
});

  return(
    <Body>
      <Main>
        <Header>게시판</Header>
        <form>
          <Name>
            <legend>
              이름
              <NameInput 
              type="text"
              name="userName"
              value={form.userName}
              placeholder="이름을 입력하세요"
              onChange={e => setform({...form, userName: e.target.value})}
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
              value={form.userTitle}
              placeholder="제목을 입력하세요"
              onChange={e => setform({...form, userTitle: e.target.value})}
              required
              >
              </TitleInput>
            </legend>
          </Title>
          <Detail>
            내용
            <legend>
              <DetailInput
              type="text"
              name="userDetail"
              value={form.userDetail}
              placeholder="내용을 입력하세요"
              onChange={e => setform({...form, userDetail: e.target.value})}
              >
              </DetailInput>
            </legend>
          </Detail>
          <Button>
            <ButtonC type="submit"><Link to="/" style={{ textDecoration: "none"}}><ButtonFont>작성</ButtonFont></Link></ButtonC>
          </Button>
        </form>
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
  `;

const Header = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight:bold;
  font-size: 20px;
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
  width: 750px;
  height: 100%;
  border-radius: 5px;
  border: 1px solid #ccc;
  outline: none;
  box-shadow: 0px 8px 6px -6px #f3e8e8
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