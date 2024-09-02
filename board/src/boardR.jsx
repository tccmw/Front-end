import styled from "styled-components";
import React, {useState} from "react";
import { Link } from "react-router-dom";

const BoardReact = () =>{
  return(
    <>
    <Main>
      <Chlid>게시판</Chlid>
    </Main>
    <Footer>
      <Button><Link to="/add" style={{ textDecoration: "none"}}>
        <RouteFont>추가</RouteFont>
      </Link></Button>    
    </Footer>
    </>
  )
}

export default BoardReact;

const Main = styled.div`
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 100vh;
`;

const Chlid = styled.div`
  width: 100%;  
  height: 60px;
  background-color: black;
  color: white;
  font-weight: 600;
  font-size: 20px;
  display: flex;
  align-items: center;
  padding-left: 20px  ;
  position: fixed;
`;

const Footer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  position: fixed;
  bottom: 10%;
  right: 10%;
  width: 100px;
  height: 50px;
  border: none;
  border-radius: 15px;
  background-color: #000;
  color: #fff;
`;

const RouteFont = styled.div`
  color: #fff;
`;