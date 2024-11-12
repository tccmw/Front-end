// function add(a,b,callback){
//   setTimeout(()=>{
//     sum = a + b
//     callback(sum)
//     alert(sum)
//   },3000)
// }

// add(1,2,(value)=>{
//   alert(value)
// })

//음식 주문 상황
function otherFood(callback){
  setTimeout(() => {
    const food = "마라탕"
    callback(food)
  }, 3000);
}

function coolFood(food, callback){
  setTimeout(() => {
    const cooldowndFood = `식은 ${food}`
    callback(cooldowndFood)
  }, 2000);
}

function iceFood(food, callback){
  setTimeout(() => {
    const iceFood = `차갑게 ${food}`
    callback(iceFood)
  }, 1000);
}

otherFood((food)=>{
  console.log(food)

  coolFood(food,(cooldowndFood) => {
    console.log(cooldowndFood)
    
    iceFood(cooldowndFood,(iceFood)=>{
      console.log(iceFood)
    })
  });
})