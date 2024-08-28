const age = parseInt(prompt("How old are you?"));

if(isNaN(age)){
  console.log("Please write a number");
} else if(age < 18){
  console.log("young");
} else if(age >= 18 && age < 50){
  console.log("can drink");
} else if(age >= 50 && age < 81){
  console.log("can't drink");
} else {
  console.log("die");
}