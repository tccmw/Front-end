const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = 2;

const colors = [
  "#1abc9c",
  "#e74c3c",
  "#9b59b6",
  "#ecf0f1",
  "#7f8c8d",
  "#f39c12",
  "#2ecc71",
  "#2c3e50"
];

function onMousemove(event){
  ctx.moveTo(0,0);
  ctx.lineTo(event.offsetX,event.offsetY);
  ctx.stroke();
  ctx.beginPath();
}

function onClick(event) {
  const color = colors[Math.floor(Math.random() * colors.length)];
  ctx.strokeStyle = color;
}

canvas.addEventListener("mousemove",onMousemove);
canvas.addEventListener("click",onClick);