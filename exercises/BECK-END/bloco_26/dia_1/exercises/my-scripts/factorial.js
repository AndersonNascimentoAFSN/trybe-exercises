const { questionInt } = require('readline-sync');

const number = questionInt("Digite um número para saber seu fatorial: ");

const factorial = (number) => {
  if (number < 0) return false;
  return number === 0 ? 1 : number * factorial(number - 1);
}

console.log(`O fatorial do número ${number} é ${factorial(number)}`);
