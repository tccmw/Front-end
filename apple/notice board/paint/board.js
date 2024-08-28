const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

ctx.fillRect(200,200,50,200);
ctx.fillRect(400,200,50,200);
ctx.lineWidth = 5;
ctx.strokeRect(300,300,50,100);
ctx.fillRect(200,200,200,20);
ctx.moveTo(200,200);
ctx.lineTo(325,100);
ctx.lineTo(450,200);
ctx.fill();

ctx.beginPath();
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