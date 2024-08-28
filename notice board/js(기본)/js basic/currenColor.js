const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  const currenColor = h1.style.color;
  let newColor;
  if(currenColor === "blue"){
    newColor = " tomato";
  }else{
    newColor = "blue";
  }
  h1.style.color = newColor;
}

// h1.addEventListener("click",handleTitleClick);
/*js에서 css를 사용하는것인 바람직하지않음
js는 애니메이션, css는 style이 잘 어울린다*/