const raectBnt = document.querySelector("#react-but");
const destroyBnt = document.querySelector("#destroy-but");
const fillBnt = document.querySelector("#fill-but");
const colorOption = Array.from(document.getElementsByClassName("color-option"));
const color = document.querySelector("#line-color");
const lineWidth = document.querySelector("#line-width");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
ctx.lineWidth = lineWidth.value;

let Mouse = false;
let isFilling = false;

function onMove(event){
  if(Mouse){
    ctx.lineTo(event.offsetX,event.offsetY);
    ctx.stroke();
    return;
  }
  ctx.moveTo(event.offsetX,event.offsetY);
}

function onMouseDown(){
  Mouse = true;
}

function onMouseUp(){
  Mouse = false;
  ctx.beginPath();
} 

function lineWidthchage(event){
  ctx.lineWidth = event.target.value;
}

function onColorChange(event){
  ctx.strokeStyle = event.target.value;
  ctx.fillStyle = event.target.value;
}

function onColorClick(event){
  const colorvalue = event.target.dataset.color;
  ctx.strokeStyle = colorvalue;
  ctx.fillStyle = colorvalue;
  color.value = colorvalue;
}

function onFillClick(){
  if(isFilling){
    isFilling = false;
    fillBnt.innerText = "Fill";
  }
  else{
    isFilling = true;
    fillBnt.innerText = "Draw";
  }
}

function onClickFill(){
  if(isFilling){
    ctx.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
  }
}

function onDestroyClick(event){
  ctx.fillStyle = "white";
  ctx.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
}

function onReactClick(){
  ctx.strokeStyle = "white";
  fillBnt.innerText = "Fill";
}

canvas.addEventListener("mousemove",onMove);
canvas.addEventListener("mousedown",onMouseDown);
canvas.addEventListener("mousedown",onClickFill);
document.addEventListener("mouseup",onMouseUp);
document.addEventListener("change",lineWidthchage);
document.addEventListener("change",onColorChange);
fillBnt.addEventListener("click",onFillClick);
colorOption.forEach((color) => color.addEventListener("click",onColorClick));
destroyBnt.addEventListener("click",onDestroyClick);
raectBnt.addEventListener("click",onReactClick);
