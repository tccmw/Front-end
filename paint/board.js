const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;


ctx.fillRect(200,600,30,100);
ctx.fillRect(400,600,30,100);
ctx.fillRect(280,600,70,200);
ctx.arc(315,530,50,0,2*Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(295,515,5,1*Math.PI,2*Math.PI);
ctx.arc(340,515,5,1*Math.PI,2*Math.PI);
ctx.fill();
