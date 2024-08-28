const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "toDos";

let toDos = [];

function saveToDo(){
  localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function DelToDo(event){
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDo();
}

function painttodo(newToDo){
  const li = document.createElement("li");
  li.id = newToDo.id;
  const button = document.createElement("button");
  const span = document.createElement("span");
  button.innerText = "❌";
  button.addEventListener("click",DelToDo);
  li.appendChild(span);
  li.appendChild(button);
  span.innerText = newToDo.Text;
  todoList.appendChild(li);
}

function handleToDoSubmit(event){
  event.preventDefault();
  const newToDo = todoInput.value;
  todoInput.value = "";
  const newToDoOBJ = {
    Text : newToDo,
    id : Date.now(),
  };
  toDos.push(newToDoOBJ);
  painttodo(newToDoOBJ);
  saveToDo();
}

todoForm.addEventListener("submit",handleToDoSubmit);

// function HelloToDo(item){
//   console.log("hello",item);
// }

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
  const ToDoParse = JSON.parse(savedToDos);
  toDos = ToDoParse;
  ToDoParse.forEach(painttodo);
}