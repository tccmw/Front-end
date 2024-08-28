const loginform = document.querySelector("#Login-form");
const logininput = document.querySelector("#Login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function loginsumit(event) {
  event.preventDefault();
  loginform.classList.add(HIDDEN_CLASSNAME);
  const username = logininput.value;
  localStorage.setItem(USERNAME_KEY,username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
  //show the form
  loginform.classList.remove(HIDDEN_CLASSNAME);
  loginform.addEventListener("submit",loginsumit);
} else{
  //show the greetings
  paintGreetings(savedUsername);
}





// const loginform = document.querySelector("#Login-form");
// const logininput = document.querySelector("#Login-form input");
// const greeting = document.querySelector("#greeting");

// const HIDDEN_CLASSNAME = "hidden";
// const USERNAME_KEY = "username";

// function loginsumit(event) {
//   event.preventDefault();
//   loginform.classList.add(HIDDEN_CLASSNAME);
//   localStorage.setItem(USERNAME_KEY,logininput.value);
//   paintGreetings();
// }

// function paintGreetings() {
//   const username = localStorage.getItem(USERNAME_KEY);
//   greeting.innerText = `Hello ${username}`;
//   greeting.classList.remove(HIDDEN_CLASSNAME);
// }

// const savedUsername = localStorage.getItem(USERNAME_KEY);

// if(savedUsername === null){
//   //show the form
//   loginform.classList.remove(HIDDEN_CLASSNAME);
//   loginform.addEventListener("submit",loginsumit);
// } else{
//   //show the greetings
//   paintGreetings();
// }