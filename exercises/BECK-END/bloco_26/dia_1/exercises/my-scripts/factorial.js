const { questionInt } = require('readline-sync');

const number = questionInt("Digite um número para saber seu fatorial: ");

const factorial = (number) => {
  if (number < 0) return false;
  return number === 0 ? 1 : number * factorial(number - 1);
}

console.log(`O fatorial do número ${number} é ${factorial(number)}`);

function fac(num) {
  if(num <= 0 ) return 1;
  return fac(num - 1) * num;
}
console.log(fac(2));

// 5
// 4
// 3
// 2
// 1
