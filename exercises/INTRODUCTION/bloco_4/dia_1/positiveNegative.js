// Programa número positivo, negativo ou zero.
const number = -2;
let status = null;

if(number > 0){
  status = 'positive';
} else if(number < 0) {
  status = 'negative';
} else {
  status = 'zero'
}

console.log(`O número ${number} é ${status}`);