const title = document.querySelector("div.hello:first-child h1");

console.dir(title);

title.style.color = "blue";


const h1 = document.querySelector("div.hello:first-child h1");

console.dir(h1);

function handleTitleClick() {
  console.log("title was click!");
  h1.style.color = "blue";
  h1.innerText = "hello";
}
function handlemouseenter() {
  console.log("mouse up");
  h1.style.color = "red";
}
function handlemouseleave() {
  console.log("mouse down");
  h1.style.color = "black";
}
function handleWindowResize(){
  document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy(){
  alert("copier!");
}
function handleWindowoffline(){
  alert("SOS no WIFI");
}
function handleWindowonline(){
  alert("All Gooood");
}

h1.onclick = handleTitleClick; //===h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handlemouseenter);
h1.addEventListener("mouseleave",handlemouseleave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy",handleWindowCopy);
window.addEventListener("offline",handleWindowoffline);
window.addEventListener("online", handleWindowonline);