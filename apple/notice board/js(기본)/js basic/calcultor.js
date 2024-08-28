const calcultor = {
  plus: function(a,b) {
  return a+b;
  },
  minus: function(a,b) {
  return a-b;
  },
  div: function(a,b) {
  return a/b;
  },
  multi: function(a,b) {
  return a*b;
  },
  power:function(a,b) {
  return a**b;
  },
 
};
 
const plusResult = calcultor.plus(2, 3);
const minusResult = calcultor.minus(plusResult, 10);
const divResult = calcultor.div(10, minusResult);
const multiRsult = calcultor.multi(divResult, plusResult);
const powerRsult = calcultor.power(multiRsult, minusResult);