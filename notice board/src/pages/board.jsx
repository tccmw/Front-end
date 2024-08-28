import React, {useState} from "react";
import "./board.css";

function APP(){
  let posts = '너무 어렵다';
  let [zore, one] = useState(0);
  let [hard, soHard] = useState(['react 잘하는 법', '헤헤']);


  function change(){
    const newArray = {...hard};
    newArray[0] = 'js 잘하는법'; 
    soHard(newArray);
  }
  
  return(
    <header className="nav-header">
      <div className="nav-header-div">
        <div>게시판</div>
      </div>
      <div className="list">
        <h3> { posts } <span id="good" onClick={ () => {one(zore + 1)}}>👍 {zore}</span> </h3>
        <p>8월 21일</p>
        <hr/>
      </div>
      <div className="list">
        <button onClick={change}>변경</button>
        <h3> { hard[0] } </h3>
        <p>8월 22일</p>
        <hr/>
      </div>
      <div className="list">
        <h3> { hard[1] } </h3>
        <p>8월 23일</p>
        <hr/>
      </div>
      <div className="list">
        <h3> { posts } </h3>
        <p>8월 24일</p>
        <hr/>
      </div>
      <Modal/>
    </header>
  );
} 

function Modal(){
  return(
    <div className="modal">
    <h2>제목</h2>
    <p>날짜</p>
    <p>상세 내용</p>
  </div>
  )
}

export default APP;