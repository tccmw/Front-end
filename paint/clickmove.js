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

function onMove(event) {
  // canvas의 위치를 기준으로 좌표를 계산
  const rect = canvas.getBoundingClientRect(); // canvas의 상대적 위치를 얻음
  const x = event.clientX - rect.left; // 마우스 X좌표에서 canvas의 왼쪽 경계값을 뺀 값
  const y = event.clientY - rect.top; // 마우스 Y좌표에서 canvas의 상단 경계값을 뺀 값

  if (Mouse) {
    ctx.lineTo(x, y);
    ctx.stroke();
    return;
  }
  ctx.moveTo(x, y);
}

function onMouseDown() {
  Mouse = true;
}

function onMouseUp() {
  Mouse = false;
  ctx.beginPath();
}

function lineWidthchage(event) {
  ctx.lineWidth = event.target.value;
}

function onColorChange(event) {
  ctx.strokeStyle = event.target.value;
  ctx.fillStyle = event.target.value;
}

function onColorClick(event) {
  const colorvalue = event.target.dataset.color;
  ctx.strokeStyle = colorvalue;
  ctx.fillStyle = colorvalue;
  color.value = colorvalue;
}

function onFillClick() {
  if (isFilling) {
    isFilling = false;
    fillBnt.innerText = "Fill";
  } else {
    isFilling = true;
    fillBnt.innerText = "Draw";
  }
}

function onClickFill() {
  if (isFilling) {
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  }
}

function onDestroyClick(event) {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

function onReactClick() {
  ctx.strokeStyle = "white";
  fillBnt.innerText = "Fill";
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", onMouseDown);
canvas.addEventListener("mousedown", onClickFill);
document.addEventListener("mouseup", onMouseUp);
document.addEventListener("change", lineWidthchage);
document.addEventListener("change", onColorChange);
fillBnt.addEventListener("click", onFillClick);
colorOption.forEach((color) => color.addEventListener("click", onColorClick));
destroyBnt.addEventListener("click", onDestroyClick);
raectBnt.addEventListener("click", onReactClick);
